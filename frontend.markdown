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

	<meta charset="utf-8" />

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

  The em dashs is the nineteenth-century standard, still prescribed in many 
  editorial style books, but the em dash is too long for use with the best 
  text faces. Like the oversized space between sentences, it belongs to the 
  padded and corseted aesthetic of Victorian typography.

## Coding Style

Consistent coding style for HTML and CSS is vital because multiple people 
collaborate on a site’s markup and style. 

### Indenting & Spacing

Use tab character at the beginning of a line. A tab is expected to represent
the width of four spaces. For inline spacing, use spaces, not tabs.

	.header {
	    width: 40em;
	    margin: 1em auto;
	}

### Line Breaks

Set your text editor to only use Unix line-break (`\n`), not Windows (`\r\n`)
or Mac (`\r`) breaks. 

### Markup Formatting

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

### Stylesheet Formatting

Style rules with more than one property should have each property on a new 
indented line. When there is more than one selector for a single rule, 
each selector goes on its own line. The close brace should be on its own 
line at the same indentation as the style selector.

	html,
	body {
	    color: #000;
	    background: #FFF;
	}

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

### Inline Styles

Inline styles should not be used. Instead, use a class or ID selector to apply
style from a stylesheet.

## Storing and Naming Files

Stylesheets, images, and other supporting files are stored in the root 
directory in respective folders.

CSS files are stored under `/css/`.

Images should reside under `/img/` and can be stored into subfolders if you wish (e.g. `/img/icons/`)

	/css
		print.css
		screen.css
		lte_ie7.css
		lte_ie6.css
	/img
		header.jpg
		/icons
			facebook.gif
			twitter.gif

## Browser Support & Accessibility

All pages should work in every browser, even if they don’t look the same 
across all browsers.

The following is excerpted from our standard proposal. **Frontend markup must 
meet the expectation level set with the client.**

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

### Accessibility Checklist

As you are working on a website, use the Baseline Checklist below to ensure an acceptable level of accessibility. For clients who desire an extra level of accessibility, use the Advanced Checklist.

#### Baseline Checklist

