---
title: Frontend
layout: default
---

# Frontend

This document describes iMarc’s markup and style standards. iMarc is a full 
service web development and design firm located north of Boston. Learn more 
at http://imarc.net.

## UTF-8

Use UTF-8 as the character encoding. Set your editor to use UTF-8 for 
all aspects of the web application.

HTML pages should begin with by setting `utf-8` in the content-type meta tag.

	<meta http-equiv="content-type" content="text/html; charset=utf-8" />

Since [UTF-8](http://en.wikipedia.org/wiki/UTF-8) is enabled throughout the 
frontend HTML and backend databases, use real UTF-8 characters instead of HTML 
entities.

Use real apostrophes and quotations instead of primes and double-primes. Use 
a UTF-8 character like `»`, instead of typing out entities like `&raquo;`. 
The only characters that need encoding are `&amp;`, `&lt;`, and `&gt;`,
`&quot;`.

	<p>
		Separation of content – better with an en-dash. 
		iMarc’s motto: “Use curly quotes” 
		<a href="#"> Learn More »</a>
	</p>	

### Dashes

There are multiple types of dashes present in common use: hyphen, figure dash, 
en dash, em dash and minus sign. Instead of using all five, we limit use to 2:

* (-) A hyphen, which is present on the keyboard, is used for hyphenation of words and separating phone numbers
* (–) An en dash should be used without spaces for numeric ranges (ex: 6–10), or combined with a space on either side for an abrupt change in thought – this is the modern equivalent of an em dash

Em dashes have been dropped based on Robert Bringhurst’s recommendation in 
[The Elements of Typographic Style](http://www.amazon.com/Elements-Typographic-Style-Robert-Bringhurst/dp/0881791326):

  The em dash is the nineteenth-century standard, still prescribed in many 
  editorial style books, but the em dash is too long for use with the best 
  text faces. Like the oversized space between sentences, it belongs to the 
  padded and corseted aesthetic of Victorian typography.

## Line Breaks

Set your text editor to only use Unix line-break (`\n`), not Windows (`\r\n`)
or Mac (`\r`) breaks. 

## Style

Consistent coding style for HTML and CSS is vital because multiple people 
collaborate on a site’s markup and style. 

### Indenting & Spacing

Use tab character at the beginning of a line. A tab is expected to represent
the width of four spaces.  For inline spacing, use spaces, not tabs.

	.header {
		width: 40em;
		margin: 1em auto;

	.event\_month { float: right; }
	.event\_day   { display: block; }
	.event\_year  { float: left; }

Since inline content is lined up with spaces, a monospaced font is always used 
when editing code.

### Formatting Markup

Keep markup at a reasonable width. When markup surrounds 
a significant amount of content, place the tags on their own line, 
indent the content, and hard-wrap content at about 80 characters.

	<!-- DON'T DO THIS -->
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fringilla libero id quam semper semper. Nulla a pulvinar justo. Mauris a velit sed ante laoreet vehicula. Etiam ac semper mi. Etiam neque lacus, hendrerit a sollicitudin sagittis.</p>

	<!-- Instead, DO THIS -->
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fringilla 
		libero id quam semper semper. Nulla a pulvinar justo. Mauris a velit sed 
		ante laoreet vehicula. Etiam ac semper mi. Etiam neque lacus, hendrerit 
		a sollicitudin sagittis.
	</p>
	<ul>
		<li>
			Foo is listed first – ipsum dolor sit amet, consectetur adipiscing 
			elit fringilla libero id quam semper semper.
		</li>
	</ul>

With short lines of content, the tag and content can stay on the same line.

	<ul>
		<li>Foo is listed first</li>
		<li>Bar follows</li>
		<li>Baz is typically last</li>
	</ul>

## Storing and Naming Files

Stylesheets, images, and other supporting files are stored under the `/sup/` 
directory. 

CSS should be organized in external files. Use one stylesheet for each targeted 
device, browser or media. CSS files are stored under `/sup/css/`.

Images should reside be organized into subfolders under `/sup/img/` whenever 
appropriate.

	/sup
		/css
			ipad.css
			mobile.css
			print.css
			screen.css
			lte_ie6.css
		/img
			header.jpg
			/icons
				facebook.gif
				twitter.gif

## Browser Support & Accessibility

All pages should work in every browser, even if they don’t look the same 
across all browsers.

The following is excerpted from our standard proposal. Frontend markup must 
meet the expectation level set with the client.

> iMarc tests on Windows and OS X operating systems and current versions of 
> major browsers, including: Internet Explorer, Firefox, Chrome and Safari.
>
> Each browser renders web pages differently. Some of these differences 
> occur in the way text is rendered, while some browsers don’t support 
> advanced styling features (such as rounded corners or drop-shadows). iMarc 
> does not design to the lowest common denominator. Instead we sometimes add 
> these progressive style and interface enhancements that may only be visible 
> in more modern browsers. However, any style differences across browsers will 
> not affect the availability of page content.
> 
> iMarc develops fully standards compliant, platform independent websites, in 
> accordance with web development best practices and 
> [Section 508 accessibility guidelines](http://www.webaim.org/standards/508/checklist).
>
>  This means the sites iMarc creates will function and display correctly on 
>  all standards compliant web browsers, which includes, for example, Opera desktop 
>  browsers, and iPhone, BlackBerry and Android mobile phones browsers.

The text and visual content of a page should always be accessible. The layout 
of a page should not appear discernibly broken.

## HTML5 and CSS3 Compatability

If you choose to use HTML5 elements, you should use [Modernizr](http://modernizr.com/) 
to ensure backwards compatability with older version of browsers.

Modernizr detects what the browser's rendering engine supports, and allows you to customize 
the look of the website depending on what is and isn't allowed.


## Validation

Use the HTML 5 Doctype declaration instead of the older XHTML 1.0 Strict.

	<!DOCTYPE html>

More on the [HTML5 Doctype](http://www.w3schools.com/html5/tag_doctype.asp)/

All HTML and CSS should be valid. Markup should be well-formed and contain all 
required attributes. Elements should occur within the proper context of the DOCTYPE.

* HTML should validate with the [W3C Markup Validation Service](http://validator.w3.org/).
* Style sheets should validate with the [http://jigsaw.w3.org/css-validator/ W3C CSS Validation Service].

## iMarc Credits

Include the following `credits` meta tag in the had that attributes iMarc.

	<meta name="credits" content="Created by iMarc: web + creative + strategy + mobile. More info at www.imarc.net" />

## Content Descriptors

### Page Titles

Title tags should contain descriptive information that concisely describes the current
page. In the case of nested pages, information in the title tag should be ordered from
most specific to least specific. A standard delimiter such as `–` should be employed 
to indicate distinct content levels.

	<title>Writing Content For Your Website – Support – iMarc</title>

This shows that I’m on the page called //Writing Content For Your Website//. That 
page lives in a section called //Support// which resides in a website for //iMarc//.

The homepage should include the site or company name, followed by a simple description 
of the entire website.

	<title>iMarc – Web Design, Online Applications, Boston, MA</title>

### Meta Description

The homepage should include a meta description. The meta description should 
only be included on the homepage, since the only real-world use of a meta 
description is that Google (and other search engines) use it in the blurb in 
search results. 

Interior pages should not include a meta description so Google can use actual 
content from the page in their results blurb.

![Example of meta description in search results](/img/meta_description.jpg)

The meta description should be less than 160 characters.

	<meta name="description" content="iMarc creates web sites &amp; applications for discerning clients. Strategy, marketing, design and programming since 1997. Newburyport, MA — 978-462-8848" />

## Browser Targeting

Frontend code should apply to all supported browsers. When necessary, use
[conditional comments](http://www.quirksmode.org/css/condcom.html) to target specific 
versions of Internet Explorer.

Style written specifically for Internet Explorer should be placed inside a 
properly scoped conditional stylesheet. This example comment targets Internet Explorer
less than or equal to version 6:

	<!--[if lte IE 6]>
		<link rel="stylesheet" href="/sup/css/lte_ie6.css" />
	<![endif]-->

## Presentational Elements

Presentational elements should not be used for text styling purposes. Instead,
CSS should be used to apply style to text.

Presentational elements include `b`, `i`, `u`, `big`, `small`, and `font`.

## Naming Conventions

### Using Classes and IDs

Classes and IDs should all be lowercase, and use an underscore in between words.

Assign meaningful classes to elements when appropriate for style or 
interaction. IDs are acceptable only when it is necessary to identify a 
unique element on the page.

Classes have the benefit of being highly reusable. By utilizing classes, we 
can write leaner, more reusable CSS.

### Body Classes and IDs

Use classes on the body element to denote current section. Use an optional ID 
if needed for targeting styles for specific pages.

	<body class="products" id="macbook_pro">

### Choose Meaningful Names

Choose names that accurately describe the content, not the visual container. 
Avoid choosing presentational names.

For example, `meta` is an acceptable class name while `sidebar_info` is not. The 
described content will always be //meta//; it might not always be in the 
context of a sidebar.

- Meaningful class names might be: `main`, `aside`, `record_detail`.
- Bad CSS classes would be: `leftColumn`, `blue_callout`, `hidden`. 

### Structure

Most page layouts can generally be thought of in three primary parts. These
structural names should be used as IDs in the markup.

* #### header
  Global navigation, logo, utility links, typically at the top of a page.
* #### torso
  Holds all content that is not part of the header or footer. Typically the torso is between the header and footer.
* #### footer
  Links and global content that typically follow the content.

Example diagram:
![Structural naming conventions](img/naming_structure.jpg)

### Navigation 

Within the structural elements, navigation should be described using the 
following terminology.

* #### primary\_nav::
	Links to top-level pages representing the first level of directories
* #### secondary\_nav::
	Links to pages within a single section; direct children of a single primary\_nav item
* #### tertiary\_nav::
	Links to pages representing direct children of a single secondary\_nav item
* #### supplemental\_nav::
	Top-teir navigation that is visually de-emphasized. It always supplements the primary\_nav.
* #### utility::
	Element that holds global utility functions and links, such as login forms, links to secondary or tertiary pages called out globally, messaging, forms

![Navigation naming conventions](img/naming_navigation.jpg)


Within navigation elements, there may be a different style to denote the current 
page or section.

 active::
  The currently viewed item in any navigation (primary_nav, secondary_nav, etc.)
 
![Active states in navigation](img/naming_navigation_2.jpg)

### Content

* #### main
  The purpose of the page, whatever the most important content is.
* ### supplemental
  Any auxiliary content or related info
* ### section
  Holds part of the main or supplement content
* ### callout
  A summary of existing content edited and styled for emphasis
* ### highlight
  Inline content styled for visual emphasis

Example diagram:
![Content naming conventions](/wiki/sup/img/naming_content.jpg)

### Messaging

* #### success::
  Confirmation after an action has successfully completed
* #### info::
  Informative message
* #### error::
  Notification that an action had problems
* #### help::
  Coaching or guidance; typically inline

### Complete Page Markup

This is an example of a complete page using the naming conventions described above.

	<body>
		<div id="header">
			<ul class="primary_nav">
				<li>
				  <a href="#">a link</a>
				  <a href="#" class="active">another link</a>
				</li>
			</ul>	
			<ul class="secondary_nav">
				<li>
				  <a href="#">a link</a>
				</li>
			</ul>	
			<ul class="tertiary_nav">
				<li>
				  <a href="#">a link</a>
				</li>
			</ul>	
		</div>
		<div id="torso">
			<div class="main">
				<div class="info">
					this is an info utility area
				</div>
				<ul class="supplemental_nav">
					<li>
						<a href="#">a link</a>
					</li>
				</ul>
				<div class="section">
					this is the <span class="highlight">main content</span>
					<div class="callout">
						this is a callout
					</div>
				</div>
			</div>
			<div class="supplemental">
				this is supplemental to the main content
			</div>
		</div>
		<div id="footer">
			this is a footer
		</div>
	</body>

## Forms

All elements inside a `form` element should be placed within a `fieldset` element. Use
a heading tag instead of the `legend` element to title fieldsets.

The `action` attribute is required on all forms, and should have a blank value by default.

### Form Element Markup

Form inputs and labels are grouped together within a div. The containing div 
is named after the form input type.  For example, a 
`text` input is contained inside `<div class="text">` and 
a `file` input is contained inside `<div class="file">`.

Related fields, such as checkboxes and radio fields, may be further grouped 
within a div with a class of the plural input type, such as `checkboxes`. 

This allows maximum form style flexibility with minimal markup changes.

Required and optional fields should be indicated by a `span` with a class 
of `required` or `optional` within the associated `label` element.

If an input has a max-length defined in the database, it should have a 
corresponding max-length attribute in the markup.

This is an example of default form markup.

	<form action="" method="post">
		
		<fieldset>
			<h3>Fieldset Heading (don't use a legend)</h3>
			<div class="text">
				<label for="sample_form-text">Text<span class="required">*</span></label>
				<input id="sample_form-text" type="text" />
				<span class="help">only numbers and letters</span>
			</div>
			<div class="password">
				<label for="sample_form-password">Password<span class="required">*</span></label>
				<input id="sample_form-password" type="password" />
			</div>
		</fieldset>
		
		<fieldset>
			<h3>Another Fieldset</h3>
			<div class="radios group">
				<label>Choose one</label>
				<div class="radio">
					<input id="sample_form-radio" type="radio" />
					<label for="sample_form-radio">radio</label>
				</div>
				<div class="radio">
					<input id="sample_form-radio_1" type="radio" />
					<label for="sample_form-radio_1">radio 1</label>
				</div>
				<div class="radio">
					<input id="sample_form-radio_2" type="radio" />
					<label for="sample_form-radio_2">radio 2</label>
				</div>
			</div>
			<div class="checkboxes group">
				<label>Check all that apply</label>
				<div class="checkbox">
					<input id="sample_form-checkbox" type="checkbox" />
					<label for="sample_form-checkbox">checkbox</label>
				</div>
				<div class="checkbox">
					<input id="sample_form-checkbox_1" type="checkbox" />
					<label for="sample_form-checkbox_1">checkbox 1</label>
				</div>
				<div class="checkbox">
					<input id="sample_form-checkbox_2" type="checkbox" />
					<label for="sample_form-checkbox_2">checkbox 2</label>
				</div>
			</div>
			<div class="select">
				<label for="sample_form-select">Select one</label>
				<select id="sample_form-select">
					<optgroup label="group">
						<option value="option">Option</option>
						<option value="option 1">option 1</option>
						<option value="option 2" selected="selected">option 2</option>
					</optgroup>
					<optgroup label="group 1">
						<option value="option 3">option 3</option>
						<option value="option 4">option 4</option>
						<option value="option 5">option 5</option>
					</optgroup>
				</select>
			</div>
			<div class="select multiple">
				<label for="sample_form-select_multiple">Select multiple</label>
				<select id="sample_form-select_multiple" multiple="multiple" size="2">
					<option value="option 6">option 6</option>
					<option value="option 7">option 7</option>
					<option value="option 8" selected="selected">option 8</option>
				</select>
			</div>
		</fieldset>
		
		<fieldset>
			<h3>Another Fieldset</h3>
			<div class="textarea">
				<label for="sample_form-textarea">Textarea</label>
				<textarea id="sample_form-textarea" rows="20" cols="20">Textarea, 20 rows, 20 columns</textarea>
			</div>
			<div class="file">
				<label for="sample_form-file">Upload File</label>
				<input type="file" id="sample_form-file" />
			</div>
		</fieldset>
		
		<fieldset>
			<h3>Another Fieldset</h3>
			<div class="button">
				<input type="button" value="button" />
			</div>
			<div class="image">
				<input type="image" src="/sup/img/forms/image.jpg" value="image" />
			</div>
			<div class="submit">
				<input type="submit" />
			</div>
		</fieldset>

	</form>

### Labels

All appropriate input elements should have an associated label element. Labels
should be associated directly with inputs.

	<label for="name">name</label>
	<input id="name" type="text" />

## Tables

### Table Structure

All Tables should adhere to proper structure, including `thead`, `tfoot`, 
and `tbody` when appropriate table content exists.

	<table summary="example table with thead, tfoot, and tbody.">
		<colgroup>
			<col />
			<col />
		</colgroup>
		<thead>
			<tr>
				<th>header 1</th>
				<th>header 2</th>
				<th>header 3</th>
			</tr>
		</thead>
		<tfoot>
			<tr>
				<td>footer 1</td>
				<td>footer 2</td>
				<td>footer 3</td>
			</tr>
		</tfoot>
		<tbody>
			<tr>
				<td>body 1</td>
				<td>body 2</td>
				<td>body 3</td>
			</tr>
		</tbody>
	</table>

## Summaries

Tables should contain a summary attribute, which should summarize the table contents.

	<table summary="Table containing main toolbar items (icons and links).">

### Columns

Use `<colgroup>` and `<col>` elements to style table columns instead of using a `class`
on each table cell. The only style properties that should be modified cross-browser are
`background` and `color`.

	<table summary="example table with col and colgroup">
		<col class="first" />
		<colgroup>
			<col class="second" />
			<col class="third" />
		</colgroup>
		<tr>
			<td>First column</td>
			<td>Second column</td>
			<td>Third column</td>
		</tr>
		<tr>
			<td>First column</td>
			<td>Second column</td>
			<td>Third column</td>
		</tr>
	</table>

## Stylesheet Formatting

Stylesheets should be organized in a logical manner. Related style rules should 
be grouped together in ascending order of specificity. Style rules with nested 
specificity should be indented accordingly.

Each property should have a space between the colon and the value, and should
end with a semi-colon. 

	.header {
		background: #EEE;
	}
		.header .content {
			padding: 0;
			margin: 0 auto;
			background: none;
		}
			.header .content .title {
				margin: 0;
				float: left;
				line-height: 3;		
				color: #000000;
				font-size: 24px;
				font-weight: normal;
				font-family: Helvetica, Arial, sans-serif;			
			}

To visually divide a style sheet, use the following comment style as a section 
indicator.

	/* --------------------------------------------------------------------- */
	/* Layout
	/* --------------------------------------------------------------------- */ 

Style rules with one style property may be written on one line, with a single 
space between braces.

	body { background: #FFF; }

Style rules with more than one property should have each property on a new 
indented line. When there is more than one selector for a single rule, 
each selector goes on its own line. The close brace should be on its own 
line at the same indentation as the style selector.

	html,
	body {
		color: #000;
		background: #FFF;
	}

### Inline Styles

Inline styles should not be used. Instead, use a class or ID selector to apply
style from a stylesheet.

## Browser Reset

A browser reset should be the first style added to a greenfield project. 
Browser resets ensure that inconsistent default browser styles are not applied.

Use iMarc’s standard browser reset at the beginning of your CSS file.

	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, font, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td {
		margin: 0;
		padding: 0;
		border: 0;
		outline: 0;
		font-size: 100%;
		vertical-align: baseline;
		background: transparent;
	}

iMarc’s browser reset is derived from http://meyerweb.com/eric/tools/css/reset/

After resetting, make sure you apply some [#SaneDefaults sane defaults] and 
test all markup with our [#MarkupTester markup test].

### Sane Defaults

A browser reset only does half the job. Elements that get reset, must then be 
set to sane defaults. This allows markup to render as most expect it, even 
before the stylesheet is updated to accommodate a specific design.

Start with the following sane defaults and update them as the design requires.

	html {
		color: #000;
		background: #FFF;
	}

	body {
		width: 960px;
		padding: 24px;
		margin: 0 auto;
		font-size: 16px;
		line-height: 1.5;
		font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
	}

	h1 {
		font-size: 36px;
		line-height: 1.33;
		margin-bottom: 0.66em;
	}

	h2 {
		font-size: 24px;
		line-height: 1.0;
		margin-bottom: 1em;
	}

	h3 {
		font-size: 21px;
		line-height: 1.14;
		margin-bottom: 1.14em;
	}

	h4 {
		font-size: 18px;
		line-height: 1.33;
		margin-bottom: 1.33em;
	}

	h5 {
		margin-bottom: 1.5em;
	}

	h6 {
		font-weight: normal;
		margin-bottom: 1.5em;
	}

	p {
		margin-bottom: 1.5em;
	}

	ul {
		margin: 0 0 1.5em 3em;
	}

	ol {
		margin: 0 0 1.5em 3em;
	}

	dl {
		margin-bottom: 1.5em;
	}

	dt {
		font-weight: bold;
	}

	dd {
		margin: 0 0 0 3em;
	}

	tt, 
	code {
		background: #EEE;
		font-family: Consolas, Monaco, monospace;
	}

	pre {
		background: #EEE;
		font-family: Consolas, Monaco, monospace;
		padding: 1.5em;
		margin: 0 0 1.5em 0;
	}

	blockquote {
		padding: 0 0 0 15px;
		margin: 0 0 1.5em 1.5em;
		border-left: 1px solid #CCC;
	}

	/* tables still need 'cellspacing="0"' in the markup */
	table {
		width: 100%;
		border-spacing: 0;
		margin-bottom: 1.5em;
		border-collapse: collapse;
	}

	th {
		padding: .83em;
		text-align: left;
		border-bottom: 1px solid #999;
	}

	td {
		padding: .83em;
		border-bottom: 1px solid #CCC;
	}

	form {
		margin: 1em 0;
	}
		form fieldset {
			margin: .5em 0 1.5em 0;
		}
		form fieldset h3 {
			margin-bottom: .5em;
			border-bottom: 1px solid #CCC;
		}
		form .text label, 
		form .password label, 
		form .radios label, 
		form .checkboxes label, 
		form .select label, 
		form .textarea label, 
		form .file label {
			display: block;
		}
			form .radios .radio label, 
			form .checkboxes .checkbox label {
				display: inline;
			}
			
		form textarea {
			width: 100%;
		}
		
		form textarea,
		form .text input, 
		form .password input {
			font-size: 16px;
			font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
		}

	/* messaging */
	.success { }
	.info { }
	.error { }
	.help { }

	/* content areas */
	.section { }
	.callout { }
	.highlight { }

Double check your CSS with our [#MarkupTester markup test].

## Group Clearfix

Use the "group" class to clear parent elements with floated children. It allows 
for parent elements to be more easily styled.

	.group:after {
		content: ".";
		display: block;
		height: 0;
		clear: both;
		visibility: hidden;
	}

To get the group clearfix to work in IE6 and IE7, it is necessary to include
the following rules within conditional comments.

	/* IE6 */
	.group { height: 1%; }

	/* IE7 */
	.group { min-height: 1px; }

## Layout

### Floats

Use floats to construct layouts instead of frames, iframes, or tables. 
This maintains the flow of the page, and allows acceptable control over 
source ordering.

## Type

The default type size and font for a site should be set on the `body` element.

body {
	font-size: 16px;
	font-family: Constantia, Lucida, Georgia, serif;
}

Do not set sizes on unclassed markup that typically should be rendered as 
the default text size. This includes `p`, `li`, `div`, `td`, `a`.

Use pixel units to size type. Use the `em` unit to set the top and bottom margins on type.
Leading, or `line-height`, should be a unitless measure.

	h1 {
		font-size: 36px;
		line-height: 1.33;
		margin: 0 0 .66em 0;
	}

### @font-face

Use bulletproof syntax to include font files with `@font-face`. Appropriate 
file formats should be provided for supported browsers.

Bulletproof `@font-face` syntax (via [http://www.fontspring.com/blog/the-new-bulletproof-font-face-syntax Ethan Dunham at Font Spring]):

	@font-face {
		font-family: 'ExpresswayRegular';
		src: url('../../sup/fonts/expressway_rg-webfont.eot?') format('eot'),    	    
			 url('../../sup/fonts/expressway_rg-webfont.woff') format('woff'),
			 url('../../sup/fonts/expressway_rg-webfont.ttf')  format('truetype'),
			 url('../../sup/fonts/expressway_rg-webfont.svg#webfont') format('svg');
	}

Font Squirrel has a handy [@font-face Generator](http://www.fontsquirrel.com/fontface/generator) 
that can convert font files to various formats.

## CSS3

Use CSS3 as a visual enhancement for supporting browsers. It should never 
detract from the experience of browsers that do not support a particular rule.

[The Cross-Browser CSS3 Rule Generator](http://css3please.com)/

## Browser Prefixes

Include `-webkit` and `-moz` prefixes with each declaration that supports these 
prefixes. Prefixed styles should be grouped together with the related styles.

	.callout {
		-webkit-border-top-left-radius: 10px;
		-webkit-border-top-right-radius: 5px;
		-moz-border-radius-topleft: 10px;
		-moz-border-radius-topright: 5px;
		border-top-left-radius: 10px;
		border-top-right-radius: 5px;
	}

[CSS Border Radius Generator](http://borderradius.com)/

### Media Queries

Use inline media query syntax if the scoped style is targeted and concise.

	@media (max-width: 1000px) {
		body{
			background: #000;
		}
	}

To target multiple devices, load common style in `base.css`. Each device should 
have its own stylesheet.

	<link rel="stylesheet" type="text/css" href="/base.css" media="all" />
	<link rel="stylesheet" type="text/css" href="/screen.css" media="screen and (min-width: 481px)" />
	<link rel="stylesheet" type="text/css" href="/mobile.css" media="screen and (max-width: 480px)" />

However, even in this example, some devices may download all three stylesheets, 
including background images in each sheet. This allows the browser to apply 
specific width-based rules on the fly without re-fetching images or CSS. 
The downside is a loss of optimization. For tips on improving optimization, 
see [Mobile Optimization](#MobileOptimizatio)n

## Flash

If you need to embed Flash on a page, use the latest version of [http://code.google.com/p/swfobject/ SWFObject].

In the HTML, set up a div container that will hold the Flash, and then put a
Flash alternative in to the container (if JS or Flash are not available). Often
times this could be an image that looks like the Flash that is linked to the
Flash install page.

	<div class="promotion">
		Flash is not currently available on your machine.
		<a href="http://get.adobe.com/flashplayer/">Click here to install Flash</a>.
	</div>

The JavaScript should be where you initialize the Flash. You first need to
append a Flash holder within the flash container (in this case, '.scroller') in
the HTML, as SWFObject replaces whatever element it uses. Then SWFObject embeds the Flash.

	$(function() {
		$('.scroller').append('<div id="flash_holder" />');
		
		var params = {
			wmode: 'transparent'
		};
		swfobject.embedSWF(
			'/sup/flash/example.swf', // location of Flash
			'flash_holder',           // container id
			'640',                    // width
			'480',                    // height
			'9.0.0',                  // version of Flash to use
			false,                    // whether to express install Flash
			{},                       // flashvars (often used when tying in PHP via XML)
			params,                   // default parameters (always include wmode transparent)
			{}                        // <object> attributes
		);
	});

Additional documentation on the parameters used by SWFObject is available
[here](http://code.google.com/p/swfobject/wiki/documentation#STEP_3:_Embed_your_SWF_with). 
Note particularly that the wmode parameter of transparent is required,
as it allows IE6 to have HTML elements show over it (such as dropdown menus).

## Tips


### Complete iMarc Head

The following template can be used to to start most iMarc-created web pages.

	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
	  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
	<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<meta name="credits" content="Created by iMarc: web + creative + strategy + mobile. More info at www.imarc.net" />
		<meta http-equiv="content-type" content="text/html; charset=utf-8" />
		<title>Title</title>
	</head>

### Markup Tester

After resetting CSS and applying style, it’s easy to overlook a seldom-used 
tag. Download the [Markup Tester (HTML file)](https://svn.imarc.net/framework.imarc.net/trunk/html/markup_test.html) 
from the Framework repository and drop it onto your page. All the markup should 
render nicely.

### Inline-block

Use inline-block to vertically align block level elements.

**Internet Explorer:** You can use inline-block on default inline elements 
(a, span, em etc.). Using "display: inline;" on default block elements will 
achieve something close to inline-block in Internet Explorer.

**Additional Notes:** Gecko 1.8.1 removed support for inline-block. Proprietary 
style properties are required for browsers using Gecko 1.8.1. Firefox 2 was 
the most popular browser using the Gecko 1.8.1 rendering engine.

### Typographic Scale

Use a typographic scale when choosing type sizes. The traditional scale 
makes a good default.

**Traditional Scale** – 6, 7, 8, 9, 10, 11, 12, 14, **16**, 18, 21, 24, 36, 48, 60, 72

More information on [typographic scales](http://lamb.cc/typograph/).

### Font Stacks

Specify font families using font stacks. This provides appropriate fall-back 
fonts to handle when a specified font may not be available.

Default **serif** font stack:

font-family: Constantia, Lucida, Georgia, serif;

Default **sans-serif** font stack:

font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;

Include a generic font family such as `serif`, `sans-serif`, `cursive`, 
`fantasy`, or `monospace`. This provides a fallback in case all other fonts 
in the stack are unavailable.

### Enhanced Facebook Meta

Liking and sharing web pages via Facebook can yield unexpected results related
to its appearance in newsfeeds. Facebook pulls what it deems relevant to a
shared item – title, description, photo, etc. For a supplementary thumbnail, 
Facebook pulls the first `img` it can find in the site. If this is 
unsatisfactory, you can control the thumbnail image to be shared by using the 
following line in the web site's `head`:

	<link rel="image_src" href="/sup/img/site/logo_acme.png" />		

#### Facebook Open Graph

More detailed information about a web site can be shared with Facebook using
their [Open Graph protocol](https://developers.facebook.com/docs/opengraph/). 
Used in parallel with the 
[Like button](https://developers.facebook.com/docs/reference/plugins/like), it
enables a connection between Facebook users and a web page.

### Mobile Optimization

#### Viewport
On mobile-specific sites, set the viewport to the width of the device:

	<meta name="viewport" content="width=device-width">

This fits the webpage into the visible area of the `viewport` to ensure that 
the page is scaled to 100% on load.

This works in most, but not all mobile browsers, a full chart of support is here: 
http://www.quirksmode.org/mobile/tableViewport.html#metaviewport

#### Mobile Orientation Changes
iPhone can have issues with dynamic orientation changes – changing from 
portrait to landscape view while viewing a page. The issue occurs on iPhone, 
when using the viewport setting, `width=device-width, initial-scale=1.0`.

[Mozilla’s developer site](https://developer.mozilla.org/en/Mobile/Viewport_meta_tag#Viewport_basics) 
explains this issue and one possible solution:

> Mobile Safari often just zooms the page when changing from portrait to 
> landscape, instead of laying out the page as it would if originally loaded 
> in landscape. If web developers want their scale settings to remain 
> consistent when switching orientations on the iPhone, they must 
> add a `maximum-scale` value to prevent this zooming, which has the 
> sometimes-**unwanted side effect of preventing users from zooming in**.

Another option iMarc has discussed is employing JavaScript to solve iPhone’s 
re-orientation issue.

#### Media Query Behavior

Use `min-device-width` to prevent automatic reflowing when a window is 
resized.

	<link rel="stylesheet" href="/base.css" media="all" type="text/css"  />
	<link rel="stylesheet" href="/desktop.css" media="screen and (min-device-width: 481px)" type="text/css" />

**With min/max-device-width:**
- Andriod and iOS phones will download both CSS files
- Andriod and iOS phones will ignore style definitions, images, and assets 
  referenced in `desktop.css`.
- When a desktop browser is sized down narrower than 481px, nothing 
  will change.
- See [http://www.ddmf.org/ http://www.ddmf.org/]

Use `min-width` or `max-width` to allow media queries to dynamically activate 
when the browser window is scaled.

	<link rel="stylesheet" href="/base.css" media="all" type="text/css" />
	<link rel="stylesheet" href="/desktop.css" media="screen and (min-width: 481px)" type="text/css" />

**With min/max-width:**
- Andriod and iOS phones will download both CSS files (same as above)
- Andriod and iOS phones will ignore style definitions, images, and assets 
   referenced in `desktop.css`. (same as above)
- When a desktop browser is scaled down the `desktop.css` styles will be 
  deactivated causing the page to dynamically reflows.
- //See [http://robot-or-not.com/](http://robot-or-not.com/)//

Additional info on 
[Peter Gasston’ blog](http://www.broken-links.com/2011/02/21/using-media-queries-in-the-real-world/). 
Andy Clark’s [320 and up project](http://stuffandnonsense.co.uk/projects/320andup/) 
also provides resources for optimization.

#### Media Query Alternative

To prevent a specific style sheet from even being requested, JavaScript can 
be used.

	if (screen.width > 768) {
		document.write('<link rel="stylesheet" href="full.css" type="text/css" />');
	}
	else {
		document.write('<link rel="stylesheet" href="mobile.css" type="text/css" />');
	}
