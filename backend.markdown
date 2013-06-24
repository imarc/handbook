---
title: Backend
layout: default
---

# Backend

<section class="intro">
	<p>
		This document describes iMarc’s code standards for developing databases and
		writing PHP. iMarc is a full service web development and design firm located
		north of Boston.
	</p>
	<a class="button" href="http://imarc.net">Learn more about iMarc</a> 
</section>

## Development Environment

iMarc’s target development and production platform is:
 - Linux or FreeBSD operating system
 - Apache 2.2+
 - PHP 5.2+
 - PostgreSQL 8.3+

The PHP library we use is
[Flourish](http://www.flourishlib.com). Documentation can be
found at
[http://flourishlib.com/docs](http://flourishlib.com/docs).


## UTF-8

[UTF-8](http://flourishlib.com/docs) should be used as the character
encoding for all aspects of a web applicaiton.

UTF-8 is one of the most robust and widely-supported character encodings, which
means that all parts of a site can share content without converting between
encodings.

The following list of includes some of, but not necessarily all, the aspects of
a site that need to be build with UTF-8 in mind:

HTML
:	Set your editor to use UTF-8. Include the correct meta tags, 
	as specified by [frontend standards](/frontend#UTF-8). Force the correct 
	HTTP content-type header.

	<tt>header('Content-Type: text/html; charset=utf-8');</tt> 
	or 
	<tt>fHTML::sendHeader();</tt>

PHP
:	Use correct content-type headers and meta tags to ensure that 
	browsers are sending UTF-8 for form contents. Also use UTF-8 safe string functions.

Database
:	Most databases require that the encoding be set when the database is created. 
	Ensure your database connection is set to use UTF-8.

Email
: 	When sending emails, be sure to use code that supports UTF-8 in recipient names, 
	the subject and the body

Other Data
:	Be sure to convert (if necessary) and clean data coming from old databases, 
	external systems, XML files, CSV files and other such data sources

See [Flourish’s UTF-8 docs](http://flourishlib.com/docs/UTF-8) for
more explanation and examples.


## Line Breaks

Set your text editor to only use Unix line-break (`\n`), not Windows (`\r\n`)
or Mac (`\r`) breaks.


## Style

PHP code follows the [K&R indent and bracing
style](http://en.wikipedia.org/wiki/Indent_style#K.26R_style).  That style is decribed in
this section.


### Indenting & Spacing

Use tab character at the beginning of a line. A tab is expected to represent
the width of four spaces.  For inline spacing, use spaces, not tabs.

	if (condition) {
		action(); // indented with one tab
	}
	$foo      = "bar";    //lined up with spaces
	$foo_bar  = "foobar"; //lined up with spaces

Since inline content is lined up with spaces, a mono spaced font is always used
when editing code.


### Bracing & Indenting Blocks

The K&R indent style means that function, method, and class definitions place
the opening curly brace, unindented on a new line by itself. Content after the
opening brace is indented. The closing brace is placed on a line by itself at
the same indent level as the opening brace.

Control blocks like `if` or `while` keep the opening brace on the same line as
the control statement.

	function foo_function($arg1, $arg2='')
	{
		if (condition) {
			action();
		}
		return $val;
	}

**Arrays** — Complex or nested arrays use the following indention format, noted
via the closing parenthesis characters:

	$arrayname['index'] = array(
		'name1' => 'value1',
		'name2' => array(
			'subname1' => 'subvalue1',
			'subname2' => 'subvalue2'
		)
	);


### Code & Markup Indenting

When breaking between PHP and HTML, follow the same indenting standards. With
the exception of PHP tags, after one item opens, the next item is indented.

	<div>
		<?
		try {
			$users->tossIfEmpty();
			?>
			<table>
				<tr>
					<th>Name</th>
				</tr>
				<?
				foreach ($users as $user) {
					?>
					<tr>
						<td>
							<?= $user->getName() ?>
						</td>
					</tr>
					<?
				}
				?>
			</table>
			<?
		} catch (fEmptySetException $e) {
			$e->printMessage();
		}
		?>
	</div>


### SQL Indenting

Non-trivial SQL statements should be broken onto multiple lines for
readability.

	SELECT
		u.user_id,
		u.first_name,
		u.last_name
	FROM
		users AS u INNER JOIN
		groups AS g ON u.group_id = g.group_id
	WHERE
		g.name = 'Administrators' AND
		g.status = 'Active'
	ORDER BY
		u.last_name ASC,
		u.first_name ASC

	INSERT INTO users (
		first_name,
		last_name,
		address,
		city,
		state,
		zip_code
	) VALUES (
		'John',
		'Smith',
		'14 Inn St',
		'Newburyport',
		'MA',
		'01950'
	);


### SQL Capitalization

SQL identifiers are lower case. All SQL reserved words and functions are
uppercase.

	CREATE TABLE users (
		user_id SERIAL PRIMARY KEY,
		name VARCHAR NOT NULL,
		status NOT NULL DEFAULT 'Active' CHECK(status IN ('Active', 'Inactive'))
	);


## Storing and Naming Files

This section describes file and directory naming conventions and overall
directory structure.


### Directory Structure

All server-side files should be kept separate from public files. This helps
prevent unintentional exposure of sensitive information such as passwords.

**Server-side files** are files that are written in a programming language that
is executed on the server. The output of these files is sent to the user’s
browser. These are stored outside of the document root of the website in a
folder called `/app/`.

**Public files** include all files that are directly sent to the client without
any sort of processing. This includes images, CSS, JS, and other supporting
files such as `robots.txt`. These files are stored in the document root.

Files that can be written or uploaded by the webserver are stored in
`/writable/`.

	/app - all PHP and server-side code
		/config - all configuration
		/controllers - all PHP controllers
			/site
			/sitemanager
		/helpers - local PHP code that is not a controller or view
		/lib - third-party libraries such as Flourish, iMarc Framework, etc
		/models - all database model classes
		/modules - reusable combination of a controller and a view
		/partials - reusable HTML/PHP templates
			/site
				header.php
				footer.php
			/sitemanager
				header.php
				footer.php
		/views - all HTML content for the site
			/site
			/sitemanager
		init.php - PHP environment initialization

	/docroot - all files that are sent directly to a browser
		/css
		/flash
		/img
		/js
		/writable - symlink to ../writable
		.htaccess - used to configure Apache
		bootstrap.php - this should be the only PHP file in the document root
		robots.txt

	/writable - organized in sub-directories


### Naming Server-Side Files

All server-side code is stored in the `/app/` directory. This folder is a
sibling of the `/docroot/` folder.

Non-class files are named with all lowercase letters and underscores.  Example:
`/app/views/site/member_portal.php`.

Class files are named `[ObjectName].php`, following the same rules as class
names.


### Naming Public Files and Directories

All public files are stored in directories according to their filetype or
function. These directories are lower case with underscores instead of spaces.
For example, all CSS file are stored in the `/css/` folder.


#### Controllers & Views

Controllers are classes that perform all business logic and include a
corresponding view to create output. An individual page is mapped to a method
in a controller, while a controller represents a whole web path folder.  All
pages will have a controller method, even if there is no business logic beyond
including the appropriate view.

Controllers are class files that contain an `_` between subsections. When
mapping `_`s to the filesystem, they are changed to directory separators `/`.
Example: the “About” section would have a controller named `Site_About.php`.
This class would be stored in `/app/controllers/site/About.php`.

Views should mirror the folder structure of controllers, with the filename
being the `underscore_notation` version of the controller method. Example: the
controller/method `About::contactUs()` method would load the view
`/app/views/about/contact_us.php`.

Views are always stored in the `/app/views/` folder, and never in the
`/docroot/`.

The following is an example directory structure for an about section of a
website.

	/app
		/controllers
			/site
				About.php
		/views
			/site
				/about
					main.php
					news.php
					news_article.php

The primary method and view for a section of the site should be called `main()`
and `main.php`.


#### Partials

Reusable parts of a view – modular elements that can be included in multiple
views – are stored in the `/app/partials/` directory. Partials should be
organized into subfolders that represent where they are used on the site, such
as the `/site` and `/sitemanager` sections.


#### Modules

A combination of reusable controller and view code is called a module and is
stored in the `/app/modules/` directory.


## Separation of Concerns

All backend code will fall into one of three areas of concern: data access,
display, or business logic. These areas map roughly to the Model, View, and
Controller aspects of an MVC architecture. The code for each of these areas of
concern should be kept separate from the others.


### Models

The model layer contains all code that interacts with the database. Models
provide an API to the controller and views. Models are implemented as classes.

	class User extends fActiveRecord
	{
		static public function buildActive($per_page=0, $page=1)
		{
			return fRecordSet::build(
				__CLASS__,
				array('status=' => 'Active'),
				array('first_name||last_name' => 'asc'),
				$per_page,
				$page
			);
		}
	}

All data access should go through model objects and not through lower-level
database related APIs such as `fDatabase` or `fRecordSet`. Model objects should
not handle user input or output content.


### Controllers

The controllers for a site interpret user input, determine actions to perform
on models, then direct output by selecting an appropriate view. Controllers may
be procedural pages or classes.


	class Users extends MoorActionController
	{
		public function listUsers()
		{
			$per_page = fRequest::getValid('per_page', array(10, 25, 50));
			$page     = fRequest::get('page', 'integer', 1);

			$this->template->set(array(
				'users' => User::buildActive($per_page, $page),
				'view'  => './views/users/list.php'
			));

			$this->template->place('view');
		}
	}

Controllers should never directly access the database or output content.


### Views

The view layer contains all code for generating output, whether it be HTML,
JSON or CSV. Code in views is limited to conditional logic, encoding, and
formatting.

	<div>
		<?
		foreach ($this->get('users') as $user) {
			?>
			<div class="user">
				<h2><?= $user->encodeName() ?></h2>
				<!-- More content… -->
			</div>
			<?
		}
		?>
	</div>

Views should only interact with models and data passed to them by the
controller.  Views should not directly interpret user input or implement
business logic.


## Database Documentation

A project's databases should be documented with a single `.sql` file. The file
follows the same naming convention as the database and is stored in the
revision control system under `/trunk/database/`.

The database documentation file is organized as follows:

 1. Any customizations to the database as a whole (such as the commonly used `grant_to_web()` function)
 2. `DROP TABLE` statements – organized with linking tables first, followed by any other tables. These are ordered in the reverse order of `CREATE` statements
 3. `CREATE TABLE` statements – organized with standard tables first, followed by linking tables
 4. `INSERT` statements


## PHP Code Tags

Class files always use long form PHP tags – `<?php ?>`, not `<? ?>`. This is
required for PEAR compliance and increases portability on differing operating
systems and setups.

	<?php
	class CalendarDisplay extends Calendar
	{
		// ...
	}

Shorthand PHP tags – `<? ?>` – should be used in views, controllers, and other
non-class files. Shorthand tags promote readability and brevity, which outweigh
the loss of portability when
[short_open_tag](http://us4.php.net/manual/en/configuration.directives.php) is turned off.

	<div class="success">
		<p>
			<?= $name ?> successfully added.
		</p>
	</div>

Don’t use a semicolon with the short tag echo shortcut, `<?= $foo ?>`


### Mixing PHP and HTML

Break out of PHP for any non-trivial HTML output.

	<?
	$users = User::findActive()->getRecords();
	foreach($users as $user) {
		?>
		<div>
			<p><?= $user->encodeName() ?></p>
			<p><?= $user->encodePhone() ?></p>
			<p><?= $user->encodeWaterPoloScore() ?></p>
		</div>
		<?
	}

If an opening HTML tag is printed outside a PHP block, the closing HTML
counterpart is output the same way.

	<table>
		<tr>
			<?
			// do stuff in PHP
			?>
		<tr>
	<table>


## Namespace, Class, Method, and Function Declarations

Namespace declarations should be placed in the second line of a PHP file
following the PHP open tag.

	<?php
	namespace Controllers;

Class declarations follow the K&R style for of indenting and bracing, by
placing the opening brace on a new line, the same indention level as the
declaration. Statements are indented within the braces. The closing brace is
placed on a line of its own at the same indentation level as the opening brace
and declaration.

	class MyObject
	{
		//....
	}

Function and method declarations also follow this same K&R indent style

	static public function fooMethod($bar, $baz, $foobar='')
	{
		//....
	}

	private function barMethod($arg_1, $arg_2='')
	{
		//....
	}

**Method Visibility** – For consistency, method visibility should be
explicitly defined. This includes `public`, even though it's implied.

While `static public function foo()` and `public static function foo()` are
treated identically, start with `static` so the static keyword stands out.

## Naming Conventions

File naming conventions are described in [Storing and Naming
Files](#StoringandNamingFiles).


### Database Naming Conventions

Name your database after the primary domain it serves. Since database names
can’t contain periods, replace the domain’s period(s) with underscores. Exclude
'www' from the database name unless the domain starts with with a number, since
databases names in most systems can't start with numbers.

	Domain: example.com
	Database Name: example_com

	Domain: wiki.example.com
	Database Name: wiki_example_com

	Domain: 123project.com
	Database Name: www_123project_com

All names (database, table, and column names) are lowercase, with underscores
to separate words, to avoid case sensitivity issues.

Table names are plural (`users`).

Column names are singular (`first_name`).

The primary key column is named the singular of the table name followed by
`_id`:

	Table Name:  users
	Primary Key: user_id


### Variable Naming

Variable names should be in lowercase and use underscores to separate words.

	$page_function = "foo";
	$database_user = "mysql";

Variable names must be meaningful. One letter variable names must be avoided,
except for places where the variable has no real meaning or a trivial meaning
(e.g. for (`$i=0;` `$i<100;` `++$i`)).

### Namespace Names

Namespaces should be given a name describing the the project or segment of
the project. Namespaces must be in upper camel case.

	namespace MyLibraryName\Extensions;

### Class Names

Classes should be given descriptive names. Avoid using abbreviations.

Classes are named in upper camel case. Each word in the class name should start
with a capital letter, without underscore delimiters. Acronyms retain their
capitalization.

	class GoodExample
	{
		// ...
	}

	class Curl
	{
		// ...
	}

	class FTPClient
	{
		// ...
	}

Poor examples of class names might be `foobar`, `foo_bar` of `fooBarSup`.


### Method Names

Method names follow the lower camel case convention. The initial letter of the
name is lowercase, and each letter that starts a new ‘word’ is capitalized.
Like class names, acronyms retain their capitalization.

	class GoodExample
	{
		public function connect()
		{
			// ...
		}

		public function getData()
		{
			// ...
		}
	}

Poor examples of method names might be `get_Data()` or `buildsomewidget()`.


### Function Names

User defined functions should be in lowercase, with words underscore to
separate words. Take care to minimize the letter count, but do not use
abbreviations, because they greatly decrease the readability of the function
name itself.

	function mcrypt_self_test()
	{
		// ...
	}

	function mysql_list_fields()
	{
		// ...
	}

Poor examples of function names might `hw_GetObjectByQueryCollObj()` or
`jf_n_s_i()`


## Commenting

Here, we differentiate between //library code// and other code. Library code is
a reusable component of iMarc’s code library. Library code continually evolves,
often with multiple developers working on them. Library code requires more
extensive commenting.

An application also uses other code, such as controllers, models, and other
helpers. This code may be commented with less detail.

When possible, wrap all comments at 80 characters to increase readability.


### Library Commenting

Inline documentation for library code follows the [PHPDoc
convention](http://manual.phpdoc.org/HTMLSmartyConverter/HandS/phpDocumentor/tutorial_phpDocumentor.pkg.html).

PHPDoc uses multi-line comments that start with `/**` on a line by itself and
ends with `*/` on a line by itself. These are called doc blocks. Doc blocks
contain a description of the element being commented, followed by a number of
`@`-demarcated tags.

An example of the doc block for a method is shown below.

	/**
	 * Sets the user's password. If the password is empty, the existing value will be left.
	 * If the password changed, an email is triggered to the user.
	 *
	 * @param  string $password User's password
	 * @return void
	 */


#### Library Class Comments

The class header block at the top of the file uses the template below.

	/**
	 * Description of class
	 *
	 * @copyright 1999-2005 iMarc LLC
	 *
	 * @author  Original Author [initials] <author@example.com>
	 * @author  Your Name [initials] <you@example.com>
	 *
	 * @version 0.0.2
	 *
	 * @changes 0.0.2 Description [initials, YYYY-MM-DD]
	 * @changes 0.0.1 Description [initials, YYYY-MM-DD]
	 */

Any edit that noted in the changelog requires new authors to add their name and
initials to the `@authors` list.


#### Library Function and Method Comments

Functions and methods are commented using the template below. If there are no
parameters, do not include `@param void`.

`@throws` tags should be included for every class of exception that is thrown
under normal circumstances and that should be handled by calling code. For
instance, if an exception is thrown when the network is down, you don’t
need to document that.

	/**
	 * Description of function.
	 *
	 * @throws ExceptionClass  Under what conditions the exception is thrown
	 * @throws OtherException  Under what conditions the exception is thrown
	 *
	 * @param  datatype  $variablename   Description of variable.
	 * @param  datatype  $variable2name  Description of variable2.
	 * @return datatype  Description of return value.
	 */


#### Library Class Variable Comments

Verbose variable comments follow the PHPDoc convention and include a
description and datatype.

	/**
	 * Variable description
	 *
	 * @var datatype
	 */
	private $database;


#### Library Versioning

All framework class files are versioned with three revision numbers.

\[major\].\[minor\].\[bugfix\]

 - \[bugfix\] increases if a bug has been fixed, but no new feature has been added
 - \[minor\] increases if a new feature has been added while maintaining backward compatibility
 - \[major\] increases if backward compatibility breaks or a number of major features have been added


### Non-Library Commenting

Code outside of iMarc’s framework library less verbose, clear, and unobtrusive
commenting.

Non-library classes are not versioned.


#### Class Comments

Non-library classes only require a short description and copyright.

	/**
	 * Description of class
	 *
	 * @copyright 1999-2005 iMarc LLC
	 */


#### Non-Library Function and Method Comments

Non-library functions and methods may be commented using the PHPDoc convention
[described above](#LibraryFunctionandMethodComments). Non-library
functions and methods can also skip comments completely.


#### Non-Library Class Variable Comments

Variables in non-library classes can follow a simpler comment style or skip
commenting completely.

	private $database; // holds database connection
	private $first_name;
	private $last_name;


### Inline Comments

Inline comments should explain the reason behind a line of code or block of
code. Comments should not explain what the code is actually doing, as that can
be surmised from the code itself.

Inline comments always follow the C++ comment style with two forward slashes

	// Admin searches go back to the SiteManager since the normal view can't
	// handle ordering by anything but association or date created
	if ($admin_search) {
		$destination = '/sitemanager/assets/assets.php' . $destination;
	}

	// Set domain-wide cookie for 3rd party video site to read (video.example.com)
	fCookie::set('video_access', 'on', '0', '/', '.example.com');

	User::foo(); // brief explanation

C-style comments, `/* comment */` are reserved for header blocks, classes, and
functions, not inline commenting.

Using C-style comments inline can cause problems if a maintainer wants to
comment out a large block of code.

	/* Temporarily disabling this check...
	if (User::isAdministrator()) {
		User::foo(); /* brief explanation */
	}
	*/

[Unix shell-style](http://php.net/manual/en/language.basic-syntax.comments.php)
comments – `# comment` – are always avoided.


## Control Structures

Control structures, such as `if`, `for`, `while`, or `switch`, place the
opening brace is on the same line as the control statement. Code starts
indented on the next line. The closing brace is on the same indenting level as
the control statement.

Control statements also have one space between the control keyword and opening
parenthesis to distinguish them from function calls.

	if (User::isAdministrator() || ($status == 'Active')) {
		action_foo();
	} elseif ($status == 'Inactive') {
		action_bar();
	} else {
		action_baz();
	}

Use `elseif`, not `else if`.

Complicated condition checking should be performed by assigning boolean values
to meaningful variables and should then be combined on a single line for the
`if` statement:

	$foo_bar_not_baz = $foo && $foo == $bar && $foo != $baz;
	$bar_like_baz    = !empty($bar['name']) && $baz['name'] && $bar['name'] == $baz['name'];
	if ($foo_bar_not_baz || $bar_like_baz) {
		action1;
	}

Do not omit the curly braces under any circumstance.

In the case of a large number of short tests and actions, a single line
condition and code-block is acceptable.

	if ($foo === TRUE) { foo(); }
	if ($bar === TRUE) { bar(); }

For switch statements, cases are indented one level. Case actions are indented
two levels. The `break` statement is always on a line by itself.

	switch (User::getStatus()) {
		case 'Pending':
			action_pending();
			break;

		case 'Inactive':
			action_inactive();
			break;

		default:
			action_active();
	}


## Method & Function Calls

Methods and functions are called with no spaces between the function name, the
opening parenthesis, and the first parameter. There is one space after each
commas separating parameters. There is no space between the last parameter, the
closing parenthesis, and the semicolon.

There is one space on either side of an equals sign used to assign the return
value of a function to a variable.

	$foo = foo($var1, $var2, $var3);
	$bar = $users->foo($var1, $var2, $var3);
	$baz = Groups::getUsers($var1, $var2, $var3);
	$qux = Groups::getUsers(
		$var1,
		str_replace('abc', 'def', $var2),
		$var3
	);

With a block of related assignments, align the columns to promote readability.
The second column begins one space after the longest item in the first column.

	$short         = foo($bar);
	$long_variable = foo($baz);

If assigning a reference to a variable, place the ampersand next to the equal
sign, not the referenced object.

	$reference =& $foo;
	$reference =& foo();

When using `include`, `include_once`, `require`, or `require_once`, the
parentheses are left out.

	include $_SERVER['DOCUMENT_ROOT'] . '/app/init.php';


## Example URLs and IPs

Use `example.com` for all example URLs, per [RFC
2606](http://www.faqs.org/rfcs/rfc2606.html).

Use the IP range `192.0.2.0/24` for all example IP addresses, per [RFC
3330](http://www.faqs.org/rfcs/rfc3330.html). If you just need a single
IP address use `192.0.2.1`


## PHP Settings

All code must work with
[register_globals](http://us.php.net/manual/en/security.registerglobals.php) disabled.

To retrieve submitted data, use the more specific `$_GET` or `$_POST`, not
`$_REQUEST`


## Regular Expression Functions

Always use [preg_](http://www.php.net/manual/en/ref.pcre.php) functions
instead of [ereg_](http://www.php.net/manual/en/ref.regex.php) (and
[preg_split()](http://www.php.net/manual/en/function.preg-split.php) instead of
[split()](http://www.php.net/manual/en/function.split.php)); they are included in
PHP by default and much more efficient and much faster than
[ereg_](http://www.php.net/manual/en/ref.regex.php).


## Private Variables

Make all class variables private or protected (unless there’s a really good
reason not to). Create `setBar()` methods to set private class variables, and
`getBar()` methods to retrieve their data.

	class Foo
	{
		private $bar;

		public function setBar($in) {
			$this->bar = $in;
		}
		public function getBar() {
			return $this->bar;
		}
	}


## Error Handling

Errors and exceptions are handled through Flourish.

	define('ERROR_DESTINATION', 'team@imarc.net');

	fCore::enableErrorHandling(ERROR_DESTINATION);
	fCore::enableExceptionHandling(ERROR_DESTINATION);

Production and staging environments are generally configured to email error
messages, while development environments typically display error messages on
screen as HTML.

Production environments should never display PHP-generated error messages to
the end-user.

When error messages are emailed, always address a production team, not an
individual developer, in case that developer is not available. The preferred
format for emailing error message is `team+project@imarc.net` (example:
`quanta+example.com@imarc.net`)


### Error Reporting

All code must work with
[error_reporting](http://www.php.net/manual/en/ref.errorfunc.php#ini.error-reporting) set to `E_ALL`
and `E_STRICT`.


### Error Checking

Exceptions and try/catch blocks should be used for error handling. Do not use
function or method return values to indicate success or failure.

	try {
		if (empty($foo)) {
			throw new Exception("Error message");
		}

	} catch (Exception $e) {
		echo $e->getMessage();
	}

See [Flourish’s fException
documentation](http://flourishlib.com/docs/fException) for information on
which exception type to throw.


## Existence checking

Often you’ll need to check whether or not a variable, property or array key
exists.  There are several similar methods to do this. In general, use the
simplest.

If you need to know if a variable exists at all and is not `NULL`, use
[isset()](http://www.php.net/manual/en/function.isset.php).

	// Check to see if $param is defined.
	if (isset($param)) {
		// $param may be FALSE, but it's there.
	}

If you need to know if a variable exists AND has a non-empty value (not `NULL`,
0, `FALSE`, empty string or undefined), use
[empty()](http://www.php.net/manual/en/function.empty.php).

	// Make sure that $answer exists, is not an empty string, and is
	// not 0:
	if (!empty($answer)) {
		// $answer has some non-false content.
	} else {
		// (bool)$answer would be FALSE.
	}

Don’t use [array_key_exists()](http://www.php.net/manual/en/function.array-key-exists.php)
unless it is possible that an array key has a value of `NULL`.
`array_key_exists()` runs many times slower than `isset()` because a full array
scan must be performed.

	// Make sure we have a charset parameter. Value could also be NULL.
	if (!array_key_exists('charset', $params)) { }


## Quoting

Use your judgement when quoting strings. The following variations of single and
double quotes are all considered good practice at iMarc.  //Just be consistent
within a single application.//

	$foo = "value";
	$foo = "Isn't it neat?";
	$foo = 'Bob said, "I like that"';
	$foo = "Name\tEmail\tZip\n";

	echo "Hello World";
	echo 'Hello World';

	$foo['bar'] = "someval";

	if ($var == 'something') { ... }

	Database::Select('*', 'table', 'this', 'that');


## Constants

Constants should use ALL CAPITAL LETTERS with words separated with an
underscore.

	define("MY_VARIABLE", "foo");
	define("MY_OTHER", "bar");


## Security

### SSL (HTTPS) Usage

All sites that handle payments **must** have an SSL certificate, and all pages
that involve payment, checkout or login **must** only be accessible via a
secure connection. In addition, all pages that require a user login to view
must only be accessible over a secure connection.

Sites that provide a login mechanism should, if possible, only allow access to
pages via a secure connection. This provides the highest level of security and
prevents against sessoin sidejacking attacks, especially over unprotected
networks.

The php ini setting `session.cookie_secure` must be set to `1` before the
session is opened if all pages on a site are configured to use an SSL
certificate.

	ini_set('session.cookie_secure', 1);


### Preventing Cross-Site Scripting (XSS)

Whenever working with data input by a user, whether from the query string, form
inputs or cookies, be sure to escape the data before echoing it to prevent
[XSS](http://en.wikipedia.org/wiki/Cross-site_scripting). This prevents malicious
users from injecting javascript functionality or unapproved content into pages.

	// GOOD Examples
	echo fRequest::encode('name');
	echo htmlentities($_GET['name'], ENT_COMPAT, 'UTF-8');

	// BAD Examples
	echo $_POST['email'];


### Use Appropriate HTTP Methods

Any sort of script that saves data in a database, changes the state of
something, sends an email, or any other sort of creative or destructive action
should always be done via the HTTP POST method. This helps prevent Cross-Site
Request Forgeries (CSRF) and prevents search engines from affecting the content
of a site.

	// DO this
	if ($_SERVER['HTTP_METHOD'] == 'POST') {
		delete_from_database();
	}

	// NOT this
	delete_from_database();


### Use Tokens to Prevent Cross-Site Request Forgeries (CSRF)

[CSRF](http://en.wikipedia.org/wiki/Cross-site_request_forgery) attacks leverage
the fact that users are often logged into multiple sites in a single browser
at a time. They make fake requests to sites via image tag src URLs and
javascript.

To prevent CSRF attacks, use the HTTP POST method for creative or destructive
actions and always include a token. The token should be a random string that is
provided to the user in a hidden form input and is then verified against a list
of tokens saved in their session.


## URLs

Whenever possible, use mod_rewrite or a PHP front controller to create URLs
that don’t have the `.php` suffix. Similarly, try to avoid having URLs that
reference `index.php`.

	/about/contact_us
	/members/benefits
	/

Poorly constructed URLs might be `/about/contact_us.php` or `/index.php`


### Friendly URLs

URL words are lower case with hyphens as separators.  With dynamic pages, 
use the title or primary content identifier in the URL to help with 
search engine optimization.

	/news/50-how_sarbanes-oxley_affects_your_business

When using dynamic content such as an article title to create a URL, limit the
textual portion to about 50 characters. Trim on a natural word break if
possible.

	// Blog Title = We're Hiring: Positions available for PHP developers and Systems Administrators
	// URL = /blog/932-were_hiring_positions_available_for_php_developers


### Trailing Slashes

URLs should never end with a trailing slash.

	/about/employees/developers/bob
	/about/employees/developers
	/about/employees
	/about

In production environments, we aim to be more lenient in what’s acceptaned.
Production URLs that end with a slash permanently redirect to the actual URL.
For example, `/about/employees/` will redirect to `/about/employees` in
production, but during development, `/about/employees/` will result in a 404
error.  This ensures all links to a single resource are consistent.


### Query Strings

Individual resources or pages should not use a query string for identification.
When creating URLs for dynamic or database-driven content, put database primary
keys and actions in the path. If possible, also include the name of the
resources to make for human-readable URLs.

	/news/12-historians_debate_mason-dixon_line
	/events/201-annual_membership_class

Poorly constructed page or resource URLs might be `/news/index.php?news_id=12`
or `/events/?event_id=201&action=view`.

Query strings should be used for view parameters, such as a filter, page
number, sort direction or sort column.

	/search?keywords=John+Smith&page=2

A poorly constructed version of the above would be `/search/John+Smith/page/2`.


## Formatting

### Dates

Don’t format human-presentable dates with leading zeros. Use `May 4, 2010`
instead of `May 04, 2010`.


### Filesystem Paths

When including site-wide files, such as classes, paths should be absolute and
will normally be based on `$_SERVER['DOCUMENT_ROOT']` or a similar
application-level constant.

	require $_SERVER['DOCUMENT_ROOT'] . "/path/to/Class.php";

When including files specific to the current page or section, use a relative
path that starts with `./` to prevent PHP from looking in every folder in the
`include_path`.

	include './views/add_edit.php';


## Tips

### Boolean Returns

In simple conditional statements, return the conditional check instead of a
boolean.

	// Yes
	return ($foo == 'bar');

	// No
	if ($foo == 'bar') {
		return TRUE;
	}
	return FALSE;

	// No
	return ($foo == 'bar') ? TRUE : FALSE;


### Commerce Processing

When processing a commerce transaction, pay special attention to the order of
execution and how errors are handled.

  1. Form Validation – validate required fields
  2. Payment Gateway – process credit card at AuthorizeNet or similar
  3. Local Logic – update record(s) or do whatever needs to be done
  4. Store Local Transaction – create the customer receipt and store a copy in the database. Typically administrators can view this log of commerce activity.
  5. Customer Receipt – email receipt to customer
  6. Admin Notification – email notification to administrator

When an error occurs in steps #1 or #2, the error message should be displayed
to the users.

The remaining steps should be wrapped in individual `try/catch` blocks so an
error in step #3 doesn't prevent trying step #4.

Never store or email full credit card information.
