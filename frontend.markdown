---
title: Frontend
layout: default
---

# Frontend

This document describes iMarc’s markup and style standards. iMarc is a full 
service web development and design firm located north of Boston. Learn more 
at <a href="http://imarc.net">http://imarc.net</a>.

## iMarc Boilerplate
**[iMarc Boilerplate](https://github.com/imarc/boilerplate)** is a great 
starting point for new projects. Authored by iMarc, boilerplate contains 
standard HTML and CSS.

## Doctype

Use the [HTML5](https://developer.mozilla.org/en-US/docs/HTML/HTML5) doctype on new projects. 

	<!DOCTYPE html>


### Validation

All HTML and CSS should be valid. Markup should be well-formed and contain all 
required attributes. Elements should occur within the proper context of the DOCTYPE.

* HTML should validate with the [W3C Markup Validation Service](http://validator.w3.org/).
* Stylesheets should validate with the [W3C CSS Validation Service](http://jigsaw.w3.org/css-validator).

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

    header {
        margin: 1em auto;
        width: 40em;
    }

### Line Breaks

Set your text editor to only use Unix line-break (`\n`), not Windows (`\r\n`)
or Mac (`\r`) breaks. 

### HTML Formatting

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
line at the same indentation as the style selector. Order CSS declarations 
alphabetically by property name.

	.logo {
	    background: #FFF;
	    border: 1px solid #666;
	    color: #000;
	    height: 40px;
	    position: absolute;
	    top: 0;
	}

Stylesheets should be organized in a logical manner. Related style rules 
should be grouped together in ascending order of specificity. Style rules 
with nested specificity should be indented accordingly.

Each property should have a space between the colon and the value, and should
end with a semi-colon. 

	header {
	    background: #EEE;
	}
	    header .content {
	        background: none;
	        margin: 0 auto;
	        padding: 0;
	    }
	      header .content .title {
	          color: #000000;
	          float: left;
	          font-size: 24px;
	          font-weight: normal;
	          font-family: Helvetica, Arial, sans-serif;
	          line-height: 3;		
	          margin: 0;
	      }

To visually divide a style sheet, use the following comment style as a section 
indicator.

	/* --------------------------------------------------------------------- */
	/* Section
	/* --------------------------------------------------------------------- */ 

### Inline Styles

Inline styles should not be used. Instead, use a class selector to apply
style from a stylesheet.

## Storing and Naming Files

Stylesheets, images, and other supporting files are stored in the root 
directory in respective folders.

CSS files are stored under `/css/`.

Images should reside under `/img/` and can be stored into subfolders if you wish (e.g. `/img/icons/`)

    /css
        screen.css
        print.css
    /img
        header.jpg
        /icons
            facebook.gif
            twitter.gif

## Browser Support & Accessibility

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

As you are working on a website, use the Baseline Checklist below to ensure 
an acceptable level of accessibility. For clients who desire an extra level 
of accessibility, use the Advanced Checklist.

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
	* Color combinations should not create visual difficulty for users with color deficiencies. Utilize [Check My Colours](http://www.checkmycolours.com), [Color Oracle](http://colororacle.org) or a similar service.
	* Important information should not be conveyed with color alone. Use other identifiers like special characters and font weight.
* All form fields can be activated, operated and submitted using a keyboard.
* Users can control galleries and modal windows using a keyboard.

#### Advanced Checklist

* Audio files are accompanied by text transcriptions.
* Videos are captioned.
* CAPTCHAs are accessible to screen reader users and to Braille Display users.
* Print stylesheets are used for maximum legibility.
* Mobile media query is used to ensure website layout does not break on mobile devices.


## Content Descriptors

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


## iMarc Credits

Include the following meta tag in the head to credit iMarc.

	<meta name="author" content="Created by iMarc: web + creative + strategy + mobile. More info at www.imarc.net" />

## Favicon

Use ICO files for favicons using the code snippet below.

	<link rel="shortcut icon" href="http://example.com/myicon.ico" />

If you’re using Photoshop, you should install the [ICO plugin](http://www.telegraphics.com.au/svn/icoformat/trunk/dist/README.html) which will allow you to save out ICO files. If you need to quickly create an ICO favicon and you don't have access to the plug-in, you can also use [Dynamic Drive's web converter](http://tools.dynamicdrive.com/favicon/).

## Touch Icons

iOS and Android devices both support touch icons.

Using a precomposed touch icon removes iOS effects (reflective sheen, 
drop shadow, rounded corners). Touch icons will not work on Android 
devices without the precomposed attribute value.

	<link rel="apple-touch-icon-precomposed" href="apple-touch-icon-precomposed.png">

Your touch icons should be a PNG at 512x512. It's possible to specify 
different sizes for different devices, but using a single high 
resolution touch icon is the easiest way to ensure the highest 
quality icon. For further reading, see the [iOS Developer Library](http://developer.apple.com/library/ios/#DOCUMENTATION/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html).

## Browser Reset
Use a browser reset as they ensure that inconsistent default browser 
styles are not applied.

Use iMarc’s standard browser reset at the beginning of your CSS file. 
It can be found at the beginning of the CSS file within iMarc Boilerplate.

iMarc’s browser reset is derived from the [HTML5 Boilerplate Reset](https://github.com/h5bp/html5-boilerplate/blob/master/css/normalize.css)

After resetting, make sure you apply some [sane defaults](#SaneDefaults) and 
test all markup with our [markup tester](#MarkupTest).

Double check your CSS with our [markup test](#MarkupTester).

## Group Clearfix

Use the _group_ class on parent elements to properly contain floats.

    .group:before,
    .group:after {
        content: '';
        display: table;
    }
    .group:after {
        clear: both;
    }

To get the _group_ method to work in IE6 and IE7, it is necessary to include
the following rules within their respective IE CSS sections.

	/* IE6 */
	.group { height: 1%; }

	/* IE7 */
	.group { min-height: 1px; }


## Naming Conventions

See **[iMarc Boilerplate structure](http://imarc.github.com/boilerplate/structure)** 
for detailed layout naming conventions.

### Structure

Most page layouts can generally be thought of in three primary parts. These
structural names should be used as classes in the markup.

* **`header.primary`** – Logo, global navigation, utility links, typically at the top of a page.
* **`.torso`** – Holds all content that is not part of the header or footer. Typically the torso is between the header and footer.
* **`footer.primary`** – Links and global content that typically follow the content. Note that 


![Structural naming conventions](img/naming_structure.png)


### Navigation 

Navigation should be referenced as the following.

* **`nav.primary`** – Links to top-level pages representing the first level of directories
* **`nav.secondary`** – Links to pages within a single section; direct children of a single primary parent
* **`footer.utility`** – Navigation that holds global utility links (e.g. login, shopping cart)
* **`nav.tertiary`** – (not pictured) Links to pages representing direct children of a single secondary parent


![Navigation naming conventions](img/naming_navigation.png)


Within navigation elements, there may be a different style to denote the current 
page or section.

* **`.active`** – The currently viewed item in any navigation (primary_nav, secondary_nav, etc.)


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
[placed on the `body` tag](#BodyClassesandIDs), and instances when IDs are 
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

Use classes and IDs on the body element to denote current section. Use an optional ID 
if needed for targeting styles for specific pages.

	<body class="products" id="macbook_pro">

## Forms

All elements inside a `form` element should be placed within a `fieldset` 
element. Use a heading tag instead of the `legend` element to title fieldsets.

The `action` attribute is required on all forms, and should have a blank value by default.

### Form Element Markup

Form inputs and labels are grouped together within a div. The containing div 
is named after the form input type.  For example, a 
`text` input is contained inside `<div class="text">` and 
a `file` input is contained inside `<div class="file">`.

All appropriate input elements should have an associated label element. 
Labels should be associated directly with inputs.

Related fields, such as checkboxes and radio fields, may be further grouped 
within a div with a class of the plural input type, such as `checkboxes`. 

This allows maximum form style flexibility with minimal markup changes.

Required and optional fields should be indicated by a `span` with a class 
of `required` or `optional` within the associated `label` element.

If an input has a max-length defined in the database, it should have a 
corresponding max-length attribute in the markup.

For form element markup, see **[iMarc Boilerplate on GitHub](https://github.com/imarc/boilerplate/blob/gh-pages/markup.html)**.

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

Use `<colgroup>` and `<col>` elements to style table columns instead of 
using a `class` on each table cell. The only style properties that should 
be modified cross-browser are `background` and `color`.


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

### Typographic Scale

Use a typographic scale when choosing type sizes. The traditional scale 
makes a good default.

**Traditional Scale** – 6, 7, 8, 9, 10, 11, 12, 14, **16**, 18, 21, 24, 36, 48, 60, 72

More information on [typographic scales](http://lamb.cc/typograph/).

### Web Fonts

Use the following syntax to use web fonts on the web with `@font-face`. Appropriate 
file formats should be provided for supported browsers. When using a multi 
weight/style typeface be sure to add the appropriate `font-weight` and `font-style` for each.

Bulletproof `@font-face` syntax (via [http://www.fontspring.com/blog/the-new-bulletproof-font-face-syntax](Font Squirrel)):

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

[Google Web Fonts](http://www.google.com/webfonts) is a free web font collection iMarc has used.

## Presentational Elements

Presentational elements should not be used for text styling purposes. Instead,
CSS should be used to apply style to text.

Presentational elements include `b`, `i`, `u`, `big`, `small`, and `font`.

## Internet Explorer styles

Frontend code should apply to all supported browsers. If necessary, target 
versions of Internet Explorer via their respective CSS classes from the `HTML` tag.
	
	<!--[if lt IE 7]> <html class="lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
	<!--[if IE 7]>    <html class="lt-ie9 lt-ie8" lang="en"> <![endif]-->
	<!--[if IE 8]>    <html class="lt-ie9" lang="en"> <![endif]-->
	<!--[if gt IE 8]><!--> <html lang="en"> <!--<![endif]-->

## HTML5 and CSS3 usage

While iMarc uses the [HTML5](https://developer.mozilla.org/en-US/docs/HTML/HTML5) 
doctype, it’s important to understand your project’s technical specification. 
Some advanced HTML5 technologies may not function correctly 

If you choose to use HTML5 elements, use [Modernizr](http://modernizr.com/) 
to ensure backwards compatability with older browsers.

Modernizr detects what the browser’s rendering engine supports, and allows you 
to customize the look of the website depending on what’s supported.

HTML5shiv has been incorporated into Modernizr, so do not use duplicate shivs.

### CSS3

Use CSS3 as a visual enhancement for supporting browsers. It should never 
detract from the experience of browsers that do not support a particular property.

[The CSS3 Rule Generator](http://css3generator.com)

If needed, include appropriate `-webkit` and `-moz` vendor prefixes to ensure 
maximum browser compatibility. Prefixed properties should be grouped together 
before the W3C standard property. [Can I use…](http://caniuse.com) is a fine 
resource to research browser support.

    .callout {
        -webkit-border-top-left-radius: 10px;
        -webkit-border-top-right-radius: 5px;
        -moz-border-radius-topleft: 10px;
        -moz-border-radius-topright: 5px;
        border-top-left-radius: 10px;
        border-top-right-radius: 5px;
    }


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
For tips on improving optimization, see [Mobile Optimization](#MobileOptimization)

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
- See [http://www.ddmf.org/ http://www.ddmf.org/]

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

#### Media Query Alternative

To prevent a specific style sheet from even being requested, JavaScript can 
be used.

    if (screen.width > 768) {
        document.write('<link rel="stylesheet" href="full.css" type="text/css" />');
    }
    else {
        document.write('<link rel="stylesheet" href="mobile.css" type="text/css" />');
    }


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

