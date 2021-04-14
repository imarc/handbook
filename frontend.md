---
title: Front-end
lead: All things front-end development such as Sass, typography basics, accessibility, and more.
layout: default
icon: _icon-frontend.html
---

## Boilerplate
Our [Boilerplate Components](https://github.com/imarc/boilerplate-components/tree/5.0.0-beta.3) is a great starting point for new projects. Authored by Imarc, Boilerplate Components contains our standard HTML, Sass, and JavaScript.

## npm

Front-end dependencies are managed by [npm](https://www.npmjs.com). Learn more by reading their [getting started documentation](https://docs.npmjs.com/). By default, npm installs all dependencies into a `node_modules` directory. See installed packages and relevant scripts in a project’s root-level `package.json` file.

* Project and library code should never have `node_modules` committed.
* **Project** code SHOULD commit the `package-lock.json` file.
* **Library** code SHOULD NOT commit the `package-lock.json` file.

## Module bundling / asset compilation

[Laravel Mix](https://github.com/JeffreyWay/laravel-mix) is thin layer on top of Webpack that makes things simple. Imarc uses Laravel Mix for JavaScript module bundling and asset compilation (Sass, images). Reference Boilerplate Components for an example of a [Laravel Mix configuration file](https://github.com/imarc/boilerplate-components/blob/5.0.0-beta.3/webpack.mix.js). Note that Laravel Mix itself is included in projects [as a node package](https://www.npmjs.com/package/laravel-mix).

## Code editors

Popular code editors used at Imarc include: [Visual Studio Code](https://code.visualstudio.com), [PhpStorm](https://www.jetbrains.com/phpstorm/), and [Sublime Text](https://www.sublimetext.com/).

### Code linting

Code linting is automatic code-checking that reveals errors and/or stylistic issues. It helps maintain uniform code standards. Two popular linting tools we leverage are [ESLint](https://eslint.org/) for JavaScript and [Stylelint](https://stylelint.io/) for CSS. These are often integrated via node packages, allowing an engineer lint code via an npm script. However, dedicated code editor extensions/plugins can enhance linting even further. 

#### ESLint

TBD.

#### Stylelint

TBD.

### Must-have extensions

#### Emmet

[Emmet](https://www.emmet.io/) helps engineers write HTML faster via shorthand. Visual Studio Code includes Emmet by default. If your code editor does not have Emmet, get it and use it. Learn to use Emmet via its [documentation](https://docs.emmet.io/).

<img alt="" class="lazyload" data-src="/img/gif-emmet.gif">

## Doctype and metadata

### Doctype
Use a proper [doctype](https://developer.mozilla.org/en-US/docs/Glossary/Doctype) to ensure a browser renders to relevant specifications.

    <!DOCTYPE html>

### Metadata

#### Titles

Titles should contain descriptive information that concisely describes the current
page. Titles appear on search engine result pages and are weighted in Search Engine Optimization (SEO), but do not "keyword-stuff" titles. An example of a well-written title for a fictional Imarc blog post might be:

	<title>Using flexbox to lay out a Leadership design | Imarc: Boston-based Web Agency</title>

Note the `|` delimiter. This is a common pattern Imarc uses to append general website information if space allows (keep titles under 60 characters).

#### Description

Meta descriptions display under titles on search engine result pages (SERPs). A quality meta description can help in higher clickthroughs. Ideally, all pages include a unique meta description – a concise, human-readable description of that page’s contents. Do not duplicate meta descriptions from other pages. Keep them under 160 characters.

	<meta name="description" content="Our blog features the latest in web design, development, user experience and marketing." />

If no meta description exists, Google will create its own from on-page content.

[Tips for writing meta descriptions by Google](https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets#why-the-search-result-title-might-differ-from-the-pages-title-tag)

#### Favicon / touch icons

Use 32x32 PNG files for favicons:

    <link rel="shortcut icon" href="/img/icons/favicon.png" type="image/x-icon">

iOS and Android devices both support touch icons. A touch icon is what will appear on a user's smartphone if they save a webpage as a bookmark to their homescreen.

    <link rel="apple-touch-icon" href="/img/icons/touch-icon.png">

Your touch icons should be a PNG at 192x192. It’s possible to specify
different sizes for different devices, but using a single high
resolution touch icon is the easiest way to ensure the highest
quality icon. For further reading, see the [iOS Developer Library](http://developer.apple.com/library/ios/#DOCUMENTATION/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html).

#### Safari pinned icon

With Safari 9 (OSX El Capitan), Apple has introduced the ability to control the icon on a pinned tab.
Use a 256x256 SVG file for this – setting your icon to black. To set a color for the icon, use the color attribute.

    <link rel="mask-icon" href="/img/icons/pinned-icon.svg" color="#990000">

#### Character encoding

Use UTF-8 as the character encoding. Set your editor to use UTF-8 for
all aspects of the web application.

HTML pages should begin with by setting `UTF-8` in the content-type meta tag.

	<meta charset="UTF-8" />

Since [UTF-8](http://en.wikipedia.org/wiki/UTF-8) is enabled throughout the
front-end HTML and backend databases, use real UTF-8 characters instead of HTML
entities.

Use real UTF-8 characters instead of HTML entities. For example, use `»`, instead of typing out its `&raquo;` entity. The only characters that need encoding are `&amp;`, `&lt;`, and `&gt;`, `&quot;`. This also applies to CSS. Doing something like `content: '»'` is better than `content: '\bb'.

## Typography

### Fonts

#### Font-size

Because users are able to set their preferred font-size in their web browser, **do not set a default font-size on the** `<html>` **or** `<body>` **selectors**. Let the browser’s default size (usually 16px) serve as a baseline. From here, we can control font-size *proportion* with relative sizing units `rem` or `em`. Avoid using the `px` unit.

**“The design I was given has a larger default font-size than 16px. What do I do?”**

In this case, use a percentage on `<html>`’s `font-size` property. In the case of 20px default font-size:

    html {
        font-size: 125%; // (125/100) * 16px = 20px
    }

Your project’s root font-size would now be 20px. 1.5rem would be 30px.

#### Stacks

Specify a font stack on the `<body>` selector.

**serif** font stack example:

    font-family: Constantia, Lucida, Georgia, serif;

**sans-serif** font stack example:

    font-family: "Helvetica Neue", Arial, sans-serif;

To help prevent adjustments of font-size after iOS device orientation changes, use `-webkit-text-size-adjust: 100%`.

    body {
        -webkit-text-size-adjust: 100%;
    }

Try not to set `font-size` on selectors that should be rendered at the project’s default font-size (e.g. `<p>`, `<li>`, `<div>`, `<td>`, `<a>`). Rather, you should style to a class – modifying font-size on a `.card__lead` class that is hung on a `<p>` selector is better).

#### Web fonts

Imarc often uses web font services such as [Google Fonts](https://fonts.google.com), [Typekit](http://www.typekit.com), [Fonts.com](http://www.fonts.com/). See your project manager for guidance if your desired web font costs money.

#### Line height

`line-height` should always use a unitless value (e.g. `line-height: 1.5`)

### Print styles

While not requested often, some websites require a print stylesheet. Imarc has a [sane starting point for print styles](https://github.com/imarc/boilerplate-components/blob/master/resources/styles/base.scss#L295-L334).

## CSS

Consistent coding style for CSS is vital as multiple people collaborate on site buildouts and maintenance.

### Class naming (ABEM)

Many Imarc projects use an offshoot of Block Element Modifier called [ABEM](https://css-tricks.com/abem-useful-adaptation-bem/). It is influenced from [Atomic Design](https://atomicdesign.bradfrost.com/) principals. This creates a methodology for HTML class naming and Sass directory structure.

Our preferred class naming format is:

    blockName__elementName -modifierName

#### Real-world example

**HTML**

    <div class="hero">
        <div class="hero__body">
            <h1 class="hero__heading">
                About Us
            </h1>
            <div class="hero__action -seasonalOffer">
                <a class="button hero__button" href="/">Learn More</a>
            </div>
        </div>
    </div>

Note how `button` and `hero__button` are chained. This is known as a [mix](https://en.bem.info/methodology/key-concepts/#mix) in BEM – two BEM entities existing on the same DOM node. `button` is considered an *atom* in Atomic Design and `hero__button` is an element of the `hero` block.

**Sass**

    .hero {
        &__body {
            padding: 1rem;
        }

        &__heading {
            font-size: 2.5rem;
        }

        &__action {
            font-size: 2.5rem;

            &.-seasonalOffer {
                …
            }
        }

        &__button {
            border-radius: 0.25rem;
        }
    }

Check out the [Sass folder structure description on Imarc’s boilerplate-components](https://imarc.github.io/boilerplate-components/pattern-library/).

#### Layout

Use [Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox) or [Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) for page layouts. Do not use floats or tables.


#### General CSS Formatting

    .hero {
        background-color: #FFF;
        color: #333;
        padding: 2rem;
    }

- Selector(s) lives on its own line(s) followed by the opening brace
- Each declaration lives on its own indented line
- Each property has a space between the colon and value ends with a semi-colon
- The closing brace should be on its own line at the same indentation as the selector

#### Use Only Class Selectors

Style to class selectors only and not IDs or selectors

`.hero__heading` **not** `#hero__heading` or `.hero h1`

The exceptions to this rule: anchor links, form label IDs, JavaScript hook requirements.

## Forms

All elements inside a `form` element should be placed within a `fieldset` element. A `fieldset` is used to group related form elements. Use a heading tag instead of the `legend` element to title fieldsets.

The `action` attribute is required on all forms, and should have a blank value by default.

### Form Element Markup

Form inputs and labels are grouped together within a div. The containing div is named after the form input type.  For example, a `text` input is contained inside `<div class="text">` and a `file` input is contained inside `<div class="file">`.

Input elements should have an associated label element.

Form element markup

    <form class="form" method="post">
        <fieldset class="form__fieldset">
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

#### Modifiers

* **`.-success`** – Confirmation after an action has successfully completed
* **`.-info`** – Informative message
* **`.-error`** – Notification that an action had problems
* **`.-help`** – Coaching or guidance; typically inline

Sample messaging markup. Note that chaining off `messaging` helps to avoid repeating CSS rules.

    <div class="messaging -success">
        <div class="messaging__content">
            <p>
                Congratulations! You have successfully registered.
            </p>
        </div>
    </div>

## Tables

Use tables to display tabular data such as a pricing or feature chart. Do not use tables for page layout. Make sure your tables do not only use rows and cells – take advantage of other elements to increase accessibility.

### Captions, Headers and Scope

`caption` help describe tables are are optional.

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
            </tr>
        </tbody>
    </table>

## Media

### Images

JPG format is ideal for photographic-like images. (e.g. images of people, places, things)

PNG format is ideal for flat-color graphics and/or images that require transparency.

WebP is TBD.

#### Compression

Whenever you export images, use image compression software. Compression reduces file size which in terms helps site performance. [ImageOptim](https://imageoptim.com/) is a client that is used by much of the Imarc team.

### SVG

SVG (Scalable Vector Graphics) is an XML-based image format. It allows for infinite scaling without sacrificing image quality. It is often used for logos, icons, and illustrative graphics.

#### SVG implementation tips

##### Inline vs. src

Inline SVGs can block rendering and will not cache. As a result, using an `.svg` file within an `<img>` tag is a solid implementation choice. However, if the interface calls for animation and/or stroke/fill variations, inlining an SVG is acceptable. To help with document readability, it's preferable to "include" the SVG via a PHP or Twig include statement.

##### Exporting from design programs

TBD.

### Video

We typically use vendor-provided (YouTube/Vimeo/Wistia) embed codes to display video. For responsive videos, wrap the embed code in a parent (e.g. `.embed`) and apply appropriate CSS. Note that `calc(9 / 16 * 100%)` below corresponds to a 16:9 aspect ratio. Modify this as needed.

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

Sometimes, a video will auto-play (without audio) behind HTML content. This is common in a site’s *hero* area. Create and export `.mp4` and `.webm` video files. Imarc often a video optimization tool like <a href="https://handbrake.fr/">Handbrake</a> to decrease file size as much as possible. Here is some HTML/Sass for implementing a responsive background video.

    <div class="hero">
        <video class="hero__video" autoplay loop="loop" muted poster="video-placeholder.jpg">
            <source src="video.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
            <source src="video.webm" type='video/webm; codecs="vp8, vorbis"' />
        </video>
    </div>

    .hero
        &__video {
            left: 0;
            position: absolute;
            top: 0;
            width: 100%;
            z-index: 1;
        }

        &::before {
            content: "";
            display: block;
            padding-top: calc(9 / 16 * 100%); 
            16 width
            9 height
        }
    }

`calc(9 / 16 * 100%)` would output a `padding-top: 56.25%`. This matches the popular 16:9 aspect ratio. To use a different aspect ratio, `calc(height / width * 100%)` will output the proper percentage.

### Responsive images

Responsive image techniques allow one to serve appropriately sized images for the device a site user is using. Mobile devices can download a small image, and a desktop machine can download a large version of the same image. Imarc typically uses [lazysizes](https://github.com/aFarkas/lazysizes) on projects, as it provides lazyloading among other features, and allows for cross-browser compatibility. It can be included as a [node package](https://www.npmjs.com/package/lazysizes).

## Iconography

### SVG-based icons

[Tabler](https://tablericons.com) and [Feather](https://feathericons.com) are two popular SVG icon sets.

#### Implementation tips

TBD.

### Font Awesome

[Font Awesome](https://fontawesome.com) is an iconography framework used on many Imarc projects. Note that as of 2021, we prefer using SVG icon sets. That said, Imarc owns a <a href="https://fontawesome.com/pro">professional license</a>. You can find sign-in credentials in our [LastPass](https://lastpass.com).

#### Font Awesome implementation
There are a couple ways to get Font Awesome going on your project. You can manually include supplied
source files or leverage a <a href="https://fontawesome.com/how-to-use/use-with-node-js">private node
package (npm)</a>.

**Imarc-recommended implementation**
* Implementation via npm is fine, but note that using the professional tier requires all team members to possess the same `.npmrc` file in order to pull down gated assets from npm. See a lead front-end engineer for help.
* **Deprecated**: use a [Font Awesome kit](https://fontawesome.com/kits) 

## Browser support

The following **philosophy** is paraphrased from our standard proposal language.

* We produce semantic, HTML5-compliant markup, CSS, and scripts.
* We believe users should be able to consume as much visual and interactive richness as their browser can support.
* We test against a specific set of mainstream desktop and mobile browsers.
* We ensure our sites function correctly and look as good as possible on these browsers.
* We recognize that not every browser functions in the same way and requiring an identical
experience imposes false limitations on users with modern, more capable browsers.
* We do not require an *identical experience*. Instead we strive for an *optimal experience* for
each user’s environment.

### Desktop

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

### Mobile

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

## Mobile optimization

### Viewport
On mobile-specific sites, set the viewport to the width of the device:

	<meta name="viewport" content="width=device-width, initial-scale=1">

`initial-scale=1` ensures smartphones retain the same zoom level during orientation change (e.g. portrait to landscape).
