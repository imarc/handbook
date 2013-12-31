---
title: Deployment
layout: default
---

<section class="intro">
	<p>
		This document describes iMarc’s preferred method for deploying websites using 
		an automated, repeatable system called <tt>patton</tt>.
		<a href="http://imarc.net">iMarc</a> is a full service web development and design firm with offices near Boston and Silicon Valley.
	</p>
</section>

## Concepts

Patton consists of a bash script named `deploy` that is configured by a file
named `patton.config`. Patton is developed in-house to leverage knowledge about
our standard server configuration and workflows and provide an easy-to-use and
easy-to-configure solution that we can adapt over time.

There are a number of core concepts central to how Patton works. These include:
- multiple environments
- the distinction between code and content
- migrations

### Environments

Patton works off of the concept of each site having three environments:

<dl>
	<dt>Dev</dt>
  	<dd>
  		Used for active development; the only environment that developers
  		upload code to
  	</dd>
	<dt>Stage</dt>
	<dd>
		Used to test functionality of committed code and to test the
  		deployment process to the production environment
  	</dd>
  	<dt>Prod</dt>
  	<dd>Live website</dd>
</dl>

Each environment includes both files and a database.

### Code and Content

For the purposes of this document, a website consists of version-controlled
Code, and optionally, non-version-controlled Content.

Code includes text files such as PHP, HTML and CSS, but also related binary
files such as images and flash movies.

Content includes text/HTML content and files on the filesystem that support the
text content. The database structure and filesystem structure used to store
these is considered to be part of the Content.

The definitive copy of all Code are stored in an SVN repository. The definitive
copy of Content is stored in the Prod database or as part of the Prod directory
structure.

### Migrations

SVN naturally allows modification of Code. Since Content is constantly evolving
in the Prod Environment, it is necessary to modify when the supporting Code is
deployed to the Environment. To accomplish this dynamic modification of Content,
there are database and script Migrations.

