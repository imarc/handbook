---
title: Front-end
lead: All things front-end development such as Sass, typography basics, accessibility, and more.
layout: default
---

## Boilerplate
**[Boilerplate](http://imarc.github.io/boilerplate)** is a great
starting point for new projects. Authored by Imarc, Boilerplate contains our standard HTML and SCSS.

## npm

Front-end dependencies are managed by [npm](https://www.npmjs.com). Learn more by reading their [getting started documentation](https://docs.npmjs.com/). By default, npm installs all dependencies into a `node_modules` directory. See installed packages and relevant scripts on the project’s `package.json` file.

* Project and library code should never have `node_modules` committed.
* **Project** code SHOULD commit the `package-lock.json` file.
* **Library** code SHOULD NOT commit the `package-lock.json` file.

## Module Bundling / Asset Compilation
Imarc uses [Laravel Mix](https://github.com/JeffreyWay/laravel-mix) for both JavaScript module bundling and Asset compilation (Sass). Reference Boilerplate for an example of a [Laravel Mix configuration file](https://github.com/imarc/boilerplate-components/blob/next/webpack.mix.js).

## Doctype, Validation, Meta

### Doctype
Use the [HTML5](https://developer.mozilla.org/en-US/docs/HTML/HTML5) doctype.

    <!DOCTYPE html>

### Validation
A concerted effort should be made to ensure your HTML and CSS validate. Markup should
be semantic and well-formed and contain all required attributes. Elements should occur
within the proper context of the DOCTYPE.

* [W3C HTML Markup Validator](http://validator.w3.org)
* [W3C CSS Validator](http://jigsaw.w3.org/css-validator)

#### Titles

Titles should contain descriptive information that concisely describes the current
page. In the case of nested pages, information in the title tag should be ordered from
most specific to least specific. A standard delimiter such as `–` or `|` should be employed
to indicate distinct content levels.

	<title>Support - Contact | Imarc Web Design: Boston + Silicon Valley</title>

This shows that I’m on the page called *Support*. That page lives in a section called *Contact*
which resides in a website for *Imarc*. Titles are adjusted to meet SEO needs.

The homepage should include the site or company name, followed by a simple description
of the entire website.

	<title>Imarc | Web Design and Digital Agency in Boston + Silicon Valley</title>

#### Description

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

## Typography

### Font Size

Users are able to edit their browser’s default font-size. To best work with this, it is ideal to **not set** a default font-size on the `<html>` or `<body>` selectors. Let the browser’s default size (16px) serve as a baseline. From here, we can control font-size *proportion* with relative sizing units `rem` or `em`. Avoid using the `px` unit.

“The design I was given has a larger default font-size than 16px. What do I do?”

If you need to, use a percentage unit on the your `:root` or `<html>` selector’s `font-size` property. In the case of 20px default font-size:

    html {
        font-size: 125%; // (125/100) * 16px = 20px
    }

Your project’s root font-size would now be 20px. 1.5rem would be 30px.

### Font Stacks

Specify a font family stack on `<body>`.

A default **serif** font stack:

    font-family: Constantia, Lucida, Georgia, serif;

A default **sans-serif** font stack:

    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;

To help prevent adjustments of font-size after iOS device orientation changes, use `-webkit-text-size-adjust: 100%`.

    body {
        -webkit-text-size-adjust: 100%;
    }

Try not to set `font-size` on selectors that should be rendered at the project’s default font-size (e.g. `<p>`, `<li>`, `<div>`, `<td>`, `<a>`). Rather, you should style to a class – modifying font-size on a `.card__lead` class that is hung on a `<p>` selector is better).

### Line Height

`line-height` should use a unitless value (e.g. `line-height: 1.5`)

### Web Fonts

Imarc leans on web font services such as [Google Fonts](https://fonts.google.com), [Typekit](http://www.typekit.com), [Fonts.com](http://www.fonts.com/). See your project manager for guidance if your desired web font costs money.

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

While not requested often, some websites require a print stylesheet. Imarc has a [sane starting point for print styles](https://github.com/imarc/boilerplate-components/blob/master/resources/styles/base.scss#L295-L334).

## Coding Style

Consistent coding style for HTML and CSS is vital because multiple people collaborate on a site’s markup and style.

### Character Encoding

Use UTF-8 as the character encoding. Set your editor to use UTF-8 for
all aspects of the web application.

HTML pages should begin with by setting `UTF-8` in the content-type meta tag.

	<meta charset="UTF-8" />

Since [UTF-8](http://en.wikipedia.org/wiki/UTF-8) is enabled throughout the
front-end HTML and backend databases, use real UTF-8 characters instead of HTML
entities.

Use real UTF-8 characters instead of HTML entities. For example, use `»`, instead of typing out its `&raquo;` entity. The only characters that need encoding are `&amp;`, `&lt;`, and `&gt;`, `&quot;`. This also applies to CSS. Doing something like `content: '»'` is better than `content: '\bb'.

    <p>
        Separation of content – better with an en-dash.
        Imarc’s motto: “Use curly quotes”
        <a href="#"> Learn More »</a>
    </p>

### CSS

#### ABEM
Many Imarc projects use an offshoot of Block Element Modifier called [ABEM](https://css-tricks.com/abem-useful-adaptation-bem/). It is influenced from [Atomic Design](https://atomicdesign.bradfrost.com/) principals. This creates a methodology for HTML class naming and Sass directory structure.

Check out the [Sass folder structure description on Imarc’s boilerplate-components](https://imarc.github.io/boilerplate-components/pattern-library/).

#### Layout

Use [Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox) or [Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) for page layouts. Do not use floats or tables.


#### General CSS Formatting

    .heading {
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
		Each property has a space between the colon and value ends with a semi-colon
	</li>
	<li>
		The closing brace should be on its own line at the same indentation as the selector
	</li>
</ul>


#### Use Only Class Selectors

To avoid CSS specificity issues, use only class selectors.
The exceptions to this rule are: anchors, form label IDs, JavaScript hook requirements.

## Forms

All elements inside a `form` element should be placed within a `fieldset` element. A `fieldset` is used to group related form elements. Use a heading tag instead of the `legend` element to title fieldsets.

The `action` attribute is required on all forms, and should have a blank value by default.

### Form Element Markup

Form inputs and labels are grouped together within a div. The containing div is named after the form input type.  For example, a `text` input is contained inside `<div class="text">` and a `file` input is contained inside `<div class="file">`.

Input elements should have an associated label element.

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

Use YouTube/Vimeo embed codes to display the videos. For responsive videos, wrap the embed code in a parent and apply appropriate CSS. Note that `calc(9 / 16 * 100%)` below corresponds to a 16:9 aspect ratio. Modify this as needed.

    .embed {
        position: relative;
        width: 100%;
    }

    .embed::before {
        content: '';
        display: block;
        padding-bottom: calc(9 / 16 * 100%);
    }

    .embed iframe {
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
    }

Tip: with a preprocesser like Sass, you don’t need `calc()`, and `padding-top: 9 / 16 * 100%` would suffice.

#### Background Video

Sometimes, a video will auto-play (without audio) behind HTML content. This is common in a site’s
“hero” area. Create and export `.mp4` and `.webm` video files. Imarc typically uses
<a href="http://www.adobe.com/products/aftereffects.html">Adobe After Effects</a> for editing
and <a href="https://handbrake.fr/">Handbrake</a> for optimization. Here is some HTML/CSS for
implementing a responsive backround video.

    <div class="hero">
        <video autoplay loop="loop" muted poster="video-placeholder.jpg">
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
        content: '';
        display: block;
        padding-top: calc(3 / 9 * 100%);
    }

### Image Compression

Whenever you save imagery for a web page, use image compression software on assets. Compression can reduce the weight of the site. [ImageOptim](https://imageoptim.com/) is recommended by the Imarc team.

### SVG

SVG (Scalable Vector Graphics) is an XML-based image format that is vector-based. It allows for
infinite scaling without sacrificing image quality.

#### Implementation

Inline SVGs can block rendering and will not cache. As a result, using an `.svg` file within an
`<img>` tag is a solid implementation choice. However, if the interface calls for animation and/or
color variations, “inlining” the SVG is acceptable. To help with document readability, include the
file via PHP/etc.

SVG code can be exported directly from Adobe Illustrator via
*File > Export > Export As…*

Remove any `doctype`, `height`, `width`, `title` and `style` information from the SVG code. Make sure your code
takes advantage of the `viewBox` attribute.

    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 61.25 61.25">
        <g>
            <g class="c">
                <path class="circle" d="M30.63,61.25A30.63,30.63,0,0,1,30.63,0C47.8,0,61.25,13,61.25,29.62c0,17.14-14,31.63-30.62,31.63m0-59a28.38,28.38,0,0,0,0,56.75C46,59,59,45.55,59,29.62,59,14.27,46.54,2.25,30.63,2.25"/>
            </g>
            <polygon class="x" points="17.8 29.4 29.34 29.4 31.97 29.4 43.45 29.4 43.45 31.85 31.97 31.85 29.34 31.85 17.8 31.85 17.8 29.4"/>
            <polygon class="y" points="29.4 43.45 29.4 31.91 29.4 29.28 29.4 17.8 31.85 17.8 31.85 29.28 31.85 31.91 31.85 43.45 29.4 43.45"/>
        </g>
    </svg>

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

## Iconography

### Font Awesome

[Font Awesome](https://fontawesome.com) is an iconography framework used on many Imarc projects.

Imarc owns a <a href="https://fontawesome.com/pro">professional license</a> and you can find sign-in credentials in [LastPass](https://lastpass.com).

#### Font Awesome Implementation
There are a couple ways to get Font Awesome going on your project. You can manually include supplied
source files or leverage a <a href="https://fontawesome.com/how-to-use/use-with-node-js">private npm
package</a>.

**Imarc-recommended implementation**
* Use a [Font Awesome kit](https://fontawesome.com/kits)
* Implementation via NPM is fine, but using the professional tier can require all team members to possess the same `.npmrc` file in order to pull down gated assets from NPM properly. See a lead engineer for help.

<i class="far fa-hand-point-right"></i> <a href="http://imarc.github.io/boilerplate/#Iconography">Visit Boilerplate</a> to see Font Awesome v5 in the wild.

### SVG icons

Tabler and Feather are two popular SVG icon sets.

** Content to be written here regarding best practices, etc**.

## Browser Support

The following **philosophy** is paraphrased from our standard proposal language.

* We produce semantic, HTML5-compliant markup, CSS, and scripts.
* We believe users should be able to consume as much visual and interactive richness as their browser can support.
* We test against a specific set of mainstream desktop and mobile browsers.
* We ensure our sites function correctly and look as good as possible on these browsers.
* We recognize that not every browser functions in the same way and requiring an identical
experience imposes false limitations on users with modern, more capable browsers.
* We do not require an *identical experience*. Instead we strive for an *optimal experience* for
each user’s environment.

### Desktop Browser Support

<div class="table table--responsive">
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
            <td>Microsoft Edge (stable)</td>
            <td></td>
            <td class="supported">yes</td>
        </tr>
        <tr>
            <td>Safari 11</td>
            <td class="supported">yes</td>
            <td></td>
        </tr>
    </table>
</div>

_** We recognize that some browsers are incapable of properly rendering standards compliant code. We do not code to support these browsers unless explicitly requested and specified for the project (IE11, for example)._


### Mobile Browser Support

<div class="table table--responsive">
    <table>
        <tr>
            <th>Platform/OS</th>
            <th>Browser</th>
            <th>Target Devices</th>
        </tr>
        <tr>
            <td>iOS 10</td>
            <td>Safari 10</td>
            <td>4"+ screens, iPads</td>
        </tr>
        <tr>
            <td>Android 6.0–current</td>
            <td>Chrome</td>
            <td>4"+ handsets, 7–10" tablets</td>
        </tr>
    </table>
</div>

Individual projects may require browser support beyond our defaults. In these cases the additional
support will be specified in the proposal and strategy documents.

Imarc employees who have access to our wiki can read more about our policies in the [Browser Support](http://wiki.imarc.net/Browser_Support) article.

## Analytics, Marketing, and Plug-ins

Many clients use external scripts such as Google Analytics, HubSpot, Marketo. We should stop those scripts gathering data in development or staging environments.

While clients themselves may apply filters to correct this in the settings of those scripts, we can’t count on this always being the case. Wrapping any marketing scripts in a conditional that differentiates between enviroments is the most ideal solution.

The way of detecting whether the enviroment is production varies from project to project. Consult the project's lead engineer about best way to do this.

## Accessibility

Use this checklist below to ensure an acceptable level of accessibility.

### Miscellaneous

* Use open web standards such as HTML, CSS, JavaScript
* Vet HTML and CSS using their respective W3C validators ([HTML](http://validator.w3.org) / [CSS](http://jigsaw.w3.org/css-validator))
* Include visually-hidden skip navigation that is operable via keyboard focus
* Focus styles should be present and visible for keyboard operability
* Images should always have an `alt` attribute , where its value conveys the same thing that is communicated to a sighted user. Decorative images that provide no important meaning to non-sighted users should utilize an empty `alt=""` value. This ensures screen readers omit them from announcements.
* Timed responses are properly indicated to users.
* All form fields can be activated, operated and submitted using a keyboard.
* Users can control galleries and modal windows using a keyboard.

### Navigations
These points are taken from [W3C’s Accessible Menus Tutorial](https://www.w3.org/WAI/tutorials/menus) .
* Use informed markup. Use informed labeling for the navigation itself along with current nav items. Labeling could be done via visually-hidden text or WAI-ARIA labels.
* Navigations should have proper states (active, hover, focus, current, visited).
* Dropdown navigations should be mouse/touch/keyboard operable and should leverage WAI-ARIA markup.

### Web Forms

* Inputs always have associated labels
* Inputs should use an associated type attribute (e.g. `search`, `tel`, `email`, etc)
* Make sure required fields are visually indicated as such (e.g. an asterisk <strong>*</strong>)
* All form fields can be operated using a keyboard, with apparent focus styles.
* Validation messages show all errors at once instead of progressively showing more errors
* Validation messages use same field names as form and in the same order

### Color

* Color combinations should be in compliance with [WCAG 2.0 minimum contrast](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html). Use a <a href="https://contrast-grid.eightshapes.com">color contrast checker</a> to ensure your ratio meets the standard.
* Important information should not be conveyed with color alone. Use other visual identifiers like font-weight, sizing, shapes, special characters.

## Mobile Optimization

### Viewport
On mobile-specific sites, set the viewport to the width of the device:

	<meta name="viewport" content="width=device-width, initial-scale=1">

`initial-scale=1` ensures smartphones retain the same zoom level during orientation change (e.g. portrait to landscape).
