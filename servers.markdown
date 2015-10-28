---
title: Servers
layout: default
---

<section class="intro">
	<p markdown="1">
		This document describes Imarc’s hosting, server, and maintenance practices.
		[Imarc](http://www.imarc.net) is a full service web development and design firm with offices near Boston and Silicon Valley.
	</p>
</section>

## Imarc's Architecture

We employ Amazon's EC2 cloud computing platform in order to maintain long term flexibility and consistency across our hosting environment.  Additionally, EC2 has provided equal or better uptime for our servers while maintaining a number of features which allow for even less downtime during major maintenance.

### Terminology and Components

EC2 provides virtual servers that run Linux, Windows (or recently, FreeBSD) as well as associated resources like storage, IP addresses, load balancers, etc. You should familiarize yourself with the terminology below to understand the relationhip between the various components.

#### Regions and Availability Zones

Amazon's EC2 platform is divided into regions which map to geographical areas such as US East, US West, Japan, etc.  Within each region there are multiple availability zones which are simply lettered such as a, b, c, etc.

#### AMI (Amazon Machine Image)

AMIs are static/frozen image files which contain an operating system, installed software, and configuration similar to a hard drive image of a computer system.

#### Instances and Instance Storage

An instance is equivalent to a single computer system with CPU/Memory/Network and I/O resources.  Each instance is provided instance storage which is a virtual hard disk tied to that instance.

#### EBS (Elastic Block Storage) Volume

An EBS volume is a virtual hard disk which can be detached or re-attached to an instance, since they are not tied to an instance, their data can persist instance termination.

#### Elastic IPs

IP addresses which can be provisioned separately and arbitrarily assigned or unassigned from instances.

#### Launch Configuration and Auto Scaling Groups

Launch configurations define pre-existing settings for creating instances such as instance size and the AMI which to install on it.  Launch configurations are required for auto scaling groups, are instructions on how many instances of that particular launch configuration to start and maintain in order to provide scaling.

### Basic Concepts

Each Imarc server consists of the following:

- 1 Instance
- 1 Elastic IP
- 1 or more EBS Volumes
- 1 Launch Configuration
- 1 Auto Scaling Group

The Launch Configuration defines the size, AMI, and startup instructions for a given instance, while the Auto Scaling Group ensures that there is always a single instance running to fulfill that system.

All resources associated with a single server are tagged with the servers name which is named after some type of beer, for example: ommegang.  Resources are tied together via this tagging.


## Imarc Server Management

In order to make the process of managing servers as easy and as consistent as possible Imarc has built a number of scripts which are designed to provide control over servers.  These scripts interact with the aforementioned components to perform various operations on a single "server" which may affect one or more of the components that make up a server above.

The scripts are hosted in [Imarc's git repositories](http://gitlab.imarc.net/imarc/aws-scripts).  All commands are executed via the `run.sh` script such as:

	run.sh <command>[@<server name>] [<arg1> [<arg2> [...]]]

Most commands can be executed locally or remotely.  So for example, it is possible to install the scripts on a local system and run a command on a remote server, or to log into that server and run the command there without specifying the server name.

In order for the scripts to work, additional tools need to be installed and working properly, namely:

- EC2 AMI Tools
- EC2 API Tools
- IAM Command Line Toolkit
- Auto Scaling Command Line Tool
- Elastic Load Balancing API Tools

All of the above are available in AWS's [developer tools section](http://aws.amazon.com/developertools) and are installed in our AMI releases for use by the scripts.

### Configuring a Server

A server's configuration should generally be added prior to creating it.  The server configuration allows for overriding any of the variables set in the platform configuration or the global settings.

When any script is run, global settings are included first, followed by platform settings, follows by server specific settings.  All settings are located in the `config` folder of the AWS Scripts.

To configure a server, add a file such as `/config/servers/<name>.sh`, commit, and push back to the AWS Scripts repository.  When any scripts run any command, the latest updates will be pulled from git prior to execution, so the new settings should take effect unless the git repository cannot be reached.

You can add custom logic or commands that a server will run whenever a new instance is launched.  This is often useful for installing custom software or setting up highly specific environment settings.  To do this, add the following function to your server config with the requisite commands inside the function:

	##
	## Custom functionality to execute on spawn (you can remove this for default which is the same)
	##
	spawn()
	{
		return 0
	}

#### Testing Scripts and Configs

If you make changes to the AWS Scripts in any way, whether it is a server configuration or a modification to the common behavior, you can test them quickly for potentially catastrophic syntax errors by using the following:

	/root/.ec2/imarc/run.sh test

If you wish to run this on your local system or a sytem which is not configured with access to our current AWS scripts repo, you will need to do something such as the following so that it does not attempt to grab the latest script changes and to ensure it's running as root:

	sudo AWS_AUTOUPDATE="OFF" ./run.sh test

If you want to syntax check a single configuration without testing all the scripts you can do as follows:

	bash -n <path to config script>

### Creating a New Server

Creating a new server will create all of the aforementioned resources and tag them with the servername for grouping. All of the settings below with the exception of the EBS Size can be set in the server config instead of being given at the command line.

	run.sh create-server@<name> <EBS Size in GB> [<Instance Type (m1.small, m1.large, etc)>] [<AMI Type (web-server)] [<Region (us-east-1)>] [Zone (a, b, etc)]

When a new server is created, the instance is provided a bootstrapping script in its user data.  User data is a customizable area in memory which the instance can access directly.  Using the cloud-init package this area is populated with an initialization script which is then executed at startup.  The provided user data script takes the following actions:

1. Clone or update the local aws-scripts copy
2. Execute the the aws-scripts `init.sh` script with the "persist" argument

#### Persisting Instances

Since instances themselves can be terminated arbitrarily (by us or by amazon), the persistence of a server includes a number of operations including copying various data points to the attached EBS volume and creating mount points to remount those directories on startup.  Persistence is also responsible for creating the launch configuration and auto scaling group that will keep the server running even when the instance is terminated.

When the launch configuration is created, the user data is overwritten such that the `init.sh` script is run with the "spawn" argument.  This shares some common functionality with the "persist" method, but does not attempt to persist data and configuration.

#### Notes

- This command will allocate a new IP address if there is no existing one or if the existing one does not match the current DNS record.
- If an IP address needs to be allocated during this process, this command will prompt you to modify the DNS record.  *You must add the record before continuing!*
- If an EBS volume can be created, but the zone is full of instances, the EBS volume will be removed.

### Stopping Auto Scaling

If for some reason a server does not need to be running all the time, it is possible to stop auto scaling and terminate it indefinitely.  The EBS volume and Elastic IP are *not* removed, so you can re-attach an instance later.

	run.sh stop-auto-scaling[@<name>]

#### Notes

- The running instance is terminated
- When run locally on a server, the auto scaling group and launch configuration are *not* removed.
- When run remotely from another system, the auto scaling group and launch configuration are removed.

### Attaching an Instance

If you've stopped auto scaling on a server, but need to bring that server back up to make some modifications to persistent data, you can re-attach an instance to the EBS volume and Elastic IP.  Note that the instance does not have to match the original instance size/details:

	run.sh attach-instance@<name> [<Instance Size (m1.small, m1.large, etc)>] [<AMI Type (web-server)] [Architecture (x86_64, i386)]

Once you have made your changes, you can terminate the instance from the AWS console.

#### Notes

- If an instance is already attached to the volume, the command will error.
- The instance will be started in the same region/zone based on the volume.
- This command can fail if a volume is in a zone which is otherwise full (reserved instances are important).

### Starting Auto Scaling

If you have previously stopped auto scaling but you need to bring a server back up to running full time, you can begin auto scaling again with the following:

	run.sh start-auto-scaling[@<name>] [<Instance Size (m1.small, m1.large, etc)>] [<AMI Type (web-server)] [Architecture (x86_64, i386)]

#### Notes

- This command will error if the instance is already auto-scaling.
- This will enable auto-scaling regardless of the value of $AUTO_SCALE_CAPACITY.
- If the server has no current instance region and zone will be pulled from the matching volume.

### Upgrading an AMI

When Imarc's AMIs are released they often contain critical security updates and general updates to a system.  While it is not necessary to upgrade a server's AMI every release cycle, you should definitely determine if the AMI release will solve your problem or concern before writing custom spawn logic in the configuration.

When you upgrade an AMI the Auto Scaling Group will be given a new Launch Configuration with the newest avaialable AMI ID for the server's AMI Type (usually web-server).  You will be prompted whether or not you want to immediately restart.  If you choose not to, the new AMI will be used when current instance is terminated.

	/root/.ec2/imarc/run.sh upgrade-ami[@<name>]

#### Notes

- Auto-scaling must be enabled on the server since this modifies the Auto Scaling Group.
- To upgrade a non-auto-scaled host, simply terminate it when you like and use `attach-instance` instead, the latest AMI will be used.
- The upgrade is not complete until the currently running host is terminated.


### Creating a Workspace

If you wish to test something without setting up a complete server, you can create a workspace which is basically an instance only version of an Imarc server.  There is no dedicated Elastic IP, no attached EBS volume, etc.  These are used also for building new AMIs on top of existing ones.  These are always small instances.

	/root/.ec2/imarc/run.sh create-workspace [<AMI Type (web-server)] [Architecture (x86_64, i386)] [<Region (us-east-1)>]

#### Notes

- Workspaces will use the latest existing AMI based on type, architecture and region.
- Worspaces will not run any persist or spawn logic, and will have no services enabled by default, they are literally the latest AMI untouched.

### Bundle an AMI

While you can technically bundle an AMI from any server, it is generally recommended to create a workspace and do so from the workspace.  Bundling an AMI will will package an image of the currently running system and upload it to our S3 buckets.  The AMI will be named with the type and the date which is how other commands determine which AMI to use for server setup.

	/root/.ec2/imarc/run.sh bundle-ami [<AWS Bucket (imarc-amis)>] [<AMI Type (web-server)>]

#### Notes

- The region of the AWS (S3) bucket will determine the availability of the AMI.  You can't create a west coast instance with an AMI from an east coast bucket.


## Security, Stability, Reliability

### Software Updates

Imarc releases 3 internal AMIs per year on a 4 month release cycle:

- April
- August
- December

This release cycle provides us an ability to stay on top of upgrades without a huge amount of overhead for major changes in the underlying distribution.  It also enables us to keep up to date on minimal threat security issues and gives us frequent opportunity to add requisite features or consolidate functionality which was otherwise server specific.

While there is no exact release date, we strive to release them every month even in the event that we will not be upgrading all servers.  Each AMI release, at a minimum employs a full `apt-get update` and `apt-get dist-upgrade` until *no new packages are available*.  Individual packages may need to be installed from independent targets in the event of cross repository/target incompatibility.

#### Sources

We only use official and highly regarded repositories.  Currently all official sources for Imarc's internal servers are official Debian repositories, although we do mix packages from stable, unstable, and testing.  Additional repositories which could be used in future releases depending on platform could be:

- [Dotdeb for common debian webstacks](http://www.dotdeb.org/)
- [Remi for making RedHat usable](http://rpms.famillecollet.com/)

#### Security Updates

In the event of critical security updates Imarc works to patch all servers directly without necessarily releasing a new AMI.  This allows us to respond more directly on a per server basis and faster since we don't have to go through as careful checks to make sure no existing servers will be rendered incapable.  Any updates to packages themselves or common changes which need to occur in the AMI can be overridden in every server's config or `spawn` function, or globally in the AWS Scripts themselves.

Examples of major security vulnerabilities which Imarc patched on a per server level:

- Heartbleed
- Shellshock
- Poodle

Depending on the initial assessment of our vulnerability, these updates are generally completed across all servers within 24 - 36 hours.

### Backups

All Imarc servers are provided access to our internal backup service.  Daily backups are performed on every server such that local copies can be immediatley restored from 3 - 7 days past depending on the data.

In addition to this, we have a centralized remote system which connected and stores longer term archives of backed up files.

Backups are almost universal across our common services and include:

- All MySQL Databases
- All PostgreSQL Databases
- All Website (Does not include external cloud storage data)
- Web Server Logs (including access logs)
- Web Server Configs
- Crontabs

### Monitoring

Imarc performs monitoring across all its servers and receives notification of downed servers within 2 minutes of the system becoming unresponsive.  In addition to this newer servers provide much more robust debugging during startup and can notify us if they are terminated (for upgrade or retirement by Amazon) and fail to respawn properly.

Persistent health checks are provided via a paid third party service to ensure that systems are being tested independent of their networks and architecture.
