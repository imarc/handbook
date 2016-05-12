---
title: Backend
layout: default
---

<section class="intro">
	<p>
		This document describes Imarc’s standards for writing PHP and SQL.
		<a href="https://www.imarc.com">Imarc</a> is a full service web development and design firm with offices near Boston and Silicon Valley.
	</p>
</section>

## Important Terms

This document occasionally makes a distinction between **library code** and **project code**. Library code is closed or open source
libraries that are meant to be reusable components across many projects. Project code is code written for a single specific project.

## Environment

- Amazon EC2 w/EBS or DigitalOcean
- Debian 7 (Wheezy)
- Apache 2.4+
- PHP 5.5+
- PostgreSQL 9.3+

## Security

All Engineers must understand and implement the best practices around:

- [HTTP Methods](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html)
- [SSL (HTTPS) Usage](http://en.wikipedia.org/wiki/HTTP_Secure)
- [SQL Injection](http://en.wikipedia.org/wiki/SQL_injection)
- [Cross-Site Scripting (XSS)](http://en.wikipedia.org/wiki/Cross-site_scripting)
- [Cross-Site Request Forgeries (CSRF)](http://en.wikipedia.org/wiki/Cross-site_request_forgery)
- [Password Hashing](http://php.net/manual/en/faq.passwords.php)
- [Session Fixation](http://en.wikipedia.org/wiki/Session_fixation)
- [Email Injection](http://en.wikipedia.org/wiki/Email_injection)
- [Path Traversal](http://en.wikipedia.org/wiki/Directory_traversal_attack)

For a very detailed guide to web security issues, view the [OWASP Security Guide](https://www.owasp.org/index.php/Guide_Table_of_Contents)

## Dependency Management

All PHP dependencies are managed by [Composer](https://getcomposer.org/). Get started with Composer by reading their [intro documentation](https://getcomposer.org/doc/00-intro.md). By default, Composer installs all dependencies into a `/vendor` directory within your project.

- Project and library code should never have `/vendor` directory committed.
- Project code should always commit the `composer.lock` file

To ignore the `/vendor` directory, the following line should be added to your `.gitignore`

	vendor

## Versioning and Tagging

All library code should follow [Semantic Versioning](http://semver.org/).

	Given a version number MAJOR.MINOR.PATCH, increment the:
		MAJOR version when you make incompatible API changes,
		MINOR version when you add functionality in a backwards-compatible manner, and
		PATCH version when you make backwards-compatible bug fixes.

Library code versions should be tagged appropriately in Git to work seamlessly with Composer.

Depending on the requirements, project code can be versioned by release, or not at all.

## Autoloading

Unless a special autoloader is needed, all autoloaders should follow [PSR-4](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-4-autoloader.md) or [PSR-0](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-0.md).

The best practice is to use [Composer's built-in autoloader](https://getcomposer.org/doc/04-schema.md#autoload).

## Testing

All PHP unit and behavioral tests should be written in [PHPUnit](https://phpunit.de/) or [PHPSpec](http://www.phpspec.net/).

All libraries should have full test converage. Project based code should have unit tests for key components, unless requirements specify otherwise.

## Coding Style

All PHP style should follow [PSR-1](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-1-basic-coding-standard.md) and [PSR-2](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-2-coding-style-guide.md).

Style can be validated and fixed with [CodeSniffer](https://github.com/squizlabs/PHP_CodeSniffer). Install CodeSniffer with composer:

	composer global require "squizlabs/php_codesniffer=*"

Ensure that your code follows the standards:

	phpcs --standard=psr1,psr2 .

Imarc exceptions to PSR standards and specific items that PSR 1 and 2 don't address can be found below.

### Line Breaks

Set your text editor to only use Unix line-break (\n), not Windows (\r\n) or Mac (\r) breaks.

### Indenting & Spacing

Use tab character at the beginning of a line. A tab is expected to represent the width of four spaces. For inline spacing, use spaces, not tabs.

	if (condition) {
		action(); // indented with one tab
	}
	$foo      = "bar";    //lined up with spaces
	$foo_bar  = "foobar"; //lined up with spaces

Since inline content is lined up with spaces, a mono spaced font is always used when editing code.

### Complicated conditions

Complicated condition checking should be performed by assigning boolean values
to meaningful variables and should then be combined on a single line for the
`if` statement:

	$foo_bar_not_baz = $foo && $foo == $bar && $foo != $baz;
	$bar_like_baz = !empty($bar['name']) && $baz['name'] && $bar['name'] == $baz['name'];

	if ($foo_bar_not_baz || $bar_like_baz) {
		action1;
	}

### Complex or Nested Arrays

Complex or nested arrays use the following indention format, noted
via the closing parenthesis characters:

	$array = [
		'name1' => 'value1',
		'name2' => [
			'subname1' => 'subvalue1',
			'subname2' => 'subvalue2'
		]
	];

### Code with Markup

If PHP is used for a templating language, follow the same indenting standards. With
the exception of PHP tags: after one item opens, the next item is indented.

	<ul>
		<?php
		foreach ($users as $user) {
			?>
			<li>
				<?= $user->getName() ?>
			</li>
			<?php
		}
		?>
	</ul>

### Naming

#### Class and Namespace Names

Class naming should follow the conventions in [PSR-1](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-1-basic-coding-standard.md)

Namespaces should ideally be singular and be given a name describing the the
project or segment of the project. Namespaces must be in upper camel case.

	namespace MyLibraryName\User;

#### Interface, Trait, and Exception naming

All Interfaces, Traits, and Exceptions should have a suffix representing their type.

	ProgrammableInterface
	AssociatableTrait
	HorribleException

#### Function Names

User defined functions should be in lowercase, using underscores to
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

#### Variable Names

Use underscores or lowerCamelCase for variable names. The main thing is to be consistent
with the library or project you are working with.

Variable names must be meaningful. One letter variable names must be avoided,
except for places where the variable has no real meaning or a trivial meaning
(e.g. for (`$i=0;` `$i<100;` `++$i`)).

### Reference Assignment

If assigning a reference to a variable, place the ampersand next to the equal
sign, not the referenced object.

	$reference =& $foo;
	$reference =& foo();

### Private Variables

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

## Documentation & Commenting

Documentation for code follows the [PHPDoc Standard](http://www.phpdoc.org/docs/latest/index.html)

Library code must always have documentation. For project code, the level of documentation
is left up to the requirements or lead developer on that particular project, yet it is
highly encouraged.

### Class Documentation

The class header block at the top of the file uses the template below.

	/**
	 * Description of class
	 *
	 * @copyright 2015 Imarc LLC
	 *
	 * @author Your Name <author@email.com>
	 * @author Another Name <author@email.com>
	 *
	 * @package Project or Library name
	 * @link URL if relevant
	 */

An author should add their name to the `@authors` list after any edit.

### Function and Method Docblocks

Functions and methods are commented using the template below. If there are no
parameters, do not include `@param void`.

	/**
	 * Description of function.
	 *
	 * @throws ExceptionClass Optional description of when
	 * @throws OtherException
	 *
	 * @param type $varname A description of the param (which may also
	 *    span multiple lines if necessary)
	 *
	 * @param type $varname A description of the param
	 *
	 * @return datatype Description of return value.
	 */

### Inline Comments

Inline comments always follow the C++ comment style with two forward slashes

	// Here is a comment

[Unix shell-style](http://php.net/manual/en/language.basic-syntax.comments.php)
comments – `# comment` – are always avoided.

## Error Handling

Production and staging environments are generally configured to email error
messages, while development environments typically display error messages on
screen as HTML.

Production environments should never display PHP-generated error messages to
the end-user.

When error messages are emailed, always address a production team, not an
individual developer, in case that developer is not available. The preferred
format for emailing error message is `errors+project@imarc.com`

## Error Reporting

All code must work with
[error_reporting](http://www.php.net/manual/en/ref.errorfunc.php#ini.error-reporting) set to `E_ALL`
and `E_STRICT`.

## Databases and SQL

Imarc prefers Postgres for storing relational data.

### Indenting

Non-trivial SQL statements should be broken onto multiple lines for
readability.

	SELECT
		u.user_id,
		u.first_name,
		u.last_name
	FROM
		users AS u LEFT JOIN
		groups AS g ON u.group_id = g.group_id
	WHERE
		g.name = 'Administrators' AND
		g.status = 'Active'
	ORDER BY
		u.last_name ASC,
		u.first_name ASC

### Capitalization

SQL identifiers are lower case. All SQL reserved words and functions are
uppercase.

	CREATE TABLE users (
		user_id SERIAL PRIMARY KEY,
		name VARCHAR NOT NULL,
		status NOT NULL DEFAULT 'Active' CHECK(status IN ('Active', 'Inactive'))
	);

### Database Naming

Name your database after the primary domain it serves. Since database names
can’t contain periods, replace the domain’s period(s) with underscores. Exclude
'www' from the database name unless the domain starts with with a number, since
databases names in most systems can't start with numbers.

	Domain: wiki.example.com
	Database Name: wiki_example_com

	Domain: 123project.com
	Database Name: www_123project_com

All names (database, table, and column names) are lowercase, with underscores
to separate words, to avoid case sensitivity issues.

Table names are plural (`users`).

Column names are singular (`first_name`).

The primary key column is named `id` unless a better descriptive name is appropriate.

## Character Encoding

[UTF-8](http://en.wikipedia.org/wiki/UTF-8) should be used as the character
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

## Storing and Naming Files

This section describes file and directory naming conventions and overall
directory structure.

### Directory Structure

All server-side files should be kept separate from public files. This helps
prevent unintentional exposure of sensitive information such as passwords.

**Server-side files** are files that are written in a programming language that
is executed on the server. The output of these files is sent to the user’s
browser. These are stored outside of the document root.

**Public files** include all files that are directly sent to the client without
any sort of processing. This includes images, CSS, JS, and other supporting
files such as `robots.txt`. These files are stored in the document root.

## Separation of Concerns

All backend code will fall into one of three areas of concern: data access,
display, or business logic. These areas map roughly to the Model, View, and
Controller aspects of an MVC architecture. The code for each of these areas of
concern should be kept separate from the others.

### Models

The model layer contains all code that interacts with the database. Models
provide an API to the controller and views. Models are implemented as classes.
All data access should go through model objects and not through lower-level
database related APIs such as `fDatabase` or `fRecordSet`. Model objects should
not handle user input or output content.

### Controllers

The controllers for a site interpret user input, determine actions to perform
on models, then direct output by selecting an appropriate view. Controllers should be
classes, but in some cases may be procedural pages. Controllers should never directly
access the database or output content.

### Views

The view layer contains all code for generating output, whether it be HTML,
JSON or CSV. Code in views is limited to conditional logic, encoding, and
formatting. Views should only interact with models and data passed to them by the
controller.  Views should not directly interpret user input or implement
business logic.

## Friendly URLs

URL words are lower case with hyphens as separators.  With dynamic pages,
use the title or primary content identifier in the URL to help with
search engine optimization.

	/news/how-sarbanes-oxley-affects-your-business

When using dynamic content such as an article title to create a URL, limit the
textual portion to about 50 characters. Trim on a natural word break if
possible.

	// Blog Title = We're Hiring: Positions available for PHP developers and Systems Administrators
	// URL = /blog/were-hiring-positions-available-for-php-developers

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

## Example URLs and IPs

Use `example.com` for all example URLs, per [RFC
2606](http://www.faqs.org/rfcs/rfc2606.html).

Use the IP range `192.0.2.0/24` for all example IP addresses, per [RFC
3330](http://www.faqs.org/rfcs/rfc3330.html). If you just need a single
IP address use `192.0.2.1`
