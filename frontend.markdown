---
title: Frontend
layout: default
---

<section class="intro">
	<p>
		This document describes Imarc’s markup and style standards.
		<a href="https://www.imarc.com">Imarc</a> is a full service web development and design firm with offices near Boston and Silicon Valley.
	</p>
</section>

## Boilerplate
**[Boilerplate](http://imarc.github.io/boilerplate)** is a great
starting point for new projects. Authored by Imarc, Boilerplate contains our standard HTML and SCSS.

## Doctype

Use the [HTML5](https://developer.mozilla.org/en-US/docs/HTML/HTML5) doctype.

    <!DOCTYPE html>

It’s important to understand your project’s technical specification. Some advanced HTML5 technologies may not function correctly in older browsers. If you choose to use advanced HTML5 elements such as `meter` and `picture`, use [Modernizr](http://modernizr.com), a feature detection library that assists with gracefully degrading your project for users with legacy browsers. In short, use **feature detection** and never use **browser detection**.

Modernizr detects what the browser’s rendering engine supports, allowing you to react appropriately to differing support scenarios.


### Validation

A concerted effort should be made to ensure your HTML and CSS validate. Markup should
be semantic and well-formed and contain all required attributes. Elements should occur
within the proper context of the DOCTYPE.

* [W3C HTML Markup Validator](http://validator.w3.org/)
* [W3C CSS Validator](http://jigsaw.w3.org/css-validator)

## Metadata content

### Page Titles

Title tags should contain descriptive information that concisely describes the current
page. In the case of nested pages, information in the title tag should be ordered from
most specific to least specific. A standard delimiter such as `–` or `|` should be employed
to indicate distinct content levels.

	<title>Support - Contact | Imarc Web Design: Boston + Silicon Valley</title>

This shows that I’m on the page called *Support*. That page lives in a section called *Contact*
which resides in a website for *Imarc* . Titles are adjusted to meet SEO needs.

The homepage should include the site or company name, followed by a simple description
of the entire website.

	<title>Imarc | Web Design and Digital Agency in Boston + Silicon Valley</title>

### Meta Description

A quality meta description can help in higher clickthroughs. Ideally, all pages
include a unique meta description – a concise, human-readable description of that
page’s contents. Do not duplicate meta descriptions from other pages. Custom
meta descriptions can appear in search engine result pages as seen in the
graphic below, however Google will sometimes replace custom meta descriptions
with on-page content if they feel it’s of more value to the end user.

If no meta description exists, Google will create its own from on-page content.

[Tips for writing meta descriptions by Google](https://support.google.com/webmasters/answer/35624?hl=en#1)

![Example of meta description in search results](/img/meta_description.jpg)

Keep meta descriptions less than 160 characters. Here is an example meta description for Imarc’s Blog page.

	<meta name="description" content="Our blog features the latest in web design, development, user experience and marketing." />

### Imarc Credits

Include the following meta tag in the head to credit Imarc.

	<meta name="web_author" content="Imarc, A Digital Agency | Boston + Silicon Valley | more info at imarc.com" />

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
        Imarc’s motto: “Use curly quotes”
        <a href="#"> Learn More »</a>
    </p>


## Typography

The default type size and font for a site should be set on the `html` element.

    html {
        font-family: Arial, Helvetica, serif;
        font-size: 16px;
    }

Do not set sizes on unclassed markup that typically should be rendered as
the default text size. This includes `p`, `li`, `div`, `td`, `a`.

Aside from the initial `html` font-size declaration, use `rem` (root relative) units to set type size. With 16px as a base size: 1rem = 16px; 1.25rem = 20px; 2rem = 32px. Leading, or `line-height`, should be a unitless measure.

    h1 {
        font-size: 2.5rem;
        line-height: 1.3;
        margin-bottom: 1.25rem;
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
in the stack are unavailable. Imarc uses a handy `$font-stack` SASS variable
to reference our stack throughout our stylesheet if need be.

### Web Fonts

Use the following syntax to use web fonts with the `@font-face` at-rule. Based on Imarc
browser support, the woff 1.0 font file format satisfies all our user agents. When using a multi
weight/style typeface be sure to add the appropriate `font-style` and `font-weight` for each while
using the same `font-family` name.

    @font-face {
        font-family: 'roboto_slablight';
        src: url('RobotoSlab-Light-webfont.woff') format('woff'),  
        font-weight: normal;
        font-style: normal;
    }


`<em>` and `<strong>` tags will automatically grab the correct `@font-face` rule provided
both an italic and bold version exist.

Other web font services Imarc often uses are: **[Google Web Fonts](http://www.google.com/webfonts)**,
**[Typekit](http://www.typekit.com)**, **[Fonts.com](http://www.fonts.com/)**

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

### Print Styles

While not requested often, some websites necessitate a clean layout when pages
are printed. Imarc begins from a sane starting point as documented in [Imarc Boilerplate](https://github.com/imarc/boilerplate/blob/gh-pages/css/styles.scss#L1130)


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

##### Containing floats

Make sure to properly contain floats with a clearfix. Imarc uses a `group` class.

    .group:before,
    .group:after {
        content: '';
        display: table;
    }
    .group:after {
        clear: both;
    }

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


## Structure

Most page layouts can generally be thought of in three primary parts. These structural names should be used as classes in the markup.

* **`header.primary`** – Logo, global navigation, utility links, typically at the top of a page.
* **`.torso`** – Holds all content that is not part of the header or footer. Typically the torso is between the header and footer.
* **`footer.primary`** – Links and global content that typically follows the torso.


![Structural naming conventions](/img/naming_structure.png)


### Navigation

Navigation should be named as the following:

* **`nav.primary`** – Links to top-level pages representing the first level of directories
* **`nav.secondary`** – Links to pages within a single section; direct children of a primary parent
* **`nav.utility`** – Global utility links (e.g. Log In, Shopping Cart, Settings)
* **`nav.tertiary`** – (not pictured) Links to pages representing direct children of a secondary parent

Use unordered list markup within navigation instead of anchors. Lists allows us to represent hierarchy.

![Navigation naming conventions](/img/naming_navigation.png)


Within navigation elements, there may be a different style to denote the current
page or section.

* **`.active`** – The currently viewed item in any navigation.


![Active states in navigation](/img/naming_navigation2.png)


### Content

* **`.main`** – The purpose of the page, whatever the most important content is
* **`aside.primary`** – Any auxiliary content or related info
* **`.intro`** – Introductory content styled for visual emphasis


![Content naming conventions](/img/naming_content.png)

For a more complete list of naming conventions, see **[Imarc Boilerplate structure](http://imarc.github.com/boilerplate/structure)**
for detailed layout naming conventions.

### CSS Principals

Engineers should strive to make lean, modular classes that can be easily adapted
to different sections and pages. **If you find yourself copying entire blocks of declarations from one selector to another, you are likely doing it wrong**.

Consider two callouts used on two different pages: a landing page and a
members page.

![Landing page call to action](/img/cta-landing.png)

![Members page call to action](/img/cta-members.png)

Knowing we will utilize callouts on multiple pages, it’s
important to find properties they share and start with some base styles. These
would probably live in our stylesheet’s **Layout** section

    .callout {
        border-radius: 4px;
        font-weight: 300;
        margin-bottom: 3em;
        margin-top: 2em;
        padding: 1em;
    }
    .callout .button {
        background-color: pink;
        border-radius: 2px;
        padding: 0.4em;
        text-transform: uppercase;
    }

Based on the knowledge we have from our creative mockups, we feel confident with
these base styles. Any visual changes for callouts should be added on to these
base styles:

    .callout.dense {
        font-weight: 600;
        margin-top: 0;
    }
    .callout.dense .button {
        background-color: pink;
        float: right;
    }

You might wonder why we didn’t target our callouts via a `body#members .callout`
selector. It would not necessarily be a bad way to proceed. But thinking in a
modular way, what if the client also wanted to use this `.dense` styled
callout on special Guest pages? We would find ourself copying and pasting rules
in more than one place.

#### Use Only Class Selectors

To avoid CSS specificity issues, use only class selectors when marking up HTML.
The exceptions to this rule are: anchors, form label IDs, the ID that is
[placed on the `body` tag](frontend#SpecificTargeting), and instances when IDs are
more appropriate hooks for JavaScript purposes.

Classes should be lowercase, using hyphens to separate words. Ideally, classes are only one word.

Classes have the benefit of being highly reusable. By utilizing classes, we
can write leaner, more modular CSS.

#### Choose Meaningful Names

Choose names that accurately describe the content, not the visual container.
Avoid choosing presentational names e.g.(`orange-arrow`, `left-column`)

For example, `meta` is an acceptable class name while `sidebar-info` is not. The
described content will always be `meta`; it might not always be in the
context of a sidebar.

* Meaningful class names might be: `main`, `aside`, `record-detail`.
* Bad CSS classes would be: `left_column`, `blue-callout`, `hidden`.

####

CSS Source Maps

Because our CSS is often minified, CSS source maps allows engineers to 
see where code lives in the original source file via its original line number.
source maps should always be used.

![Illustrating how sourcemaps expose line numbers from source files](/img/souremap.png)


### Specific Targeting

When specific targeting per section or per page is needed, use class or ID
on the body tag. Use the ID for a single page. Use the class for styles that
are common within an entire section.

**ID use case**: Headlines must use a font-weight: 700; on the MacBook Pro page to
align with marketing materials.

**Class use case**: Buttons need to be silver for all pages within the Products section

    <body class="products" id="macbook-pro">


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
        </fieldset>
    </form>


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


## Media

### Video

When clients host videos on major video providers like YouTube and Vimeo, utilize those providers’ embed codes to display
the videos on our sites. Wrap these embed codes in an `.embed` div with the associated CSS rules to allow for a responsive
implementation:

    .embed {
        clear: both;
        height: 0;
        margin-bottom: 2em;
        padding-bottom: 56.25%;
        position: relative;
    }

    .embed iframe {
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: 1;
    }

#### Background Video

Sometimes, a video will auto-play (without audio) behind HTML content. This is common in a site’s “hero” area. Create and export `.mp4` and `.webm` video files. Imarc typically uses <a href="http://www.adobe.com/products/aftereffects.html">Adobe After Effects</a> for editing and <a href="https://handbrake.fr/">Handbrake</a> for optimization. Here is some HTML/CSS for implementing a responsive backround video. Note that we use padding on the `video`’s `::before` pseudo element to achieve our desired aspect ratio.

    <div class="hero">
    <video autoplay="autoplay" loop="loop" poster="video-placeholder.jpg">
        <source src="video.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
        <source src="video.webm" type='video/webm; codecs="vp8, vorbis"' />
    </video>
    </div>

    .hero video {
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: 1;
    }
    .hero::before {
        content: "";
        display: block;
        padding-top: 33.333%;
    }

### Image Compression

Whenever you cut up a website, you should use image compression software to crunch the images. Regular compression can greatly reduce the weight of the site. [ImageOptim](https://imageoptim.com/) comes highly recommended among the Imarc team.
Always compress your images manually or via an automated task if you’re using a task runner.

### Favicons

Use 32x32 PNG files for favicons:

    <link rel="shortcut icon" href="/img/icons/favicon.png" type="image/x-icon" />

### Touch Icons

iOS and Android devices both support touch icons:

    <link rel="apple-touch-icon" href="/img/icons/touch-icon.png">

Your touch icons should be a PNG at 192x192. It’s possible to specify
different sizes for different devices, but using a single high
resolution touch icon is the easiest way to ensure the highest
quality icon. For further reading, see the [iOS Developer Library](http://developer.apple.com/library/ios/#DOCUMENTATION/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html).

### Safari pinned icon

With Safari 9 (OSX El Capitan), Apple has introduced the ability to control the icon on a pinned tab.
Use a 256x256 SVG file for this – setting your icon to black. To set a color for the icon, use the color attribute.

    <link rel="mask-icon" href="/img/icons/pinned-icon.svg" color="#990000">


## Browser Support

The following **philosophy** is paraphrased from our standard proposal language.

* We produce semantic, HTML5-compliant markup, CSS, and scripts.
* We believe users should be able to consume as much visual and interactive richness as their browser can support.
* We test against a specific whitelist of mainstream desktop and mobile browsers.
* We ensure our sites function correctly and look as good as possible on these browsers.
* We recognize that not every browser functions in the same way and requiring an identical experience imposes false limitations on users with modern more capable browsers.
* We do not require an *identical experience*. Instead we strive for an *optimal experience* for each user's environment.
* We recognize that some browsers are incapable of properly rendering standards compliant code. We do not code to support these browsers unless explicitly requested and specified for the poject.

### Desktop Browser Support

<table>
	<tr>
		<th>Browser/Version</th>
		<th>Mac</th>
		<th>Windows</th>
	</tr>
	<tr>
		<td>Chrome (stable)</td>
		<td class="supported" colspan="2">yes</td>
	</tr>
	<tr>
		<td>Firefox (stable)</td>
		<td class="supported" colspan="2">yes</td>
	</tr>
	<tr>
		<td>Internet Explorer 11.0</td>
		<td></td>
		<td class="supported">yes</td>
	</tr>
	<tr>
		<td>Microsoft Edge (stable)</td>
		<td></td>
		<td class="supported">yes</td>
	</tr>
	<tr>
		<td>Safari 10</td>
		<td class="supported">yes</td>
		<td></td>
	</tr>
</table>

As of October 2016, the definitive list includes Chrome and Firefox (Mac &
Windows), IE 11, Edge, Mac Safari 10, iOS Safari 9, Android Browser (Android
4.1), and Android Chrome (Android 4.2–4.4).

By default we do not test on IE 6–10. However individual projects may require
browser support beyond our defaults. In these cases the additional support will
be specified in the proposal and strategy documents.

One case where this is of particular concern is when a large group of potential
site users will be using Windows XP or Vista. These users are unable to upgrade
to current versions of IE, so we should be mindful of the issues they might
face.

### Mobile Browser Support

<table>
	<tr>
		<th>Platform/OS</th>
		<th>Browser</th>
		<th>Target Devices</th>
	</tr>
	<tr>
		<td>iOS 9</td>
		<td>Safari 9</td>
		<td>4"+ screens, iPads</td>
	</tr>
	<tr>
		<td>iOS 10</td>
		<td>Safari 10</td>
		<td>4"+ screens, iPads</td>
	</tr>
	<tr>
		<td>Android 4.4–current</td>
		<td>Chrome</td>
		<td>4"+ handsets, 7–10" tablets</td>
	</tr>
</table>

By default we do not test on Blackberry or Windows Phone devices. However, individual projects may require browser support beyond our defaults. In these cases the additional support will be specified in the proposal and strategy documents.

Imarc employees who have access to our wiki can read more about our policies in the [Browser Support](http://wiki.imarc.net/Browser_Support) article.

### Internet Explorer styles

Some older versions of Internet Explorer need dedicated CSS rules in order to achieve proper design and functionality. You can target previous versions of Internet Explorer using conditional comments. Place these targeted styles in a dedicated CSS file (e.g. lt_ie9.css). If your Internet Explorer CSS changes styles are minimal, place them in the project’s main CSS file.

	<!--[if lt IE 9]><html class="lt-ie9" lang="en"><![endif]-->
	<!--[if gte IE 9]><!--><html lang="en"><!--<![endif]-->

Note that conditional comments are deprecated in IE10+.

## Accessibility

Use the Baseline Checklist below to ensure an acceptable level of accessibility. For clients who desire an extra level of accessibility, use the Advanced Checklist.

### ARIA Landmark Roles

ARIA landmark roles allow ease of navigation for non-sighted users. Screenreaders can traverse areas of a website by their respective landmark role, allowing users to skip over regions that are repeated on every page. Imarc takes advantage of five roles:
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

	<nav aria-label="utility navigation" class="utility" role="navigation">

	<nav aria-label="primary navigation" class="primary" role="navigation">

	<nav aria-label="secondary navigation" class="secondary" role="navigation">

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
		Ensure all links work and none are set to href=”#”
	</li>
	<li>
		JavaScript adds a behavior layer but adheres to progressive advancement, graceful degradation practices. Users without JavaScript
        can view all website content.
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
		Images should always have an alt attribute, where its value conveys the same thing that is communicated to a sighted user. Decorative images that provide no important meaning to non-sighted users should utilize an empty alt value.
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


## Structured Data Markup

To provide the best content possible for users, search engines and social media platforms try to infer information from the markup on a website. Crawlers aren't always 100% accurate. To remove variance from these crawlers and improve SEO, you can define data explicitly with [Schema.org](http://schema.org).

 Content that will be shared heavily on social media is recommended to use Schema.org and [Open Graph Protocol](http://ogp.me/). The Open Graph Protocol enables any web page to become a rich object in a social graph.

### Schema.org

Schema.org is a collaborative, community activity with a mission to create, maintain, and promote schemas for structured data on the Internet, on web pages, in email messages, and beyond. Schema.org is sponsored by Google, Microsoft, Yahoo and Yandex.

#### Schema.org Example

**Movie Type Markup Example**

	<!-- Simplified version found on IMDb -->
	<div itemscope itemtype="http://schema.org/Movie">
		<h1 class="" itemprop="name">Frozen 2013 - IMDb</h1>
		<a href="http://pro.imdb.com/title/tt2294629/companycredits?rf=cons_tt_cocred_tt&ref_=cons_tt_cocred_tt" itemprop='url'>
		<div itemprop="description">
			When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister, Anna, teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition.
		</div>
		<div itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating">
            <strong title="7.6 based on 405,502 user ratings"><span itemprop="ratingValue">7.6</span></strong><span class="grey">/</span><span class="grey" itemprop="bestRating">10</span>
            <a href="/title/tt2294629/ratings?ref_=tt_ov_rt"><span itemprop="ratingCount">405,502</span></a>
            <span itemprop="reviewCount">893 user</span> <span itemprop="reviewCount">405 critic</span>
		</div>
	</div>


An example of what kind of data that is being extracted by crawlers from content that has proper markup.

![Extracted Data](img/structured-data-extracted.png)

If you want content to appear as rich snippets on major search engines such as this.

![Rich Snippet](img/structured-data-rich-snippet.png)

It is recommended that you use structured data markup on these types of content.

<div class="columns">
    <div>
        <p>Google Rich Snippet Support</p>
        <ul>
            <li>Product</li>
            <li>Recipe</li>
            <li>Review</li>
            <li>Event</li>
            <li>Software Applications</li>
            <li>Video</li>
            <li>News Articles</li>
        </ul>
    </div>
    <hr/>
    <div>
        <p>Bing Rich Snippet Support</p>
        <ul>
            <li>Breadcrumbs</li>
            <li>Businesses and Organizations</li>
            <li>Events</li>
            <li>People</li>
            <li>Products and Offers</li>
            <li>Recipes</li>
            <li>Reviews</li>
            <li>Reviews (aggregated)</li>
        </ul>
    </div>
</div>

**[View a complete list of Schema.org content types and example markup.](http://schema.org/docs/full.html)**

### Open Graph

Sharing content via social media can yield unexpected results related to its appearance on a time line.

For example, Facebook pulls what it deems relevant to a shared item – title, description, photo, etc. For a supplementary thumbnail, Facebook pulls the first `img` it can find in the site. If this is unsatisfactory, you can control the thumbnail image to be shared by using the following line in the web site's `head`:

	<link rel="image_src" href="/img/site/logo_acme.png" />

#### Open Graph Example

**Blog Post Markup Example**

	<head>
	...
	    <!-- Facebook Specific-->
		<meta property="fb:admins" content="100004926167588">
		<meta name="article:author" content="https://www.facebook.com/ImarcAgency">
		<!-- Twitter Specific -->
		<meta name="twitter:site" content="@ImarcAgency">
		<meta name="twitter:title" content="Responsive Design or Mobile-Specific: Which Option is Best for You? | Imarc Web Design: Boston + Santa Cruz">
		<meta name="twitter:card" content="summary">
		<meta name="twitter:image" content="http://creative.imarc.net/sup/img/i_alone_color.jpg">
		<!-- General -->
		<meta property="og:type" content="Responsive Design or Mobile-Specific: Which Option is Best for You?">
		<meta property="og:description" content=" Our clients are always asking, “Does my site need to be responsive?” In a word, yes. But, there are options to consider when it comes to delivering a mobile optimized experience. There is no “one size fits all approach,” and the direction your…">
		<meta property="og:site_name" content="Imarc Digital Agency">
		<meta property="og:url" content="https://www.imarc.com/blog/responsive_design_mobile_specific_website">
	</head>

**Facebook Rich Object**

![Screenshot displaying how structured blog data is displayed on Facebook](/img/structured-data-facebook.png)

<hr>

**Twitter Rich Object**

![Screenshot displaying how structured blog data is displayed on Twitter](/img/structured-data-twitter.png)

<hr>

**Linkedin Rich Object**

![Screenshot displaying how structured blog data is displayed on LinkedIn](/img/structured-data-linkedin.png)

<hr>

**[View more Open Graph example and data types](http://ogp.me/#metadata)**

#### Structured Data Markup Testing Tools
- [Schema.org Testing Tool](https://developers.google.com/structured-data/testing-tool/)
- [Schema.org Markup Helper](https://www.google.com/webmasters/markup-helper/u/0/)
- [Open Graph Protocol Testing Tool](http://iframely.com/debug)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug)
- [Twitter Card Validator](https://dev.twitter.com/docs/cards/validation/validator)


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

Another option Imarc has discussed is employing JavaScript to solve iPhone’s
re-orientation issue.


### Media Queries

Meida queries is a CSS3 technology allowing scope limitation of styles based on a
feature such as width, aspect ratio, pixel density, and more. Imarc primarily
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

