---
title: JavaScript
layout: default
---

# JavaScript

<section class="intro">
	<p>
		This document describes JavaScript coding and style standards employed by iMarc.
		<a href="http://imarc.net">iMarc</a> is a full service web development and design firm with offices near Boston and Silicon Valley.
	</p>
</section>

## jQuery

As a standard, iMarc uses [jQuery](http://www.jquery.com) to extend JavaScript
functionality.

## Minification

Never include minified libraries.

Flourish provides its own minifier. We’ve run into problems minifying already
minified code, and the benefit of using the one built into Flourish is that it
does it on the fly per environment, so that dev can use unminified JavaScript,
while stage and prod do, which makes development and debugging much easier.


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

	if (condition) {
	    action; // indented with one tab
	}
	var foo    = "far";    //lined up with spaces
	var fooBar = "foobar"; //lined up with spaces

Since inline content is lined up with spaces, a monospaced font is always used
when editing code.


### Bracing & Indenting Blocks

The *One True Brace* variant of the K&R indent style, places the opening
brace on the same line as control statements and same line as function
declarations. Content after the opening brace is indented. The closing brace is
placed on a line by itself at the same indent level as the control statement or
function declaration.

	this.fooMethod = function (arg1, arg2) {
		if (condition) {
			statement;
		}
		return val;
	}

Note: In [backend PHP code](/backend/) the function’s opening brace would be
dropped to a new line.


### Traversing the DOM with jQuery

In general, when traversing the DOM with jQuery, use `closest()` with a selector
instead of `parent()` or `parents()` to get to a specific parent element.

	$('input').closest('.detail_container');

Use `find()` with a selector to select specific child elements.

	$('.detail_container').find('.detail').toggle();

Use `closest()` with `find()` instead of `siblings(),` `next(),` or `prev()` to traverse
to nearby elements, as it is more robust against DOM changes.

	$('input').closest('.detail_container').find('.detail').show();


### Check for Elements with jQuery

To check whether any elements matching a selector exists, use the `length` attribute:

	if ($('a').length) {
		// I found links
	} else {
		// No links were found.
	}

Since `if` statements do not create closures, if you'd like to have a large
section of code that will only be run if an element exists, use `:first` with `each()`:

	$('#block:first').each(function() {
		// runs once, but only if there's at least one element mathcing #block.
	});
	
	// Dangerous
	$('#block').each(function() {
		// runs for every #block, whether that never, once, twice, etc.
	});


### Indenting jQuery Chains

If more than one action is called upon a jQuery object, you must indent those
actions.

	$(newTextInput)
		.val('New Value')
		.addClass('selected')
		.css('width', newWidth)
		.appendTo(someInputContainer);

Note that you can optionally indent single actions underneath an object for
better readability.

## Storing and Naming Files

This section describes our naming convention and standard directory structure.


### Typical Directory Structure

	docroot
		/css
		/js
			/lib
			/site
			/sitemanager

JavaScript files are typically kept inside the docroot for a given site.

The `js/lib/` directory contains any third party or library code, such as
jQuery and jQuery plugins including those we've written and taken from
Framework.imarc.net. If a plugin or library has additional files, if possible,
those files should be stored in a subdirectory of `js/lib/`, such as
`js/lib/colorbox/`. Inside one of these subdirectories, it is acceptable to
have images or CSS that is part of the plugin or library, to preserve relative
paths between the various files.

The `js/site/` and `js/sitemanager/` directories should contain files specific to the site.

In general, `js/site/site.js` should contain JavaScript meant to be run on
nearly every page on the site. For example, JavaScript that's part of the
site's navigation.

It is up to the developer to choose the naming convention for the other
JavaScript files, as long as they are consistent. An example might be creating
subdirectories for each controller and individual files for pages within these
directories. Another example might be using a naming convention like
`{controller}-{action}.js` (ex: `users-add_edit.js`) or picking names based
upon the URL of the page the JavaScript will be included on.


### Naming Plugins

jQuery plugins we author should follow the following naming conventions:

* The filename should be in all lowercase.
* It should end with `.plugin.js`.
* If you want to include a version number, it should be separated by a dash and
  come just before `.plugin.js` (ex: `foobar-1.2.plugin.js`.)


### Including Files

Unless there is a specific reason to include a JavaScript file sooner,
JavaScript files should be included at the bottom of an HTML document, just
before the closing `</body>` tag. For us, this usually means JavaScript
includes should be part of the site's `footer.php`.


## Closures

In general, all JavaScript code should be kept in closures. This minimizes side
effects and unintended interactions between different JavaScript plugins and
snippets.


### jQuery

In general, we can use jQuery's shorthand for defining a closure that will be
called when the document is ready:

	$(function() {
		//...
	});

In some instances, our JavaScript may need to wait until the page has completely loaded. To use jQuery to have your closure called on `window.load` instead, use

	$(window).load(function() {
		//...
	]);

When creating a plugin, always use a closure to ensure that the plugin will
work even when jQuery is in no-conflict mode:

	;(function($) {

		$.fn.yourPlugin = function () {
			return this.each(function() {
				//...
			});
		};

	})(jQuery);

Preceding the anonymous function with a semi-colon ensures that the plugin can
be minimized with other plugins.

Here’s a full example.

	(function($) {
		$.fn.showHide = function(controls, contents) {
			this.each(function() {
				var container = $(this);
				var control   = container.find(controls);
				var content   = container.find(contents);

				control.data('hide-text', control.text());

				control.click(function() {
					if (content.is(':visible')) {
						$(this).text(
							$(this).data('hide-text')
						);
						content.slideUp();
					} else {
						$(this).text(
							$(this).attr('data-show')
						);
						content.slideDown();
					}
				});

				content.hide();
			});
		};
	})(jQuery);

	$(function() {
		$('.excerpt').showHide('.expand', '.detail');
	});

You can see this example in action on [jsFiddle](http://jsfiddle.net/khamer/AVxby/1/).

## Naming Conventions

File naming conventions are described in [Storing and Naming
Files](#StoringandNamingFiles).

The following describes how JavaScript variables, functions, classes, and
methods should be named.


### Variable Naming

Variable names, functions, classes and plugin names should all be in the
lowerCamelCase format.

	var pageFunction        = 'foo';
	var anotherVariableName = 'bar';

	var i = 0;

Constructor functions are the only exception; they should all be in the
UpperCamelCase format.

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

	var setMessages = function() {
		//...
	};
	var parseData = function() {
		//...
	};

Poor examples of variable names might be `get_Data()` or `buildsomewidget()`.


## Commenting

Inline documentation for classes follows the
[JSDoc](http://code.google.com/p/jsdoc-toolkit/w/list) convention.

Wrap comments at 80 characters when possible to increase readability.

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

For JavaScript files (typically plugins) that are meant to be reusable by
themselves, You should provide additional information. At the top of your
plugin, you should have a comment block as follows:


	/**
	 * Description of plugin
	 *
	 * Public methods, how to instantiate
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
	 *
	 * @copyright 2012, iMarc <info@imarc.net>
	 */

Any edit that is noted in the changelog requires new authors to add their name
and initials to the `@authors` list.

Plugin methods are commented the same as functions.


### Versioning

All framework plugins are versioned with three revision numbers.

\[major\].\[minor\].\[bugfix\]

 - \[bugfix\] increases if a bug has been fixed, but no new feature has been added
 - \[minor\] increases if a new feature has been added while maintaining backward compatibility
 - \[major\] increases if backward compatibility breaks or a number of major features have been added


### Inline Comments

Inline comments should explain the reason behind a line of code or block of
code. Comments should not explain what the code is actually doing, as that can
be surmised from the code itself.

Inline comments should always follow the single line comment style with two
forward slashes.

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

	/* --------------------------------------------------------------------- */
	/* Description of code below it.
	/* --------------------------------------------------------------------- */

Note that the first and last lines span 80 characters.


## Variables

### File Scoping

All files and distinct, unrelated pieces of code should be separated into their
own closures. These closures can be anonymous and called immediately, but
shouldn’t be nested other than within a jQuery callback (such as
`$(window).load(function(){...})`, `$(function(){...})`, etc.)

	$(function() {
		(function() {
			//Track links
		})();

		(function() {
			//Top level navigation animations
		})();
	});


### Variable Definition/Scoping

All declarations should start with `var` to make it clear that things are locally scoped.

	var fooMethod = function() {
		var foo = 'bar2';
	}

	fooMethod();

	alert(foo); // shows 'undefined'

If for some reason you do need to declare something globally, use `window.` before the variable name to make your intention clear:

	window.globalFunction = function() {
		//You probably didn't need to do this.
	};


### Type Comparisons

Type comparisons should always have the variable on the right and the type you
are trying to compare it to on the left.

	var foo = 'bar';

	if (!foo) {	//... }
	if (undefined == 'foo') { //... }

This is because JavaScript uses [loose/weak
typing](http://en.wikipedia.org/wiki/Weak_typing) and compares values from the
left to the right, so type coercion can get tricky.  To make things easier you
can also change a variable’s type by using the `parseInt()`, `parseFloat()`, or
`toString()` methods.


### Object Caching

If a jQuery element is going to be used more than once, set it to a JavaScript
variable to prevent calling the DOM every time it needs to be used (this is
known as object caching):

	var firstLink = $('a:first');

	firstLink.val();

	$('.foo').click(function() {
		firstLink.css('color', '#f00');
	});


### Storing in .data()

Use the `.data()` method to store data about an element after event calls
rather than in a variable.

	var select = $('select.foo');
	select.data('original_option', select.val());

	$('a.reset').click(function(event) {
		select.val(select.data('originalOption'));

		return false;
	});

### Data Attributes

Use `data-` attributes to store values in the DOM that are directly related to
the presentation, such as text that's displayed on hovers or clicks. This keeps
all of the content together, and keeps content out the JavaScript.

	<span class="toggle" data-shown_text="Hide This Stuff">Show This Stuff</span>


## Control Structures

Control structures, such as `if`, `for`, `while`, or `switch`, follow the [One
True Brace](http://en.wikipedia.org/wiki/Indent_style#Variant:_1TBS) variant of
the K&R indent style for bracing and indenting.


The opening brace is on the same line as the control statement. Code starts
indented on the next line. The closing brace is on the indenting level as the
control statement. Control statements also have one space between the control
keyword and opening parenthesis to distinguish them from function calls.

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

	if ((condition1 || condition2) && condition3) {
		action1();
	}

Do not omit the curly braces under any circumstance. In the case of a large
number of short tests and actions, the following is acceptable:

	if (condition)  { action; }
	if (condition2) { action2; }

For switch statements, cases are indented one level. Case actions are indented
two levels.

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

	var element = foo(bar, baz, qux);

As displayed above, there is one space on either side of an equals sign used to
assign the return value of a function to a variable. In the case of a block of
related assignments, more space, using spaces not tabs, may be inserted to
promote readability:

	var short        = foo(bar);
	var longVariable = foo(baz);


### Ternary Operations

Wrap conditions in parentheses in ternary operations.

	bar = (bar) ? bar : default_integer_1;
	baz = (undefined == baz) ? baz : 'default_value_2';


### Function Definitions

Always declare and define functions like this:

	var someFunction = function (bar, baz, foobar) {
		//...
	};

*Do not* define functions using the alternate syntax:

	function someFunction(bar, baz, foobar) {
		//...
	};

Functionally, these two syntaxes are identical except that the function defined
with the second syntax can be referenced before it is declared. Always use the
second syntax as it is consistent with how privileged methods must be defined:

	var MyObject = function() {
		this.privilegedMethod = function(bar, baz, qux) {
			//...
		};
	};

Default values should be handled in the first lines of the function with a
ternary operation:

	var fooMethod = function (bar, baz, qux) {
		bar = (undefined === bar) ? bar : default_integer_1;
		baz = (undefined === baz) ? baz : 'default_value_2';
	}


Anonymous functions should be indented when they part of a function call that
has more than one parameter. Once a single parameter is idented, all parameters
should be indented.

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


## Graceful Degradation

For graceful degradation, always make sure that the DOM and initial CSS reflect
the state you’d like the site in when JavaScript is not available. Even if
content will initially be hidden, consider how the site should look without
JavaScript available and hardcode your HTML and CSS to match that.

JavaScript should be used to show controls or hide content that will be
available via tabs or toggles on load.

### Inserting HTML

While there’s plenty of valid reasons to generate and insert HTML, when
possible include the markup for controls in the HTML and use CSS to hide them.
This keeps as much of the DOM as possible together, making it easier to
maintain later.

When inserting complex HTML, use jQuery Templating (or Mustache.js) with a
template.


## jQuery Patterns

### Remain Relative

Whenever possible, define behaviors relative to the closest common parent of
all involved elements. For example,

	<div class="excerpt">
		<h2>Title</h2>
		<div class="expand" data-show="Show">Hide</div>
		<p class="detail">
			Some details that will start hidden.
		</p>
	</div>

Should most likely be written relative to the `.exerpt`:

	$('.expand').click(function() {
		$(this).hide()
			.closest('.excerpt').find('.detail').show();
	});
	$('.expand .detail').hide();

### Robust Traversal

Targeting elements based on their relative DOM position (i.e. chaining jQuery
`prev()`, `next()`, and `parent()` calls without selectors) introduces
fragility. Any changes to the markup structure may introduce bugs.

A better approach is to provide explicit selectors to jQuery functions
which search up or down multiple levels of the DOM hierarchy (such has
`closest()` and `find()`). Employing this method will help tolerate
changes to the markup.

	// Bad
	$('.my_button').click(function() {
		$(this).parent().next().next().show();
	});

	// Better
	$('.my_button').click(function() {
		$(this).closest('.my_button_container').find('.thing_to_show');
	});


### Plugin Example

Here’s a longer example, where the above code was abstracted and written as a
jQuery plugin:

	;(function($) {
		$.fn.showHide = function(control_selector, content_selector) {
			this.each(function() {
				var container = $(this);
				var control = container.find(control_selector);
				var content = container.find(content_selector);

				control.click(function() {
					if (content.is(':visible')) {
						content.hide();
					} else {
						content.show();
					}
				});

				content.hide();
			});
		};
	})(jQuery);

	//...

	$(function(){
		$(‘.excerpt’).showHide(‘.expand’, ‘.detail’);
	});


### Graceful Event Handling

One of the most common patterns we encounter is content that starts hidden and
is displayed when the user clicks on a button. The above plugin is an example
of this pattern, however, it doesn't allow for anything beyond a `hide` and
`show`.

Here's a (non-plugin) example that also swaps the text of the toggle button:

	$(function() {
		var betterToggle = function() {
			var $this = $(this);
			var $details = $this.closest('.article').find('.details');
			
			if ($details.is(':visible')) {
				$this.data('hide_text', $this.text());
				$this.text(
					$this.attr('data-show_text')
				);
				$details.hide();
			} else {
				$this.text(
					$this.data('hide_text')
				);
				$details.show();
			}
		};
		
		$('.toggle').click(betterToggle);
		$('.toggle').each(betterToggle);
	});

You can see this live as a [jsFiddle](http://jsfiddle.net/JqUbD/).

Note using `click()` and `each()`. `each()` here runs the functionality of
`betterToggle` on each button once at initialization. This allows for us to
start out page in a fully revealed form (for graceful degradation) and hide
things appropriately.

## Using jQuery with other Libraries

If you need to use another library that uses `$` (ex: Prototype), you should
use the jQuery object. For parts of code that will only use jQuery, you can, if
appropriate, use a closure to allow you to use `$` again:

	(function($){
		//...
	})(jQuery);


## Error checking

Exceptions and try/catch blocks should be used for error handling.  Do not use
function or method return values to indicate success or failure.

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

### Linting

Other than warnings about strict mode, JSHint should give your javascript a
clean bill of health. You can also use Crockford’s JSLint, however it will
complain additionally complain that function(... should be function (..., which
we do not follow. Both tools are still useful for checking basic code quality
and avoiding risky behavior (like relying on automatic semicolon insertion.)


### console.log

`console.log` is built into Chrome, Safari, Opera, and Firebug. However, make
sure there are no calls to `console.log` in any file when launched, as they
will break in IE.

You can avoid this problem with IE by including the following javascript from
H5BP, however in most cases, its better practice to remove the offending
`console.log` statements, as they shouldn’t be in the production version anyway.

	if (!(window.console && console.log)) {
		(function() {
			var noop = function() {};
			var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
			var length = methods.length;
			var console = window.console = {};
			while (length--) {
				console[methods[length]] = noop;
			}
		}());
	}


### alert()

Whenever possible, console.log to show feedback during execution. However,
`alert()` can be used to create a breakpoint; a way to pause JavaScript
execution so that you can more see the state of the DOM.


### Using Global References

Another tactic is to *temporarily* create a global reference to an object that
you're working with:

	//...
	window.debug = misbehavingObject;

After doing this, you can use `window.debug` from Firebug of the inspector to
reference that object and work with it live.


## Tips

It is recommended to install [Firebug](http://getfirebug.com/) in Firefox, as
you can do basic logging with `console.log()`, and debug using the debugger.

Google Chrome, Chromium, and Opera all have built-in inspectors that have close
to equivalent capabilities to Firebug and should suffice.

All pages should work in every browser, even if they don’t act the same across
all browsers.


## Useful Links
 - [jQuery Documentation](http://api.jquery.com/)
 - [Quirksmode Event Compatibility Tables](http://quirksmode.org/dom/events/index.html)
 - [Mozilla JavaScript Documentation](https://developer.mozilla.org/en/javascript)
 - [Prototypes and Inheritance](http://msdn.microsoft.com/en-us/scriptjunkie/ff852808.aspx)