Database migrations are `.sql` files that are executed against an environment’s
database. Script migrations are `.sh` or `.php` files that are executed within
an Environment. [More on using migrations.](deployment#UsingMigrations)

## Workflows

There are two primary workflows we use with Patton: Live Site and Development
Site. The Live Site workflow is the most common and serves as a baseline with
which to compare the Development Site workflow.

While Patton provides a great deal of functionality and guidance for deployment
of websites, it is still important that everyone involved in a project
understand the workflow and communicate what is being done.

### Common Practices

In all workflows, SVN is the master repository of Code and Code should *never*
be manually edited on the Stage or Prod environments. Edits to Code are
previewed on Dev and committed to SVN. Patton is used to deploy them to the
Stage and Prod environments.

### Live Site Workflow

In the Live Site workflow, a live website is being run in the Prod environment.
This is the standard workflow to be used once a client starts creating Content
on the site.

This workflow means:

- All SiteManager content must be authored in the Prod environment
- Testing content can be created in the Dev and Stage environments, but it
  will be overwritten each time one of those environments is deployed
- [Migration](deployment#UsingMigrations) scripts must be written for database and
  writable folder changes

The Live Site Workflow is enabled by setting `CONTENT_SOURCE_ENV="prod"` in
`patton.config`.

### Development Site Workflow

With the Development Site workflow, the Prod and Stage environments will not
contain any Content, or at least any relevant Content. This workflow is used for
[greenfield projects](http://en.wikipedia.org/wiki/Greenfield_project).

There needs to be clear communication between all members of a project when
using the Development Site workflow to prevent loss of client-supplied data.
**As soon as a client is creating content, the project should immediately
switch over to the [Live Site Workflow](deployment#LiveSiteWorkflow).**

This workflow means:

- **All content on the Stage and Prod environments will be overwritten with
  each commit.**
- All SiteManager content must be authored in the Dev environment
- Database and writable folder changes are manually performed, or a
  [migration](deployment#UsingMigrations) is written and `./deploy dev` is executed to
  run it

The Development Site Workflow is enabled by setting `CONTENT_SOURCE_ENV="dev"`
in `patton.config`.

## Using `deploy`

The `deploy` script has a number of command line flags and parameters to control
how it runs. This documentation was written when `deploy` was at version **6.0**.

The `deploy` and `patton.config` files need to live in the same directory on the
webserver. Before using Patton, you must edit the `patton.config` file and set
the `DOMAIN_NAME` variable to the top-level domain name for the site. Do **not**
include `www.`.

### Initialization (Patton 10.x)

Patton 10+ uses ACLs instead of cludged together `sudo` allowances.  You can
initialize a new skeleton structure with the following.   This will not only create
the various environment folders, but also set their ACLs appropriately.

	./deploy -i .

### Show Config

The simplest operation with Patton is to display the current configuration. This
is done by calling:

	./deploy -c

The output will contain all of the configuration variables along with their
currently computed values. Values printed in yellow have been customized in
`patton.config`, whereas green values are defaults, or default that have been
computed based on other variables.

### Show Revision

For the Stage and Prod environments, an currently deployed SVN revision is
stored and can be retrieved:

	./deploy -v stage
	./deploy -v prod

It is not possible to display the revision on Dev because the Dev environment is
editable and will not normally represent an exact SVN revision.

### Show Log

For the Stge and Prod environments it is possible to see the SVN log for the
revisions that will be deployed:

	./deploy -l stage
	./deploy -l prod

### Deploying

The latest Code and Content can be deployed to any of the three environments.

	./deploy dev
	./deploy stage
	./deploy prod

By default deploying to Dev and Stage will deploy the latest revision from
`/trunk/`. Prod will deploy the revision currently deployed to Stage. This
ensures that all deployments are tested.

#### Specific Revisions

For the Stage and Dev environments it is possible to deploy any revision that
is greater or equal to the revision deployed to Prod.

	./deploy dev 876
	./deploy stage 876

#### Branches

The Dev environment allows for deploying a branch:

	./deploy dev branch_to_deploy

The branch name should be the folder stored under `/branches/`. The example
above would pull from `/branches/branch_to_deploy`.

It is not possible to deploy a branch to Stage or Prod. Branches must be merged
into the trunk to deploy to Stage or Prod.

### Content Source

**Be sure to read about the [Development Site Workflow](deployment#DevelopmentSiteWorkflow)
and communicate with the rest of the project team before using this feature.**

To use the Development Site workflow, the `CONTENT_SOURCE_ENV`
variable in `patton.config` must be set to `dev`.

	DOMAIN_NAME="example.com"
	CONTENT_SOURCE_ENV="dev"

This will cause all deploy operations to treat the `dev` environment as the
definitive source for content. Using this option will require explicit
confirmation when deploying to `prod`, in an attempt to help prevent
accidentally overwriting client content.


## Using Migrations

Patton expects database and script migrations to be stored in specific locations
within the repository. It determines what migrations to run based on when the
migration was added to the repository.

### Database Migrations

Database migrations are files that end with `.sql` in the
`/database/migrations/` folder that lives either inside of `/trunk/` or
`/branches/branch_name/`.

*The SQL commands are executed as an admin level user. To see what user will be
used, execute `./deploy -cq` and look for the `DB_ROOT_USER` setting.*

Database migration files should include SQL statements, terminated by `;`s.

	BEGIN;

	CREATE TABLE logins (
	  login_id SERIAL PRIMARY KEY,
	  user_id INTEGER NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
	  "timestamp" TIMESTAMP NOT NULL
	);
	-- We don't need to track this anymore since we track all logins
	ALTER TABLE users DROP COLUMN last_login;

	COMMIT;

	SELECT grant_to_web();

Any migrations that add database tables should include `SELECT grant_to_web();`
when running on the standard iMarc server setup. This will allow the website
to access data inside of the table.

For migrations on a PostgreSQL database, use database transactions (`BEGIN` and
`COMMIT`) to make sure your database changes are atomic and don’t partially
fail.

### Script Migrations

Script migrations are scripts that end with `.sh` or `.php` and are stored in
the `/scripts/migrations/` folder that lives either inside of `/trunk/` or
`/branches/branch_name/`.

//The scripts commands are executed as the OS deploy user. To see what user
account will be used, execute `./deploy -cq` and look for the `DEPLOY_USER`
setting.//

Script migrations that end in `.sh` will be executed by bash, whereas migrations
ending in `.php` are executed by PHP on the command line.

#### Enviromental Variables

The following environmental variables are available directly in shell scripts,
or in PHP via the `$_ENV` superglobal.
 
 <dl>
	<dt>ENVIRONMENT</dt>
	<dd>The current environment, e.g. `dev`</dd>
	<dt>ENV_DOMAIN_NAME</dt>
	<dd>The domain name of the current environment, e.g. `dev.example.com`</dd>
	<dt>ENV_DIR</dt>
	<dd>
		The root directory that contains the current environment,
		e.g. `/home/www/example.com/dev`
	</dd>
	<dt>ENV_WRITABLE_DIR</dt>
	<dd>
		The directory that contains writable files for the current environment,
		e.g. `/home/www/example.com/dev/writable`
	</dd>
	<dt>DB_ROOT_USER</dt>
	<dd>The database user to connect as, e.g. `postgres`</dd>
	<dt>ENV_NEW_DB</dt>
	<dd>
		The new database that has had all migrations applied to it,
		e.g. `dev_example_com_new`
	</dd>
	<dt>ENV_OLD_DB</dt>
	<dd>
		The old database for the environment, e.g. `dev_example_com`.
		*This is not normally useful because this database is dropped by 
		the end of deployment when deploying to the `dev` and `stage`
		environments, and is the same as `ENV_NEW_DB` for the `prod`
		environment.*
	</dd>
	<dt>SVN_REV</dt>
	<dd>The SVN revision being deployed, e.g. `123`</dd>
	<dt>ENV_PREFIX</dt>
	<dd>The upper-case env name with an _, e.g. `DEV_`</dd>
 </dl>

#### Example PHP Migration

PHP migration scripts require a certain amount of setup to make the `$_SERVER`
superglobal contain the same keys that would be present with an Apache request.

	$_SERVER['DOCUMENT_ROOT'] = getenv('ENV_DIR') . '/docroot';
	$_SERVER['HTTP_HOST']     = getenv('ENV_DOMAIN_NAME');
	$_SERVER['REQUEST_URI']   = '/';

	// Load up the common initialization code
	include $_SERVER['DOCUMENT_ROOT'] . '/inc/init.php';

	// Attach the new database to the ORM so our changes aren't thrown out
	fORMDatabase::attach(new fDatabase('postgresql', getenv('ENV_NEW_DB'), 'web', ''));

	// Delete the users in PHP so the files get deleted too
	foreach (User::buildInactive() as $user) {
	    $user->delete();
	}

#### Example Shell Migration

##### Patton 10+

Newer versions of patton use ACLs so you should not need to worry about using
`chmod` or `chown`.  You should be able to `mkdir`, `rm`, `cp`, and `mv` as you
please with no sudo necessary.

	# Create a new directory
	mkdir -p $ENV_WRITABLE_DIR/photos/photo

	# Delete an old directory
	rm -Rf $ENV_WRITABLE_DIR/photos/photo

	# Move a folder
	mv $ENV_WRITABLE_DIR/photos/photo $ENV_WRITABLE_DIR/photos/image

Additionally, since proper defaults are set on writable folders, you do not
need to worry about granting permissions to additional users.

##### Earlier

Bash migration scripts have a specific number of commands that can be executed
as `root` via `sudo` to allow for the low-privilege `deploy` to perform common
actions.

- `rm -Rf`
- `mv` 
- `chmod -R`
- `mkdir -p`

The following shell migration script shows how to use this commands with `sudo`
to manage the `/writable` directory.

	# Create a new directory
	sudo mkdir -p $ENV_WRITABLE_DIR/photos/photo
	sudo chmod -R 777 $ENV_WRITABLE_DIR/photos/photo

	# Delete an old directory
	sudo rm -Rf $ENV_WRITABLE_DIR/photos/photo

	# Move a folder
	sudo mv $ENV_WRITABLE_DIR/photos/photo $ENV_WRITABLE_DIR/photos/image

### Adding a Migration

Patton determines what migrations to run based on the currently deployed
revision on Prod. All migrations added to SVN in a revision higher than the one
deployed to Prod will be executed. For example:

- Prod is at revision 115
- `migration1.sh` was added in r115
- `migration2.sql` was added in r116

When deploying to Dev or Stage, only `migration2.sql` will be run since
`migration1.sh` was added in a revision that has already been deployed to Prod.