* Uses open web standards such as HTML, CSS, JavaScript, WAI-ARIA
* HTML and CSS correctly validate using W3C validation tools!
	* [HTML validator](http://validator.w3.org/)
	* [CSS validator](http://jigsaw.w3.org/css-validator/)
* Include skip navigation allowing users to skip repetitive navigation
* focus styles should should exist on links and form elements
* Ensure all anchors work and none are set to href=”#”
* JavaScript adds a behavior and adheres to progressive advancement, graceful degradation practices. Users without JavaScript can view all website content.
* Web forms
	* Inputs always have associated labels
	* If using HTML5, form inputs should use an associated type attribute (e.g. search, tel, email, datetime)
	* Validation messages show all errors at once instead of progressively showing more errors
	* Validation messages use same field names as form and in the same order
	* Make sure all required fields are listed as required in error message
	* Make sure required fields visually indicate their requirements (e.g. asterisk)
* Images should always have an alt attribute, where its value conveys the same thing that is communicated to a sighted user seeing the image. Decorative or redundant images can utilize an empty alt value.
* Site has a custom 404 page.
* Timed responses are properly indicated to users.
* All content is viewable without an active stylesheet.
* Color
	* Color combinations should not create visual difficulty for users with color deficiencies. Utilize [http://www.checkmycolours.com](http://www.checkmycolours.com), [http://colororacle.org](http://colororacle.org) or a similar service.
	* Important information should not be conveyed with color alone. Use other identifiers like special characters and font weight.
* All form fields can be activated, operated and submitted using a keyboard.
* Users can control galleries and modal windows using a keyboard.

#### Advanced Checklist

* Audio files are accompanied by text transcriptions.
* Videos are captioned.
* CAPTCHAs are accessible to screen reader users and to Braille Display users.
* Print stylesheets are used for maximum legibility.
* Mobile media query is used to ensure website layout does not break on mobile devices.


## Doctype

Use the [HTML5](https://developer.mozilla.org/en-US/docs/HTML/HTML5) doctype declaration instead of the older XHTML 1.0 Strict.

	<!DOCTYPE html>

While we are utilizing the HTML5 doctype, we are not marking up pages using HTML5 elements such as `header`, `section`, `figure`, etc.  

### Validation

All HTML and CSS should be valid. Markup should be well-formed and contain all 
required attributes. Elements should occur within the proper context of the DOCTYPE.

* HTML should validate with the [W3C Markup Validation Service](http://validator.w3.org/).
* Style sheets should validate with the [W3C CSS Validation Service](http://jigsaw.w3.org/css-validator).

## iMarc Credits

Include the following meta tag in the head to credit iMarc.

	<meta name="author" content="Created by iMarc: web + creative + strategy + mobile. More info at www.imarc.net" />

## Favicon

Use ICO files for favicons using the code snippet below.

	<link rel="shortcut icon" href="http://example.com/myicon.ico" />

If you’re using Photoshop, you should install the [ICO plugin](http://www.telegraphics.com.au/svn/icoformat/trunk/dist/README.html) which will allow you to save out ICO files. If you need to quickly create an ICO favicon and you don't have access to the plug-in, you can also use [Dynamic Drive's web converter](http://tools.dynamicdrive.com/favicon/).

## Touch Icons

iOS and Android devices both support touch icons.

Using a precomposed touch icon removes iOS effects (reflective sheen, drop shadow, rounded corners). Touch icons will not work on Android devices without the precomposed attribute value.

	<link rel="apple-touch-icon-precomposed" href="apple-touch-icon-precomposed.png">

Your touch icons should be a PNG at 512x512. It's possible to specify different sizes for different devices, but using a single high resolution touch icon is the easiest way to ensure the highest quality icon. For further reading, see the [iOS Developer Library](http://developer.apple.com/library/ios/#DOCUMENTATION/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html).

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

All pages should include a meta description – a concise, human-readable description of that page’s contents. Do not duplicate meta descriptions from other pages. Meta descriptions appear in search engine result pages as seen in the graphic below, however Google will sometimes replace meta descriptions with on-page content as they see fit.

[Tips for writing meta descriptions by Google](http://support.google.com/webmasters/bin/answer.py?hl=en&answer=35624#1)

![Example of meta description in search results](/img/meta_description.jpg)

The meta description should be less than 160 characters.

	<meta name="description" content="iMarc creates web sites &amp; applications for discerning clients. Strategy, marketing, design and programming since 1997. Newburyport, MA — 978-462-8848" />

## Conditional Comments

Frontend code should apply to all supported browsers. When necessary, use
[conditional comments](http://www.quirksmode.org/css/condcom.html) to target specific 
versions of Internet Explorer.

Style written specifically for Internet Explorer should be placed inside a 
properly scoped conditional stylesheet. This example comment targets Internet Explorer
less than or equal to version 6 and Internet Explorer 7 only:

	<!--[if lte IE 6]>
	    <link rel="stylesheet" href="/css/site/lte_ie6.css" />
	<![endif]--> 
	<!--[if IE 7]>
	    <link rel="stylesheet" href="/css/site/ie7.css" />
	<![endif]-->

## Presentational Elements

Presentational elements should not be used for text styling purposes. Instead,
CSS should be used to apply style to text.

Presentational elements include `b`, `i`, `u`, `big`, `small`, and `font`.

## Naming Conventions

### Use Only Class Selectors

To avoid CSS specificity issues, use only class selectors when marking up HTML.
The exceptions to this rule are anchors, form label IDs, the ID that is placed on the `body` tag, and instances when IDs are more appropriate hooks for JavaScript.

Classes should be lowercase, using underscores between words.

Classes have the benefit of being highly reusable. By utilizing classes, we 
can write leaner, more reusable CSS.

#### Choose Meaningful Names

Choose names that accurately describe the content, not the visual container. 
Avoid choosing presentational names.

For example, `meta` is an acceptable class name while `sidebar_info` is not. The 
described content will always be `meta`; it might not always be in the 
context of a sidebar.

* Meaningful class names might be: `main`, `aside`, `record_detail`.
* Bad CSS classes would be: `left_column`, `blue_callout`, `hidden`. 

### Body Classes and IDs

Use classes on the body element to denote current section. Use an optional ID 
if needed for targeting styles for specific pages.

	<body class="products" id="macbook_pro">

### Structure

Most page layouts can generally be thought of in three primary parts. These
structural names should be used as classes in the markup.

* **header** – Global navigation, logo, utility links, typically at the top of a page.
* **torso** – Holds all content that is not part of the header or footer. Typically the torso is between the header and footer.
* **footer** – Links and global content that typically follow the content.


![Structural naming conventions](img/naming_structure.jpg)


### Navigation 

Navigation should be referenced as the following.

* **primary** – Links to top-level pages representing the first level of directories
* **secondary** – Links to pages within a single section; direct children of a single primary parent
* **utility** – Navigation that holds global utility links (e.g. login, shopping cart)
* **tertiary** – (not pictured) Links to pages representing direct children of a single secondary parent


![Navigation naming conventions](img/naming_navigation.jpg)

Example markup:

	<div class="nav">
	    <ul class="primary">
	        <li>
	            <a href="">Products</a>
	        </li>
	        <li>
	            <a href="">Services</a>
	        </li>
	        <li>
	            <a href="">Resources</a>
	        </li>
	    </ul>
	</div>

Example CSS:

	.header .nav .primary {
	    ...
	}
	.header .nav .utility {
	    ...
	}

Within navigation elements, there may be a different style to denote the current 
page or section.

* **active** – The currently viewed item in any navigation (primary_nav, secondary_nav, etc.)


![Active states in navigation](img/naming_navigation_2.jpg)


### Content

* **main** – The purpose of the page, whatever the most important content is
* **aside** – Any auxiliary content or related info
* **section** – Holds part of the main or aside content
* **highlight** – Inline content styled for visual emphasis


![Content naming conventions](img/naming_content.jpg)


### Messaging

* **success** – Confirmation after an action has successfully completed
* **info** – Informative message
* **error** – Notification that an action had problems
* **help** – Coaching or guidance; typically inline


Sample messaging markup. Note that chaining off `messaging` helps to avoid repeating
CSS rules.

	<div class="messaging success">
	   <p>
	      Congratulations! You have signed up for ACME’s business afterhours.
	   </p>
	</div>

### Complete Page Markup

This is an example of a complete page using some of the the naming conventions described above.

	<!DOCTYPE html>
	<html lang="en">
	<head>
        <title>Title</title>
	    <meta name="author" content="Created by iMarc: web + creative + strategy + mobile. More info at www.imarc.net" />
	    <meta charset="utf-8" />
	    <link rel="apple-touch-icon-precomposed" href="/img/apple-touch-icon-precomposed.png" />
	    <link rel="shortcut icon" type="image/ico" href="/favicon.ico" />
	    <link rel="stylesheet" type="text/css" href="/css/styles.css" media="all" />
	    <!--[if lt IE 9]>
		    <link href="/css/site/lt_ie9.css" rel="stylesheet" type="text/css">
		<![endif]-->
	</head>

	<body>
	    <div class="header">
	    	<div class="nav">
	            <ul class="utility">
	                <li>
	                    <a href="#">Log In</a>
	                </li>
	                <li>
	                    <a href="#">Cart</a>
	                </li>
	            </ul>
	        </div>
	        <div class="nav">
	        	<ul class="primary">
	                <li class="active">
	                    <a href="#">Products</a>
	                </li>
	                <li>
	                    <a href="#">Services</a>
	                </li>
	                <li>
	                    <a href="#">About</a>
	                </li>
	            </ul>
	        </div>	
	    </div>
	    <div class="torso group">
	        <div class="main">       
	            <p class="highlight">
	                Integer posuere erat a ante venenatis dapibus posuere velit.
	            </p>
	            <p>
	                Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
	                Donec id elit non mi porta gravida at eget metus. Integer posuere erat a ante 
	                venenatis dapibus posuere velit aliquet.
	            </p>
	        </div>
	    </div>
	    <div class="aside">
	        <div class="nav">
                <ul class="secondary">
                    <li>
                        <a href="#">iPod</a>
                    </li>
                    <li>
                        <a href="#">iPad</a>
                    </li>
                    <li>
                        <a href="#">iPhone</a>
                    </li>
                </ul>
            </div>
	        <div class="section">
	            <p>
	                Find us on our social networks.
	            </p>
	        </div>
	    </div>
		<div class="footer">
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
				<input type="image" src="/img/forms/image.jpg" value="image" />
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

### Structure

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

### Summaries

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

## Browser Reset

A browser reset should be the first style added to a greenfield project. 
Browser resets ensure that inconsistent default browser styles are not applied.

Use iMarc’s standard browser reset at the beginning of your CSS file.

	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, font, img, ins, kbd, q, s, samp, 
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center, dl, dt, dd, ol, ul, li,
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
	body {
	    line-height: 1;
	}

iMarc’s browser reset is derived from the [Eric Meyer reset](http://meyerweb.com/eric/tools/css/reset/)

After resetting, make sure you apply some [sane defaults](#SaneDefaults) and 
test all markup with our [markup tester](#MarkupTest).

### Sane Defaults

A browser reset only does half the job. Elements that get reset, must then be 
set to sane defaults. This allows markup to render as most expect it, even 
before the stylesheet is updated to accommodate a specific design.

Start with the following sane defaults and update them as the design requires.

	/* --------------------------------------------------------------------- */
	/*	Acme Agency
	/*	TABLE OF CONTENTS
	/* --------------------------------------------------------------------- */
	/*
	/*	reset
	/*	grouping
	/*	base
	/*	layout
	/*	forms
	/*	tables
	/*	page specific
	/*

	/* --------------------------------------------------------------------- */
	/* reset
	/* --------------------------------------------------------------------- */

	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, font, img, ins, kbd, q, s, samp, 
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center, dl, dt, dd, ol, ul, li,
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
	body { line-height: 1;}

	/* --------------------------------------------------------------------- */
	/* grouping
	/* --------------------------------------------------------------------- */
	.group:after {
		content: ".";
		font-size: 0;
		display: block;
		height: 0;
		clear: both;
		visibility: hidden;
	}

	/* --------------------------------------------------------------------- */
	/* base
	/* --------------------------------------------------------------------- */
	html {
		background: #FFF;
	}
	body {
		color: #717073;
		font-family: Arial, sans-serif;
		font-size: 13px;
		line-height: 1.5;
	}
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		color: #444;
		font-weight: normal;
		margin: 0 0 0.2em;
	}
	h1 {
		font-size: 32px;
		line-height: 1.2;
		margin: 0 0 0.5em;
	}
	h2 {
		font-size: 24px;
	}
	h3 {
		font-size: 18px;
	}
	h4 {
		font-size: 16px;
	}
	h5 {
		font-size: 14px;
	}
	p, 
	ul, 
	ol, 
	dl, 
	img, 
	iframe  { 
		margin: 0 0 1.4em;
	}
	blockquote {
		padding: 0 0 0 15px;
		margin: 0 0 1.5em 1.5em;
	}
	a {
		color: #487c3d;
	}
	a:hover { 
		color: #214919;
	}


	/* --------------------------------------------------------------------- */
	/* layout
	/* --------------------------------------------------------------------- */

	/* header */
	.header {

	}
			
	/* primary nav */
	.primary_nav {

	}
											
	.site {
		margin: 0 auto;
		width: 960px;
	}
		.torso {
			padding: 30px;
		}
			.main {
			
			}
			.aside {
		
			}

	/* footer */

	.footer {

	}	

			
	/* --------------------------------------------------------------------- */
	/* forms
	/* --------------------------------------------------------------------- */

	form label {
		display: block;
		font-weight: bold;
		margin: 0 0 5px;
	}
	span.required {
		color: #ac181b;
		font-size: 12px;
	}
	.text,
	.password,
	.entry,
	.file,
	.checkboxes,
	.select,
	.radios,
	.textarea,
	.submit {
		margin-bottom: 12px;
	}
		.text input,
		.password input,
		.textarea textarea {
			background: #FFF;
			border: 1px solid #AAA;
			color: #444;
			font-family: Arial, sans-serif;
			padding: 5px;
			font-size: 12px;
		}
	.textarea textarea {
		height: 150px;
		width: 360px;
	}
	.checkbox input,
	.radio input {
		float: left;
		margin: 2px 4px 0 0;
		width: 16px;
	}
	.checkbox label,
	.radio label {
		display: inline;
	}

	/* messaging */
	.error,
	.info,
	.success {
		color: #FFF;
		font-size: 14px;
		margin: 20px 0 30px;
		padding: 16px 18px 16px 58px;
	}
	.error   { 
		background: #dc4405;
		border-top: 1px solid #df4242;
	}
	.success { 
		background: #215732; 
		border-top: 1px solid #36d275;
	}
	.info    { 
		background: #ebf2b9;
		border-top: 1px solid #fbffe2;
		color: #333;
	}

		.error a,
		.info a,
		.success a {
			font-weight: bold;
			text-decoration: underline;
		}
		.error a,
		.success a {
			color: #FFF;
		}
		.info a {
			color: #333;
		}
		.error p,
		.info p,
		.success p {
			margin: 0;
		}
		.error ul,
		.info ul,
		.success ul {
			margin: 8px 0 0 30px;
		}
		.error li,
		.info li,
		.success li {
			background: none;
			margin: 0 0 .2em;
			padding: 0;
		}


	/* --------------------------------------------------------------------- */
	/* tables
	/* --------------------------------------------------------------------- */

	table {
		border-collapse: collapse;
		margin: 0;
	}
	td, th {
		text-align: left;
	}

	/* --------------------------------------------------------------------- */
	/* page specific
	/* --------------------------------------------------------------------- */

	/* homepage
	/* --------------------------------------------------------------------- */


Double check your CSS with our [markup test](#MarkupTester).

## Group Clearfix

Use the _group_ class to on parent elements to properly contain floats within it.

	.group:after {
		content: ".";
		display: block;
		height: 0;
		clear: both;
		visibility: hidden;
	}

To get the _group_ method to work in IE6 and IE7, it is necessary to include
the following rules within their respective conditional stylesheets.

	/* IE6 */
	.group { height: 1%; }

	/* IE7 */
	.group { min-height: 1px; }

## Layout

### Floats

Use floats to construct layouts instead of frames, iframes, or tables. 
This maintains the flow of the page, and allows acceptable control over 
source ordering.

## Typography

The default type size and font for a site should be set on the `body` element.

	body {
	    font-size: 16px;
	    font-family: Arial, Helvetica, serif;
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

### Typographic Scale

Use a typographic scale when choosing type sizes. The traditional scale 
makes a good default.

**Traditional Scale** – 6, 7, 8, 9, 10, 11, 12, 14, **16**, 18, 21, 24, 36, 48, 60, 72

More information on [typographic scales](http://lamb.cc/typograph/).

### Web Fonts

Use the following syntax to use web fonts on the web with `@font-face`. Appropriate 
file formats should be provided for supported browsers.

Bulletproof `@font-face` syntax (via [http://www.fontspring.com/blog/the-new-bulletproof-font-face-syntax](Font Squirrel)):

    @font-face {
        font-family: 'DearestRegular';
        src: url('/fonts/Dearest-webfont.eot');
        src: url('/fonts/Dearest-webfont.eot?#iefix') format('embedded-opentype'),
             url('/fonts/Dearest-webfont.woff') format('woff'),
             url('/fonts/Dearest-webfont.ttf') format('truetype'),
             url('/fonts/Dearest-webfont.svg#DearestRegular') format('svg');
        font-weight: normal;
        font-style: normal;
    }

Font Squirrel also has a handy [@font-face Generator](http://www.fontsquirrel.com/fontface/generator) that can convert font files to various formats. Make sure you check with your producer regarding the use of web fonts as there are licensing requirements for certain fonts.

[Google Web Fonts](http://www.google.com/webfonts) is a free web font collection iMarc has used.

## Advanced HTML5 and CSS3 usage

If you choose to use HTML5 elements, use [Modernizr](http://modernizr.com/) 
to ensure backwards compatability with older browsers.

Modernizr detects what the browser’s rendering engine supports, and allows you to customize 
the look of the website depending on what’s supported.

HTML5shim/shiv has been incorporated into Modernizr, so you should not use both.

### CSS3

Use CSS3 as a visual enhancement for supporting browsers. It should never 
detract from the experience of browsers that do not support a particular rule.

[The CSS3 Rule Generator](http://css3generator.com)

Include appropriate `-webkit` and `-moz` vendor prefixes to ensure maximum browser compatibility, Prefixed styles should be grouped together with the related styles.

	.callout {
		-webkit-border-top-left-radius: 10px;
		-webkit-border-top-right-radius: 5px;
		-moz-border-radius-topleft: 10px;
		-moz-border-radius-topright: 5px;
		border-top-left-radius: 10px;
		border-top-right-radius: 5px;
	}


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
see [Mobile Optimization](#MobileOptimization)

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
			'/flash/example.swf', // location of Flash
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

	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta name="author" content="Created by iMarc: web + creative + strategy + mobile. More info at www.imarc.net" />
		<meta charset="utf-8" />
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

### Enhanced Facebook Meta

Liking and sharing web pages via Facebook can yield unexpected results related
to its appearance in newsfeeds. Facebook pulls what it deems relevant to a
shared item – title, description, photo, etc. For a supplementary thumbnail, 
Facebook pulls the first `img` it can find in the site. If this is 
unsatisfactory, you can control the thumbnail image to be shared by using the 
following line in the web site's `head`:

	<link rel="image_src" href="/img/site/logo_acme.png" />		

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
