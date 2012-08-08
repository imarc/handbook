---
title: JavaScript
layout: default
---

# JavaScript

This document describes JavaScript coding and style standards employed by
iMarc. iMarc is a full service web development and design firm located north of
Boston. Learn more at http://imarc.net.

As a standard, iMarc uses the [jQuery](http://www.jquery.com) library to extend
JavaScript functionality.


## Line Breaks

Set your text editor to only use Unix line-break (`\n`), not Windows (`\r\n`)
or Mac (`\r`) breaks.


## Style

JavaScript code follows the [One True
Brace](http://en.wikipedia.org/wiki/Indent_style#Variant:_1TBS) variant of the
K&R indent style. That style is described in this section.


### Indenting & Spacing

Use tab character at the beginning of a line. A tab is expected to represent
the width of four spaces.  For inline spacing, use spaces, not tabs.

	#!js
	if (condition) {
		action; // indented with one tab
	}
	var foo    = "far";    //lined up with spaces
	var fooBar = "foobar"; //lined up with spaces

Since inline content is lined up with spaces, a monospaced font is always used
when editing code.


### Bracing & Indenting Blocks

The //One True Brace// variant of the K&R indent style, places the opening
brace on the same line as control statements //and// same line as function
declarations. Content after the opening brace is indented. The closing brace is
placed on a line by itself at the same indent level as the control statement or
function declaration.

	#!js
	function fooMethod(arg1, arg2) {
		if (condition) {
			statement;
		}
		return val;
	}

Note: In [backend PHP code](/backend/) the function’s opening brace would be
dropped to a new line.


### Indenting jQuery Chains

If more than one action is called upon a jQuery object, you must indent those
actions.

	#!js
	$('.classname').parents('div').find('input')
		.val('New Value')
		.parents('div').find('span.element2')
			.remove();

Note that you can optionally indent single actions underneath an object for
better readability.


## Storing and Naming Files

This section describes our naming convention and standard directory structure.


### Typical Directory Structure

	/sup
		/ajax
		/js
			/lib
			/plugins
			/site
			/sitemanager


A typical directory structure for a website groups all JavaScript files in the
`/sup/js/`.

The `./js/lib/` folder is used to store JavaScript libraries such as jQuery,
Prototype, MooTools, etc.

Plugins for a library are stored under `./js/plugins/`, such as iMarc’s
datepicker, or a jQuery plugin. If a plugin has associated files with it,
create a folder that is the name of the plugin and store the entire folder
under plugins; for example, the modal window plugin ColorBox should have a
`/sup/js/plugins/colorbox/` folder that holds its supplemental CSS, images, JS
files, etc. It is best to keep the plugin’s default folder structure within the
plugin folder, as often times they use relative paths to reach their
supplemental files.

The `./js/site/` and `./js/sitemanager/` folders should contain files specific
to the site you are working with. Each developer can choose the structure
within these folders, be it subfolders that mimic the view path and then
JavaScript files that are the names of the view files, or if you want to make a
naming convention such as {controller}-{action}.js (ex: `users-add_edit.js`),
that has been done in the past as well.


### Naming Files

Custom JavaScript files should typically one of two types: the plugin name in
lower case lettering followed by `.plugin.js` or the location/action of the
view it is being included with. Often times it is a good practice to hyphenate
between the controller name and the action (`users-list.js`). All filenames
should be lowercase.


### Including Files

Javascript files should be included at the bottom of an HTML document, right
before the closing `</body>` tag.

If you have JavaScript that must be included before the body (such as cufón),
create a separate fTemplating element such as `header_js`, add those JavaScript
includes to it, and place the element within the `<head>`.


## jQuery Code Tags

iMarc sites that use only jQuery should use the `$` character to represent the
jQuery object. In no-conflict mode, jQuery objects should use `jQuery` as the
instance name.

	#!js
	$(function() {
		//...
	});

If your code requires everything to be loaded on the page first, use
`window.load()` instead:

	#!js
	$(window).load(function() {
		//...
	});

When creating a plugin, always use a closure to ensure that the plugin will
work even when jQuery is in no-conflict mode:

	#!js
	;(function($) {

		$.fn.yourPlugin = function() {
			return this.each(function() {
				//...
			});
		};

	})(jQuery);

Preceding the anonymous function with a semi-colon ensures that the plugin can
be minimized with other plugins.


## Naming Conventions

File naming conventions are described in [Storing and Naming
Files](#StoringandNamingFiles).

The following describes how JavaScript variables, functions, classes, and
methods should be named.


### Variable Naming

Variable names, functions, classes and plugin names should all be in the
lowerCamelCase format.

	#!js
	var pageFunction        = 'foo';
	var anotherVariableName = 'bar';

	var i = 0;

Constructor functions are the only exception; they should all be in the
UpperCamelCase format.

	#!js
	var Foo = function (bar, baz) {
		this.bar = bar;
		this.baz = baz;
	}

	var qux = new Foo(0, 1);

Variable names must be meaningful. One letter variable names must be avoided,
except for places where the variable has no real meaning or a trivial meaning
(e.g. `for (var i = 0; i < 100; i++)`).

Take care to minimize the letter count, but do not use abbreviations, because
they greatly decrease the readability of the function name itself.

	#!js
	function setMessages() { ... }
	function parseData() { ... }

Poor examples of variable names might be `get_Data()` or `buildsomewidget()`.


## Commenting

Inline documentation for classes follows the
[JSDoc](http://code.google.com/p/jsdoc-toolkit/w/list) convention.

Wrap comments at 80 characters when possible to increase readability.

	#!js
	/**
	 * This is an example description
	 *
	 * @param {String} paramName This is a string parameter
	 * @return void
	 */


### Comments for Functions and Class Methods

Functions and methods are commented using the template below. If there are no
parameters, do not include `@param` void.

`@throws` tags should be included for every class of exception that is thrown
under normal circumstances and that should be handled by calling code. For
instance, if an exception is thrown when the network is down, you don’t need to
document that.

	#!js
	/**
	 * Description of function.
	 *
	 * @throws ExceptionType This is the label text for what exception it is
	 *
	 * @param  {datatype}  variableName     Description of variable.
	 * @param  {datatype}  variableNameTwo  Description of variable2.
	 * @return {datatype}  Description of return value.
	 */


### Comments for Plugins

The header block at the top of the plugin file are commented using the
template below.

	#!js
	/**
	 * Description of plugin
	 *
	 * == Method Signature ==
	 *
	 * Description of how to implement the plugin
	 *
	 * @author  Original Author [initials] <author@example.com>
	 * @author  Your Name [initials] <you@example.com>
	 *
	 * @version 0.0.2
	 *
	 * @changes 0.0.2 Description [initials, YYYY-MM-DD]
	 * @changes 0.0.1 Description [initials, YYYY-MM-DD]
	 */

	/*!
	 * @copyright 2010, iMarc <info@imarc.net>
	 */

Any edit that is noted in the changelog requires new authors to add their name
and initials to the `@authors` list.

The `@copyright` must be within special comments.

Plugin methods are commented the same as functions.


### Versioning

All framework plugins are versioned with three revision numbers.

[major].[minor].[bugfix]

 - [bugfix] increases if a bug has been fixed, but no new feature has been added
 - [minor] increases if a new feature has been added while maintaining backward compatibility
 - [major] increases if backward compatibility breaks or a number of major features have been added


### Inline Comments

Inline comments should explain the reason behind a line of code or block of
code. Comments should not explain what the code is actually doing, as that can
be surmised from the code itself.

Inline comments should always follow the single line comment style with two
forward slashes.

	#!js
	// This is a very long comment that span so long and is over the 80 character
	// limit that it spans multiple lines
	if (condition) {
		action1;
	}

	// This is a single line comment
	fooMethod();

	var bar = baz; // brief explanation

C-style comments, `/* comment */` are reserved for header blocks, classes, and
function commenting as described elsewhere in this document. Using C-style
comments inline can cause problems if a maintainer wants to comment out a large
block of code.

	#!js
	// The inline comment below, makes commenting out the entire block impossible
	/*
	if (condition) {
		action1; /* brief explanation */
	}
	*/


### Section Blocks (optional)

Often when creating small chunks of jQuery code to accomplish flourishes on a
page you require a comment that is more powerful than a single line comment but
less than the default plugin definition. If you think that this non-plugin page
has code that requires more explanation, you can optionally add a comment to
start that code. It can be formatted like this:

	#!js
	/* --------------------------------------------------------------------- */
	/* Description of code below it.
	/* --------------------------------------------------------------------- */

Note that the first and last lines span 80 characters.


## Variables

### Variable Definition/Scoping

Variables should always start with `var` when defined to keep it locally scoped.

	#!js
	function fooMethod() {
		var foo = 'bar2';
	}

	fooMethod();

	alert(foo); // returns undefined

	// By removing 'var' from the function, 'foo' becomes a global variable.
	// In that case, alert(foo) will return 'bar2'

Make sure that you define a variable in the outermost scope that you will need
it (if you do not intend to pass that variable through method calls).


### Type Comparisons

Type comparisons should always have the variable on the right and the type you
are trying to compare it to on the left.

	#!js
	var foo = 'bar';

	if (!foo) {	//... }
	if (undefined == 'foo') { //... }

This is because JavaScript uses [loose/weak
typing](http://en.wikipedia.org/wiki/Weak_typing) and compares values from the
left to the right, so type coercion can get tricky.  To make things easier you
can also change a variable’s type by using the `parseInt()`, `parseFloat()`, or
`toString()` methods.


### Object Caching

If a jQuery element is going to be used multiple times, set it to a JavaScript
variable to prevent calling the DOM every time it needs to be used (this is
known as object caching):

	#!js
	var firstLink = $('a:first');

	firstLink.val();

	$('.foo').click(function() {
		firstLink.css('color', '#f00');
	});


### Storing in .data()

Use the `.data()` method to store data about an element after event calls
rather than in a variable.

	#!js
	var select = $('select.foo');
	select.data('original_option', select.val());

	$('a.reset').click(function(event) {
		select.val(select.data('originalOption'));

		return false;
	});


## Control Structures

Control structures, such as `if`, `for`, `while`, or `switch`, follow the [One
True Brace](http://en.wikipedia.org/wiki/Indent_style#Variant:_1TBS) variant of
the K&R indent style for bracing and indenting.


The opening brace is on the same line as the control statement. Code starts
indented on the next line. The closing brace is on the indenting level as the
control statement. Control statements also have one space between the control
keyword and opening parenthesis to distinguish them from function calls.

	#!js
	if (condition1 || condition2) {
		action1();
	} else if (condition3 && condition4) {
		action2();
	} else {
		defaultaction();
	}

Control statements have one space between the control keyword and opening
parenthesis to distinguish them from function calls.

Note that conditions only have parentheses around them if they have multiple
conditions within them.

	#!js
	if ((condition1 || condition2) && condition3) {
		action1();
	}

Do not omit the curly braces under any circumstance. In the case of a large
number of short tests and actions, the following is acceptable:

	#!js
	if (condition)  { action; }
	if (condition2) { action2; }

For switch statements, cases are indented one level. Case actions are indented
two levels.

	#!js
	switch (condition) {
		case 1:
			action1;
			break;

		case 2:
			action2;
			break;

		default:
			defaultaction;
			break;
	}


## Functions

### Function Calls

Functions are called with no spaces between the function name, the opening
parenthesis, and the first parameter; spaces between commas and each parameter,
and no space between the last parameter, the closing parenthesis, and the
semicolon. Here’s an example:

	#!js
	var element = foo(bar, baz, qux);

As displayed above, there is one space on either side of an equals sign used to
assign the return value of a function to a variable. In the case of a block of
related assignments, more space, using spaces not tabs, may be inserted to
promote readability:

	#!js
	var short        = foo(bar);
	var longVariable = foo(baz);


### Ternary Operations

Wrap conditions in parentheses in ternary operations.

	#!js
	bar = (bar) ? bar : default_integer_1;
	baz = (undefined == baz) ? baz : 'default_value_2';


### Function Definitions

Use anonymous functions if you need to pass and/or easily redefine the function
in the future.

	#!js
	var fooMethod = function (bar, baz, foobar) {
		//...
	}

Otherwise use a named function.

	#!js
	function fooMethod(bar, baz, qux) {
		//...
	}

Default values should be handled in the first lines of the function with a
ternary operation:

	#!js
	function fooMethod(bar, baz, qux) {
		bar = (undefined === bar) ? bar : default_integer_1;
		baz = (undefined === baz) ? baz : 'default_value_2';
	}

Anonymous functions should be indented when they part of a function call that
has more than one parameter. Once a single parameter is idented, all parameters
should be indented.

	#!js
	$('.classname').hover(
		function() {
			setInterval(
				function() {
					//...
				},
				5000
			);
			//...
		},
		function() {
			//...
		}
	);


## Error checking

Exceptions and try/catch blocks should be used for error handling.  Do not use
function or method return values to indicate success or failure.

	#!js
	try {
		if (undefined == foo) {
			throw 'Error message';
		}
		//...
	} catch (error) {
		alert(error.message);
		//...
	}


## Debugging Techniques

If you need to quickly check something use `console.log()`, otherwise use the
debugger built in to Firebug.

If you need to use Firebug, use `preventDefault()` and `stopPropagation()` to
prevent the DOM element from performing its original actions, otherwise end the
function with `return false;`.

	#!js
	$('.foo').click(function(event) {
		event
			.preventDefault()
			.stopPropagation();

		bar.css('this will fail'); // returns a reference error to an undefined variable
	});

	$('.baz').click(function(event) {
		bar.css('this will not show failure'); // this will be skipped as return false will cancel the error

		return false;
	});

This is because Firebug does not show JavaScript errors from a function if the
function uses `return false;`.


## Existence Checking

To check if a jQuery object has any DOM elements, use the length attribute:

	#!js
	var links = $('a');

	if (links.length > 0) {
		//...
	}


## Tips

It is recommended to install [Firebug](http://getfirebug.com/) in Firefox, as
you can do basic logging with `console.log()`, and debug using the debugger. A
light version is also available for all other browsers as a bookmarklet.

All pages should work in every browser, even if they don’t act the same across
all browsers.


## Useful Links
 - [Mozilla JavaScript Documentation](https://developer.mozilla.org/en/javascript)
 - [Prototypes and Inheritance](http://msdn.microsoft.com/en-us/scriptjunkie/ff852808.aspx)
