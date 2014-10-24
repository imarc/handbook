---
title: Frontend
layout: default
---

<section class="intro">
	<p>
		This document describes iMarc’s markup and style standards. 
		<a href="http://imarc.net">iMarc</a> is a full service web development and design firm with offices near Boston and Silicon Valley.
	</p>
</section>

## Boilerplate
**[Boilerplate](http://imarc.github.io/boilerplate)** is a great 
starting point for new projects. Authored by iMarc, Boilerplate contains our standard HTML and CSS.

## Doctype

Use the [HTML5](https://developer.mozilla.org/en-US/docs/HTML/HTML5) doctype on new projects.

It’s important to understand your project’s technical specification. Some advanced HTML5 technologies may not function correctly.

If you choose to use HTML5 elements, use [Modernizr](http://modernizr.com) to ensure backwards compatability with older browsers.

Modernizr detects what the browser’s rendering engine supports, and allows you to customize the look of the website depending on what’s supported.

HTML5shiv has been incorporated into Modernizr, so do not use duplicate shivs.


	<!DOCTYPE html>


### Validation

All HTML and CSS should be valid. Markup should be well-formed and contain all 
required attributes. Elements should occur within the proper context of the DOCTYPE.

* HTML should validate with the [W3C Markup Validation Service](http://validator.w3.org/).
* Stylesheets should validate with the [W3C CSS Validation Service](http://jigsaw.w3.org/css-validator).

## Metadata content

### Page Titles

Title tags should contain descriptive information that concisely describes the current
page. In the case of nested pages, information in the title tag should be ordered from
most specific to least specific. A standard delimiter such as `–` should be employed 
to indicate distinct content levels.

	<title>Writing Content For Your Website – Support – iMarc</title>

This shows that I’m on the page called *Writing Content For Your Website*. That 
page lives in a section called *Support* which resides in a website for *iMarc*.

The homepage should include the site or company name, followed by a simple description 
of the entire website.

	<title>iMarc – Web Design, Online Applications, Boston, MA</title>

### Meta Description

All pages should include a meta description – a concise, human-readable 
description of that page’s contents. Do not duplicate meta descriptions 
from other pages. Meta descriptions appear in search engine result pages 
as seen in the graphic below, however Google will sometimes replace meta 
descriptions with on-page content as they see fit.

[Tips for writing meta descriptions by Google](http://support.google.com/webmasters/bin/answer.py?hl=en&answer=35624#1)

![Example of meta description in search results](/img/meta_description.jpg)

Keep meta descriptions less than 160 characters.

	<meta name="description" content="iMarc creates web sites &amp; applications for discerning clients. Strategy, marketing, design and programming since 1997. Newburyport, MA — 978-462-8848" />

### iMarc Credits

Include the following meta tag in the head to credit iMarc.

	<meta name="author" content="Created by iMarc: web + creative + strategy + mobile. More info at www.imarc.net" />

### Character Encoding

Use UTF-8 as the character encoding. Set your editor to use UTF-8 for 
all aspects of the web application.

HTML pages should begin with by setting `UTF-8` in the content-type meta tag.

	<meta charset="UTF-8" />

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

## Icons

### Favicons

Use ICO files for favicons using this syntax:

	<link rel="shortcut icon" href="http://example.com/myicon.ico" />

If you’re using Photoshop, you should install an [ICO plugin](http://www.telegraphics.com.au/sw/product/ICOFormat#icoformat) which will allow you to save out ICO files. You can also use [Dynamic Drive's web converter](http://tools.dynamicdrive.com/favicon). Due to the proliferation of high pixel density displays, size favicons at 32x32 rather than the recent 16x16 standard.

### Touch Icons

iOS and Android devices both support touch icons.

Using a precomposed touch icon removes iOS effects (reflective sheen, 
drop shadow, rounded corners). Touch icons will not work on Android 
devices without the precomposed attribute value.

	<link rel="apple-touch-icon-precomposed" href="apple-touch-icon-precomposed.png">

Your touch icons should be a PNG at 512x512. It’s possible to specify 
different sizes for different devices, but using a single high 
resolution touch icon is the easiest way to ensure the highest 
quality icon. For further reading, see the [iOS Developer Library](http://developer.apple.com/library/ios/#DOCUMENTATION/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html).

## Coding Style

Consistent coding style for HTML and CSS is vital because multiple people 
collaborate on a site’s markup and style. 

### Line Breaks

Set your text editor to only use Unix line-break (`\n`), not Windows (`\r\n`)
or Mac (`\r`) breaks. 

### HTML

Keep markup at a reasonable width. When markup surrounds a significant amount of content, place the tags on their own line, indent the content, and hard-wrap content at about 80 characters.

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

#### Layout

Use floats to construct layouts instead of frames, iframes, or tables. This maintains the flow of the page, and allows acceptable control over source ordering.

#####Containing floats#####

Make sure to properly contain floats with a clearfix. iMarc uses a `group` class.

    .group:before,
    .group:after {
        content: '';
        display: table;
    }
    .group:after {
        clear: both;
    }

Include the following Internet Explorer rules if your project requires support for IE7 and below.

	/* IE7 */
	.lt_ie8 .group { min-height: 1px; }

	/* IE6 */
	.lt_ie7 .group { height: 1%; }


### CSS

#### Formatting

    .callout,
    .module {
        background-color: #FFF;
        border: 1px solid #DDD;
        color: #666;
        height: 60px;
        margin: 20px auto;
        padding: 20px;
        width: 960px;
    }

<ul>
	<li>
		Selector(s) lives on its own line(s) followed by the opening brace
	</li>
	<li>
		Each declaration lives on its own indented line
	</li>
	<li>
		Declarations are ordered alphabetically by property name
	</li>
	<li>
		Each property has a space between the colon and value ends with a semi-colon
	</li>
	<li>
		The closing brace should be on its own line at the same indentation as the selector  
	</li>
</ul>


Stylesheets should be organized in a logical manner. See [Boilerplate’s](http://imarc.github.io/boilerplate) sections in its CSS file. To visually divide a stylesheet sections, use the following comment style as a section indicator.

	/* = Typography = */


Related style rules should be grouped together in ascending order of specificity. 


    header {
        background-color: #EEE;
    }
    header .content {
        background: none;
        margin: 0 auto;
        padding: 0;
    }
    header .content .title {
        color: #000000;
        float: left;
        font-family: Helvetica, Arial, sans-serif;
        font-size: 24px;
        font-weight: normal;
        margin: 0;
    }

#### CSS3
Be mindful of CSS properties that are not cross-browser compatible. Some properties need vendor-specific prefixes in order to render the same. Always place vendor-specific declarations before W3C.

    a {
        color: #487c3d;
        text-decoration: none;
        -moz-transition: all .1s ease;
        -webkit-transition: all .1s ease;
        transition: all .1s ease;
    }

#### Bad Practices 

CSS rules should live within a CSS file. Do not use inline styles in HTML.

	<!-- DON'T DO THIS -->
	<div class="module" style="background-color: #666; padding: 10px;">
	    …
	</div>

Presentational elements should not be used for text styling purposes. Instead, CSS should be used to apply style to text.

Presentational elements include `b`, `i`, `u`, `big`, `small`, and `font`.

## Directory Structure

Stylesheets, images, and other supporting files are stored in the root directory in their respective folders.

Images can contain sub-directories if you feel it helps organization.

JavaScript plugins/frameworks should live in a `lib` directory. 

    /css
        screen.css
        print.css
    /img
        header.jpg
        /icons
            facebook.gif
            twitter.gif
    /js
        site.js
        /lib
            /jquery-1.9.1.min.js


## Browser Support 

The following **philosophy** is paraphrased from our standard proposal language. 

* We produce semantic, HTML5-compliant markup, CSS, and scripts.
* We believe users should be able to consume as much visual and interactive richness as their browser can support. 
* We test against a specific whitelist of mainstream desktop and mobile browsers. 
* We ensure our sites function correctly and look as good as possible on these browsers. 
* We recognize that not every browser functions in the same way and requiring an identical experience imposes false limitations on users with modern more capable browsers. 
* We do not require an *identical experience*. Instead we strive for an *optimal experience* for each user's environment.
* We recognize that some browsers are incapable of properly rendering standards compliant code. We do not code to support these browsers unless explicitly requested and spec'ed for the poject.

### Desktop Browser Support

<table>
<tr>
<th>Browser/Version</th>
<th>Mac 10.9</th>
<th>Mac 10.10</th>
<th>Win XP</th>
<th>Win 7</th>
<th>Win 8</th>
</tr>
<tr>
<td>Chrome (stable)</td>
<td></td>
<td class="supported" colspan="4">yes
</td></tr>
<tr>
<td>Firefox (stable)</td>
<td>  </td>
<td class="supported" colspan="4">yes
</td></tr>
<tr>
<td>Internet Explorer 8.0</td>
<td></td>
<td></td>
<td class="supported">yes</td>
<td class="supported">yes</td>
<td>
</td></tr>
<tr>
<td>Internet Explorer 9.0</td>
<td></td>
<td></td>
<td></td>
<td class="supported">yes</td>
<td>
</td></tr>
<tr>
<td>Internet Explorer 10.0</td>
<td></td>
<td></td>
<td></td>
<td class="supported">yes</td>
<td class="supported">yes
</td></tr>
<tr>
<td>Internet Explorer 11.0</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td class="supported">yes (*8.1 only)
</td></tr>
<tr>
<td>Safari 7.1</td>
<td class="supported">yes</td>
<td></td>
<td></td>
<td></td>
<td>
</td></tr>
<tr>
<td>Safari 7.1 Retina</td>
<td class="supported">yes</td>
<td></td>
<td></td>
<td></td>
<td>
</td></tr>
<tr>
<td>Safari 8.0</td>
<td></td>
<td class="supported">yes</td>
<td></td>
<td></td>
<td>
</td></tr>
<tr>
<td>Safari 8.0 Retina</td>
<td></td>
<td class="supported">yes</td>
<td></td>
<td></td>
<td>
</td></tr>
</table>

As of October 2014, the definitive list includes Chrome and Firefox (Mac & Windows), IE 8+, Safari 7+ (Mac & iOS), and Andoid Browser (Android 2.3, 4.1, 4.2 handsets).

By default we do not test on IE 6 and 7. However individual projects may require browser support beyond our defaults. In these cases the additional support will be specified in the proposal and strategy documents.

### Mobile Browser Support

<table>
<tr>
<th> Platform/OS </th>
<th> Browser </th>
<th> Target Devices </th>
<th> Resolution(s)
</th></tr>
<tr>
<td> iOS 6 </td>
<td> Safari </td>
<td> iPhone Retina </td>
<td> 640x960
</td></tr>
<tr>
<td> iOS 6 </td>
<td> Safari </td>
<td> iPhone </td>
<td> 320x480
</td></tr>
<tr>
<td> iOS 6 </td>
<td> Safari </td>
<td> iPad Retina </td>
<td> 2048x1536
</td></tr>
<tr>
<td> iOS 6 </td>
<td> Safari </td>
<td> iPad </td>
<td> 1024x768
</td></tr>
<tr>
<td> iOS 7 </td>
<td> Safari 7 </td>
<td> iPhone Retina </td>
<td> 640x960
</td></tr>
<tr>
<td> iOS 7 </td>
<td> Safari 7 </td>
<td> iPad Retina </td>
<td> 2048x1536
</td></tr>
<tr>
<td> iOS 7 </td>
<td> Safari 7 </td>
<td> iPad </td>
<td> 1024x768
</td></tr>
<tr>
<td> Android 2.3 </td>
<td> Browser </td>
<td> handsets, 7" tablets </td>
<td> 320x480 to 1024x600
</td></tr>
<tr>
<td> Android 4.1–4.3 </td>
<td> Browser </td>
<td> handsets </td>
<td> 320x480 to 1920x1080
</td></tr>
<tr>
<td> Android 4.1–4.3 </td>
<td> Browser </td>
<td> 7" tablet, 10" tablet </td>
<td> 1024x600 to 2460x1600
</td></tr>
<tr>
<td> Android 4.1–4.3 </td>
<td> Chrome </td>
<td> handsets </td>
<td> 320x480 to 1920x1080
</td></tr>
<tr>
<td> Android 4.1–4.3 </td>
<td> Chrome </td>
<td> 7" tablet, 10" tablet </td>
<td> 1024x600 to 2460x1600
</td></tr>
</table>

iMarc employees who have access to our wiki can read more about our policies in the [Browser Support](http://wiki.imarc.net/Browser_Support) article.

### Internet Explorer styles

Some older versions of Internet Explorer need dedicated CSS rules in order to achieve design and functionality. You can target previous versions of Internet Explorer from special HTML classes. Place these styles in a deciated CSS file if the same name (e.g. lt_ie9.css). If the amount of Internet Explorer styles is small, place them in the project’s main CSS file.
	
	<!--[if lt IE 7]> <html class="lt_ie9 lt_ie8 lt_ie7" lang="en"> <![endif]-->
	<!--[if IE 7]>    <html class="lt_ie9 lt_ie8" lang="en"> <![endif]-->
	<!--[if IE 8]>    <html class="lt_ie9" lang="en"> <![endif]-->
	<!--[if gt IE 8]><!--> <html lang="en"> <!--<![endif]-->


## Accessibility 

Use the Baseline Checklist below to ensure an acceptable level of accessibility. For clients who desire an extra level of accessibility, use the Advanced Checklist.

### ARIA Landmark Roles

ARIA landmark roles allow ease of navigation for non-sighted users. Screenreaders can traverse areas of a website by their respective landmark role, allowing users to skip over regions that are repeated on every page. iMarc takes advantage of five roles:
<ul>
	<li>
		<code>banner</code>: A region that contains the prime heading or internal title of a page.
	</li>
	<li>
		<code>navigation</code>: A collection of links suitable for use when navigating the document or related documents.
	</li>
	<li>
		<code>main</code>: Main content in a document. In almost all cases a page will have only one main role.
	</li>
	<li>
		<code>complementary</code>:	Any section of the document that supports the main content, yet is separate and meaningful on its own.
	</li>
	<li>
		<code>contentinfo</code>: A region that contains information about the parent document such as copyrights and links to privacy statements
	</li>
</ul>

Adding a role is simple and does not affect the display or behavior of a web page. Note that if there are multiple navigation structures, they should be labeled for completeness using the <code>aria-label</code> attribute.

	<header class="primary" role="banner">

	<nav aria-label="utility" class="utility" role="navigation">

	<nav aria-label="primary" class="primary" role="navigation">

	<nav aria-label="secondary" class="secondary" role="navigation">

	<aside class="primary" role="complementary">

	<div class="main" role="main">

	<footer class="primary" role="contentinfo">


### Baseline Checklist
<ul>
	<li>
		Use open web standards such as HTML, CSS, JavaScript
	</li>
	<li>
		HTML and CSS correctly validate using W3C validation tools  
		<ul>
			<li>
				<a href="http://validator.w3.org">HTML validator</a>
			</li>
			<li>
				<a href="http://jigsaw.w3.org/css-validator">CSS validator</a>
			</li>
		</ul>
	</li>
	<li>
		Include skip navigation allowing users to skip repetitive navigation
	</li>
	<li>
		focus styles should should exist on links and form elements
	</li>
	<li>
		Ensure all anchors work and none are set to href=”#”
	</li>
	<li>
		JavaScript adds a behavior and adheres to progressive advancement, graceful degradation practices. Users without JavaScript can view all website content.
	</li>
	<li>
		<strong>Web forms</strong>
		<ul>
			<li>
				Inputs always have associated labels
			</li>
			<li>
				If using HTML5, form inputs should use an associated type attribute (e.g. search, tel, email, datetime)
			</li>
			<li>
				Validation messages show all errors at once instead of progressively showing more errors
			</li>
			<li>
				Validation messages use same field names as form and in the same order
			</li>
			<li>
				Make sure all required fields are listed as required in error message
			</li>
			<li>
				Make sure required fields visually indicate their requirements (e.g. asterisk)
			</li>
		</ul>
	</li>
	<li>
		Images should always have an alt attribute, where its value conveys the same thing that is communicated to a sighted user seeing the image. Decorative or redundant images can utilize an empty alt value.
	</li>
	<li>
		Site has a custom 404 page.
	</li>
	<li>
		Timed responses are properly indicated to users.
	</li>
	<li>
		All content is viewable without an active stylesheet.
	</li>
	<li>
		<strong>Color</strong>
		<ul>
			<li>
				Color combinations should not create visual difficulty for users with color deficiencies. Utilize <a href="http://www.checkmycolours.com">Check My Colours</a> or a similar service.
			</li>
			<li>
				Important information should not be conveyed with color alone. Use other identifiers like special characters and font weight.
			</li>
		</ul>
	</li>
	<li>
		All form fields can be activated, operated and submitted using a keyboard.
	</li>
	<li>
		Users can control galleries and modal windows using a keyboard.
	</li>
</ul>


### Advanced Checklist

* Audio files are accompanied by text transcriptions.
* Videos are captioned.
* CAPTCHAs are accessible to screen reader users and to Braille Display users.
* Print stylesheets are used for maximum legibility.
* Mobile media query is used to ensure website layout does not break on mobile devices.

## Naming Conventions

See **[iMarc Boilerplate structure](http://imarc.github.com/boilerplate/structure)** 
for detailed layout naming conventions.

### Structure

Most page layouts can generally be thought of in three primary parts. These structural names should be used as classes in the markup.

* **`header.primary`** – Logo, global navigation, utility links, typically at the top of a page.
* **`.torso`** – Holds all content that is not part of the header or footer. Typically the torso is between the header and footer.
* **`footer.primary`** – Links and global content that typically follow the content. Note that 


![Structural naming conventions](img/naming_structure.png)


### Navigation 

Navigation should be named as the following:

* **`nav.primary`** – Links to top-level pages representing the first level of directories
* **`nav.secondary`** – Links to pages within a single section; direct children of a primary parent
* **`nav.utility`** – Global utility links (e.g. Log In, Cart, Careers)
* **`nav.tertiary`** – (not pictured) Links to pages representing direct children of a secondary parent

Use unordered list markup within navigation instead of anchors. Lists allows us to represent hierarchy.

![Navigation naming conventions](img/naming_navigation.png)


Within navigation elements, there may be a different style to denote the current 
page or section.

* **`.active`** – The currently viewed item in any navigation.


![Active states in navigation](img/naming_navigation2.png)


### Content

* **`.main`** – The purpose of the page, whatever the most important content is
* **`aside.primary`** – Any auxiliary content or related info
* **`.intro`** – Introductory content styled for visual emphasis


![Content naming conventions](img/naming_content.png)


### Messaging

* **`.success`** – Confirmation after an action has successfully completed
* **`.info`** – Informative message
* **`.error`** – Notification that an action had problems
* **`.help`** – Coaching or guidance; typically inline


Sample messaging markup. Note that chaining off `messaging` helps to avoid repeating CSS rules.

    <div class="messaging success">
        <p>
            Congratulations! You have signed up for ACME’s business afterhours.
        </p>
    </div>
    
### Use Only Class Selectors

To avoid CSS specificity issues, use only class selectors when marking up HTML.
The exceptions to this rule are anchors, form label IDs, the ID that is 
[placed on the `body` tag](frontend#BodyClassesandIDs), and instances when IDs are 
more appropriate hooks for JavaScript.

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

Use classes and IDs on the body element to denote current section and page, respectively.

	<body class="products" id="macbook_pro">

## Forms

All elements inside a `form` element should be placed within a `fieldset` element. A `fieldset` is used to group related form elements. Use a heading tag instead of the `legend` element to title fieldsets.

The `action` attribute is required on all forms, and should have a blank value by default.

### Form Element Markup

Form inputs and labels are grouped together within a div. The containing div is named after the form input type.  For example, a `text` input is contained inside `<div class="text">` and a `file` input is contained inside `<div class="file">`.

All appropriate input elements should have an associated label element. 
Labels should be associated directly with inputs.

Related fields, such as checkboxes and radio fields, may be further grouped 
within a div with a class of the plural input type, such as `checkboxes`. 

This allows maximum form style flexibility with minimal markup changes.

Required fields should be indicated by a `span` with a class of `required` within the associated `label` element.

If an input has a max-length defined in the database, it should have a 
corresponding max-length attribute in the markup.

Form element markup

    <form method="post">
        <fieldset>
            <p>
                Through out the fields, you will also see <code>span.help</code>
                elements. These are used for help text relevant to fields.
            </p>
            <div class="text">
                <label for="sample_form-text">Text <span class="required">*</span></label>
                <input id="sample_form-text" type="text" />
                <span class="help">only numbers and letters</span>
            </div>
            <div class="password">
                <label for="sample_form-password">Password <span class="required">*</span></label>
                <input id="sample_form-password" type="password" />
            </div>
        </fieldset>
    
        <fieldset>
            <h4>
                Radios and Checkboxes
            </h4>
            <div class="radios group">
                <label>Choose one</label>
                <label class="radio">
                    <input id="sample_form-radio" type="radio" />
                radio
                </label>
                <label class="radio">
                    <input id="sample_form-radio_1" type="radio" />
                    radio 1
                </label>
                <label class="radio">
                    <input id="sample_form-radio_2" type="radio" />
                    radio 2
                </label>
            </div>
            <div class="checkboxes group">
                <label>Check all that apply</label>
                <label class="checkbox">
                    <input id="sample_form-checkbox" type="checkbox" />
                    checkbox
                </label>
                    <label class="checkbox">
                    <input id="sample_form-checkbox_1" type="checkbox" />
                    checkbox 1
                </label>
                <label class="checkbox">
                    <input id="sample_form-checkbox_2" type="checkbox" />
                    checkbox 2
                </label>
            </div>
        </fieldset>
    
        <fieldset>
            <h4>
                Selects
            </h4>
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
                         <option value="option 6">option 6</option>
                         <option value="option 7">option 7</option>
                         <option value="option 8">option 8</option>
                     </optgroup>
                 </select>
            </div>
            <div class="select multiple">
                <label for="sample_form-select_multiple">Select multiple</label>
                <select id="sample_form-select_multiple" multiple="multiple" size="2">
                    <optgroup label="group">
                        <option value="option">Option</option>
                        <option value="option 1">option 1</option>
                        <option value="option 2" selected="selected">option 2</option>
                    </optgroup>
                    <optgroup label="group 1">
                        <option value="option 3">option 3</option>
                        <option value="option 4">option 4</option>
                        <option value="option 5">option 5</option>
                        <option value="option 6">option 6</option>
                        <option value="option 7">option 7</option>
                        <option value="option 8">option 8</option>
                    </optgroup>
                </select>
            </div>
        </fieldset>
    
        <fieldset>
            <h4>
                Textareas and Files
            </h4>
            <div class="textarea">
                <label for="sample_form-textarea">Textarea</label>
                <textarea id="sample_form-textarea"></textarea>
            </div>
            <div class="file">
                <label for="sample_form-file">Upload File</label>
                <input type="file" id="sample_form-file" />
            </div>
        </fieldset>
    
        <fieldset>
            <h3>
                Buttons
            </h3>
            <div class="submit">
                <input type="submit" value="Submit" />
            </div>
            <div class="button">
                <input type="button" value="Input Button" />
            </div>
            <div class="reset">
                <input type="reset" value="Reset" />
            </div>
            <div class="button">
                <button>Button Element</button>
            </div>
            <a href="" class="button">&lt;a&gt; as a button</a>							
        </fieldset>
    </form>

## Tables

Use tables to display tabular data such as a pricing or feature chart. Do not use tables for page layout. Make sure your tables do not only use rows and cells – take advantage of other elements to increase accessibility.

### Caption

Optional element. `caption` helps describe the table. Think of it as a title. 

    <table>
        <caption>
            ACME, Inc Product Line Pricing Tiers
        </caption>
        …
    </table>


### Table Headers and Scope

Use the table headers element `th` to indicate a header. Passing a `scope` attribute  and value of `col` or `row` gives non-visual user agents specific guidance on where its associated data lives. This is important when there are headers at the top of columns and at the beginning of each row.

    <table>
        <caption>
            ACME, Inc Product Line Pricing Tiers
        </caption>
        <tr>
            <th scope="col">
                Bronze Tier
            </th>
            <th scope="col">
                Silver Tier
            </th>
        </tr>
        <tr>
            <td>
                2 hours of support
            </td>
       	    <td>
                5 hours of support
            </td>
        </tr>
    </table>

### Column Groups

While not used for accessibility, use `<colgroup>` and `<col>` elements to more easily style table columns.

    <table>
        <colgroup>
            <col class="bronze" />
            <col class="silver" />
            <col class="gold" />
        </colgroup>
        <thead>
            <tr>
                <th>
                    Bronze Tier
                </th>
                <th>
                    Silver Tier
                </th>
                <th>
                    Gold Tier
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    2 hours of support
                </td>
                <td>
                    5 hours of support
                </td>
                <td>
                    10 hours of support
                </td>
            </tr>
        </tbody>
    </table>



## Typography

The default type size and font for a site should be set on the `body` element.

	body {
	    font-size: 16px;
	    font-family: Arial, Helvetica, serif;
	}

Do not set sizes on unclassed markup that typically should be rendered as 
the default text size. This includes `p`, `li`, `div`, `td`, `a`.

Use pixel units to size type. Use the `em` unit to set the top and bottom 
margins on type. Leading, or `line-height`, should be a unitless measure.

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

### Web Fonts

Use the following syntax to use web fonts with `@font-face`. Appropriate 
file formats should be provided for supported browsers. When using a multi 
weight/style typeface be sure to add the appropriate `font-weight` and `font-style` for each.

Bulletproof `@font-face` syntax via [FontSpring](http://www.fontspring.com/blog/the-new-bulletproof-font-face-syntax)

	@font-face {
	   font-family: 'VerbRegular';
	      src: url('/fonts/VerbRegular-webfont.eot');
	      src: url('/fonts/VerbRegular-webfont.eot?#iefix') format('embedded-opentype'),
	           url('/fonts/VerbRegular-webfont.woff') format('woff'),
	           url('/fonts/VerbRegular-webfont.ttf') format('truetype'),
	           url('/fonts/VerbRegular-webfont.svg#VerbRegular') format('svg');
	   font-weight: normal;
	   font-style: normal;
	}
	@font-face {
	   font-family: 'VerbRegularItalic';
	      src: url('/fonts/VerbRegular-Italic-webfont.eot');
	      src: url('/fonts/VerbRegular-Italic-webfont.eot?#iefix') format('embedded-opentype'),
	           url('/fonts/VerbRegular-Italic-webfont.woff') format('woff'),
	           url('/fonts/VerbRegular-Italic-webfont.ttf') format('truetype'),
	           url('/fonts/VerbRegular-Italic-webfont.svg#VerbRegularItalic') format('svg');
	   font-weight: normal;
	   font-style: italic;
	}
	@font-face {
	   font-family: 'VerbBold';
	      src: url('/fonts/VerbBold-webfont.eot');
	      src: url('/fonts/VerbBold-webfont.eot?#iefix') format('embedded-opentype'),
	           url('/fonts/VerbBold-webfont.woff') format('woff'),
	           url('/fonts/VerbBold-webfont.ttf') format('truetype'),
	           url('/fonts/VerbBold-webfont.svg#VerbBold') format('svg');
	   font-weight: bold;
	   font-style: normal;
	}
	@font-face {
	   font-family: 'VerbBoldItalic';
	      src: url('/fonts/VerbBold-Italic-webfont.eot');
	      src: url('/fonts/VerbBold-Italic-webfont.eot?#iefix') format('embedded-opentype'),
	           url('/fonts/VerbBold-Italic-webfont.woff') format('woff'),
	           url('/fonts/VerbBold-Italic-webfont.ttf') format('truetype'),
	           url('/fonts/VerbBold-Italic-webfont.svg#VerbBoldItalic') format('svg');
	   font-weight: bold;
	   font-style: italic;
	}

When styling elements, it's important to define the `font-family` as well as 
`font-weight` and `font-style` when necessary. This eliminates any faux bolding 
or faux italics in the browser. [Here's an example of faux styling when you don't properly define each font](http://paul.sandbox.imarc.net/font-face/) 

Use the following method when defining fonts:

    body {
        font-family: "VerbRegular";
    }
    h1, h2 {
        font-family: "VerbBold";
    }
    h3 {
        font-family: "VerbRegular";
        font-weight: normal;
    }
    strong {
        font-family: "VerbBold";
    }
    strong em {
        font-family: "VerbBoldItalic";
    }
    em {
        font-family: "VerbRegularItalic";
    }

Font Squirrel also has a handy [@font-face Generator](http://www.fontsquirrel.com/fontface/generator) 
that can convert font files to various formats. Make sure you check with your producer 
regarding the use of web fonts as there are licensing requirements for certain fonts.

**[Google Web Fonts](http://www.google.com/webfonts)** is a free web font collection iMarc has used.

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

## Mobile Optimization

### Viewport
On mobile-specific sites, set the viewport to the width of the device:

	<meta name="viewport" content="width=device-width">

This fits the webpage into the visible area of the `viewport` to ensure that 
the page is scaled to 100% on load.

This works in most, but not all mobile browsers, a full chart of support is 
here [Quirksmode](http://www.quirksmode.org/mobile/tableViewport.html#metaviewport)

### Mobile Orientation Changes
iPhone can have issues with dynamic orientation changes – changing from 
portrait to landscape view while viewing a page. The issue occurs on iPhone, 
when using the viewport setting, `initial-scale=1.0`.

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


### Media Queries

Meida queries is a CSS3 technology allowing scope limitation of styles based on a 
feature such as width, aspect ratio, pixel density, and more. iMarc primarily 
uses media queries to serve different styles to mobile and tablet devices.

All media queries can reside in a site’s main stylesheet.

    @media (min-width: 481px) {
        nav.primary li { 
            float: left;
            font-size: 1.4em;
            font-weight: bold;
            margin: 0 0 20px 20px;
        }
    }

Some devices may download all styles (including large background images), regardless 
of whether that device is scoped. This allows the device to apply specific width-based 
rules on the fly without re-fetching images or CSS. The downside is a loss of optimization. 
For tips on improving optimization, see [Mobile Optimization](frontend#MobileOptimization)

#### Media Query Behaviors

Use `min-device-width` to prevent automatic reflowing when a window is 
resized.

	<link rel="stylesheet" href="/base.css" media="all" type="text/css"  />
	<link rel="stylesheet" href="/desktop.css" media="screen and (min-device-width: 481px)" type="text/css" />

**With min/max-device-width:**
- Android and iOS phones will download both CSS files
- Android and iOS phones will ignore style definitions, images, and assets 
  referenced in `desktop.css`.
- When a desktop browser is sized down narrower than 481px, nothing 
  will change.
- See [http://www.ddmf.org/](http://www.ddmf.org/)

Use `min-width` or `max-width` to allow media queries to dynamically activate 
when the browser window is scaled.

	<link rel="stylesheet" href="/base.css" media="all" type="text/css" />
	<link rel="stylesheet" href="/desktop.css" media="screen and (min-width: 481px)" type="text/css" />

**With min/max-width:**
- Android and iOS phones will download both CSS files (same as above)
- Android and iOS phones will ignore style definitions, images, and assets 
   referenced in `desktop.css`. (same as above)
- When a desktop browser is scaled down the `desktop.css` styles will be 
  deactivated causing the page to dynamically reflows.
- See [http://robot-or-not.com/](http://robot-or-not.com/)

Additional info on 
[Peter Gasston’ blog](http://www.broken-links.com/2011/02/21/using-media-queries-in-the-real-world/). 
Andy Clark’s [320 and up project](http://stuffandnonsense.co.uk/projects/320andup/) 
also provides resources for optimization.


## Tips ##

### Markup Tester

After resetting CSS and applying style, it’s easy to overlook a seldom-used 
tag. Download the [Markup Tester (HTML file)](https://svn.imarc.net/framework.imarc.net/trunk/html/markup_test.html) 
from the Framework repository and drop it onto your page. Make sure all tags render appropriately on your project.

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

