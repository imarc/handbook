---
title: Front-end
lead: All things front-end development such as Sass, typography basics, accessibility, and more.
layout: default
icon: _icon-frontend.html
chapter: '03'
---

## Boilerplate
Our [Boilerplate Components](https://github.com/imarc/boilerplate-components/tree/5.0.0-beta.3) is a great starting point for new projects. Authored by Imarc, Boilerplate Components contains our standard HTML, Sass, and JavaScript.

## npm

Front-end dependencies are managed by [npm](https://www.npmjs.com). Learn more by reading their [getting started documentation](https://docs.npmjs.com/). By default, npm installs all dependencies into a `node_modules` directory. See installed packages and relevant scripts in a project’s root-level `package.json` file.

* **Project** and **library** code SHOULD NEVER commit `node_modules`.
* **Project** code SHOULD commit the `package-lock.json` file.
* **Library** code SHOULD NOT commit the `package-lock.json` file.

## Module bundling / asset compilation

[Laravel Mix](https://github.com/JeffreyWay/laravel-mix) is thin layer on top of Webpack that makes things simple. Imarc uses Laravel Mix for JavaScript module bundling and asset compilation (Sass, images). Reference Boilerplate Components for an example of a [Laravel Mix configuration file](https://github.com/imarc/boilerplate-components/blob/5.0.0-beta.3/webpack.mix.js). Note that Laravel Mix itself is included in projects [as a node package](https://www.npmjs.com/package/laravel-mix).

## Code editors

Popular code editors used at Imarc include: [Visual Studio Code](https://code.visualstudio.com), [PhpStorm](https://www.jetbrains.com/phpstorm/), and [Sublime Text](https://www.sublimetext.com/).

### Code linting

Code linting is automatic code-checking that reveals errors and/or stylistic issues. It helps maintain uniform code standards. Two popular linting tools we leverage are [ESLint](https://eslint.org/) for JavaScript and [Stylelint](https://stylelint.io/) for CSS. These are often integrated via node packages, allowing an engineer to lint code via an npm script. However, dedicated code editor extensions/plugins can enhance linting even further with features such as real-time feedback. 

#### ESLint

<div class="fpo">WORK IN PROGRESS</div>

#### Stylelint

<div class="fpo">WORK IN PROGRESS</div>

### Popular extensions

#### Emmet

[Emmet](https://www.emmet.io/) helps engineers write HTML faster via shorthand. Visual Studio Code includes Emmet by default. If your code editor does not have Emmet, get it and use it. Learn to use Emmet via its [documentation](https://docs.emmet.io/).

<img alt="" class="lazyload" data-src="/img/gif-emmet.gif">

#### Misc

Other often-used extensions include: [IntelliSense](https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion), [liximomo sftp](https://marketplace.visualstudio.com/items?itemName=liximomo.sftp), [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur), [Twig Language 2](https://marketplace.visualstudio.com/items?itemName=mblode.twig-language-2), [Auto Complete Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-complete-tag), [Highlight Matching Tag](https://marketplace.visualstudio.com/items?itemName=vincaslt.highlight-matching-tag)

## Doctype and metadata

### Doctype
Use a proper [doctype](https://developer.mozilla.org/en-US/docs/Glossary/Doctype) to ensure a browser renders to relevant specifications.

    <!DOCTYPE html>

### Metadata

#### Titles

Titles should contain descriptive information that concisely describes the current
page. Titles appear on search engine result pages (SERPs) and are weighted in Search Engine Optimization (SEO), but do not "keyword-stuff" titles. An example of a well-written title for a fictional Imarc blog post might be:

	<title>Use flexbox to lay out a design | Imarc: Boston Web Agency</title>

Note the `|` delimiter. This is a common pattern Imarc uses to append general website information if space allows (keep titles under 60 characters).

#### Description

Meta descriptions appear under titles on SERPs. A quality meta description can help foster higher clickthroughs. Ideally, all pages include a unique meta description – a concise, human-readable description of that page’s contents. Do not duplicate meta descriptions from other pages. Keep them under 160 characters.

	<meta name="description" content="Learning how to size columns of content with flexbox's flex-basis property help a lot when laying out a web page design." />

If no meta description exists, Google will create its own from on-page content.

[Tips for writing meta descriptions by Google](https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets#why-the-search-result-title-might-differ-from-the-pages-title-tag)

#### Favicon / touch icons

Favicons: use a 32x32 PNG file:

    <link rel="icon" href="/img/favicon.png">

Touch icons: use a 180x180 PNG file.

    <link rel="apple-touch-icon" href="/img/touch-icon.png">

iOS and Android devices both support touch icons. A touch icon is what will appear on a smartphone if a user saves a webpage to their homescreen.

**“What about the .ico file format?”** 

If you need to support old, legacy browsers, you can still use the `.ico` file format. You should host this file at the root-level, as some user agents only look at the root-level (e.g. RSS readers).

    <link rel="icon" href="/favicon.ico">

#### Character encoding

Use UTF-8 as the character encoding. Set your editor to use UTF-8 for
all aspects of the web application.

HTML pages should begin with by setting `UTF-8` in the content-type meta tag.

	<meta charset="UTF-8" />

Since [UTF-8](http://en.wikipedia.org/wiki/UTF-8) is enabled throughout the
front-end HTML and backend databases, use real UTF-8 characters instead of HTML
entities.

Use real UTF-8 characters instead of HTML entities. For example, use `»`, instead of typing out its `&raquo;` entity. The only characters that need encoding are `&amp;`, `&lt;`, and `&gt;`, `&quot;`. This also applies to CSS. Doing something like `content: '»'` is better than `content: '\bb'.

#### Viewport

Ensure a device’s viewport is set to `device-width`, which is the width of the screen in CSS pixels at a scale of 100%:

	<meta name="viewport" content="width=device-width, initial-scale=1">

`initial-scale=1` ensures smartphones retain the same zoom level during orientation change (e.g. portrait to landscape).

## Typography

### Fonts

#### Font-size

Imarc often defaults to a 16px-based font-size for our projects. Because users are able to set their preferred font-size in their web browser, **do not set a default font-size on the** `<html>` **or** `:root` **selectors**. Let the browser’s default size serve as a baseline (usually 100% which equals 16px). We can control font-size *proportion* with relative sizing units `rem` or `em`. Avoid using the `px` unit.

<div class="embed">
    <div class="codepen" data-height="265" data-theme-id="light" data-default-tab="css,result" data-user="imarcagency" data-slug-hash="zYZRzdX" data-preview="true" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="font-size: 16px base best practice">
    </div>
</div>

**“The design I was given uses a 20px font-size, not 16px. What do I do?”**

Use a percentage on `<html>`’s `font-size`. In the case of 20px:

    html {
        font-size: 125%; // (20/16 * 100)
    }

Your project’s root font-size is now 20px. `1rem` = `20px`. `1.5rem` = `30px`.

<div class="embed">
    <div class="codepen" data-height="265" data-theme-id="light" data-default-tab="css,result" data-user="imarcagency" data-slug-hash="BaWYZOJ" data-preview="true" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="BaWYZOJ">
    </div>
</div>

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

## HTML / CSS

Consistent coding style for HTML / CSS is vital as multiple engineers collaborate on site buildouts and maintenance.

### Layout

Use [Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox) or [Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) for page layouts. Do not use floats or tables.

### Containers

All sites use some form of container system – elements with a max-width (often 1200px) that are center-aligned in the browser, enclosing site content. These elements should not chain other elements on them. Nor should they be given any layout properties such as `display: flex`.

### Class naming

Many Imarc projects use an offshoot of [Block Element Modifier](https://en.bem.info/methodology/quick-start/) called [ABEM](https://css-tricks.com/abem-useful-adaptation-bem/). It is influenced from [Atomic Design](https://atomicdesign.bradfrost.com/) principals. This creates a methodology for HTML class naming and Sass directory structure.

Our preferred class naming format is:

    blockName__elementName -modifierName

#### Example

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

#### General CSS Formatting

    .hero {
        background-color: #FFF;
        color: #333;
        padding: 2rem;
    }

    .torso {
        background-color: #DDD;
        color: #111;
    }

- Selector(s) lives on its own line(s) followed by the opening brace
- Each declaration lives on its own indented line
- Each property has a space between the colon and value ends with a semi-colon
- The closing brace should be on its own line at the same indentation as the selector
- New blocks have a space between them

#### Use Only Class Selectors

Style to class selectors only and not IDs or selectors

`.hero__heading` **not** `#hero__heading` or `.hero h1`

The exceptions to this rule: anchor links, form label IDs, JavaScript hook requirements.

### Breakpoints

Imarc projects follow a mobile-first methodology. Your media queries should be `min-width` based and not `max-width` based.

Limit your breakpoints to a reasonable amount (3-4).

## Forms

The action attribute is required on all forms, and should have a blank value by default.

    <form action=""> … </form>

### Mobile

To prevent "zooming" an interface when tapping into an `<input>` on an iOS mobile device, form `<input>`s should have a minimum `font-size` of 16px. Do not set a smaller `font-size` than 16px.

<div class="fpo">WORK IN PROGRESS</div>

### Markup example

`<input>` elements should always be associated with `<label>` elements via `id` and `for` attributes, respectively.

<div class="fpo">WORK IN PROGRESS</div>

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

## Media

### Images

**JPG format** is ideal for photographic-like images and large, abstract background images. (e.g. images of people, places, things)

**PNG format** is ideal for flat-color graphics and/or images that require transparency. 

**WebP** can replace jpg/png formats in modern browsers (currently supported in latest releases of Chrome, Firefox and Edge 18+). This format might not be available from a native design program, but can be converted using other programs or even auto-generated via transforms in a CMS. 

##### Exporting from design programs

To help with performance and keep file sizes down, be sure to optimize images for the web. You should do this when exporting or saving images for your build. Saving out as 1.5x works well for retina screens. Once your images are exported, you'll want to further compress them using a tool like ImageOptim, mentioned below.

#### Compression

Whenever you export images, use image compression software. Compression reduces file size which in turn helps site performance. [ImageOptim](https://imageoptim.com/) is a client used at Imarc. This is done after exporting from a design program and before uploading to the site. 

#### Transforms

Some Content Management Systems, like Craft CMS, allow you to set transforms on images managed via the CMS which allows for images to be manipulated on demand. This helps with site performance and speed. If a user uploads a 4000x3000 image for a headshot, we can use image transforms to dynamically re-size and crop the image to something reasonable, like 300x300. We typically define image transforms within Craft CMS projects. See [Craft’s image transforms](https://craftcms.com/docs/3.x/image-transforms.html) documentation for more information.


### SVG

SVG (Scalable Vector Graphics) is an XML-based image format. It allows for infinite scaling without sacrificing image quality. It is often used for logos, icons, and illustrative graphics.

##### Inline vs. src

Inline SVGs can block rendering and will not cache. As a result, using an `.svg` file within an `<img>` tag is a solid implementation choice. However, if the interface calls for animation and/or stroke/fill variations, inlining an SVG is acceptable. To help with document readability, it's preferable to "include" the SVG via a PHP or Twig include statement. When using an SVG inline, feel free to edit the code as you see fit - remove extra groupings, add classes or ids, etc. 

#### SVG Implementation Tips

When using a program such as Adobe Illustrator to export an SVG for inline usage, the most important property to update is "Styling". You'll want to select "Presentation Attributes" as this option includes the styles as inline attributes instead of adding extra classes and styles which causes bloat and may conflict with other styles down the road. Another hot tip is to remove the "height" and "width" properties and control these via CSS so you get more control over the size and scalability.

Ideal settings for exporting SVGs from Illustrator:

<img alt="" class="lazyload" data-src="/img/svg-settings.png">

#### Sizing SVGs
We ask our designers to crop SVGs very tight to their bounding box for better styling control, but if we are using SVGs from another source, we may need to edit the files ourselves. We can do this with a program like Adobe Illustrator, or edit the SVG code directly to update some SVG properties for sizing purposes. For more on dealing with viewbox or sizing properties, see  [Scaling SVG Elements](https://wattenberger.com/guide/scaling-svg) 


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

Sometimes, a video will auto-play (without audio) behind HTML content. This is common in a site’s *hero* area. Create and export `.mp4` and `.webm` video files. Imarc often uses a video optimization tool like <a href="https://handbrake.fr/">Handbrake</a> to achieve smallest file size. Here is some HTML/Sass for implementing a responsive background video. Note the `muted` attribute on the `<video>` element.

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
        }
    }

`calc(9 / 16 * 100%)` would output a `padding-top: 56.25%`. This matches the popular 16:9 aspect ratio. To use a different aspect ratio, `calc(height / width * 100%)` will output the proper percentage.

## Iconography

### SVG-based icons

[The Noun Project](https://thenounproject.com/), [Tabler](https://tablericons.com), and [Feather](https://feathericons.com) are a few popular SVG icon sets.

#### Implementation tips
The preferred method is to include an SVG icon as a `<symbol>`. This way, you can create one SVG file that houses all of the icons you need on your site (similar to the old image sprites). 

    <!-- /_partials/icons.twig (example file path) -->
    <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
        <symbol id="icon-1" viewBox="0 0 30 30">
            <!-- <path> and whatever other shapes in here -->
        </symbol>
        <symbol id="icon-2" viewBox="0 0 30 30">
            <!-- <path> and whatever other shapes in here -->
        </symbol>
        <!-- And so on -->
    </svg>

Then, you can just reference them easily within the template code:

    <div class=“icon”>
        <svg class=“icon__svg”>
            <use xlink:href=“#icon-1” />
        </svg>
    </div>
    <div class=“icon”>
        <svg class=“icon__svg”>
            <use xlink:href=“#icon-2" />
        </svg>
    </div>

A few things to note:
* `viewBox` is set on the initial symbol definition.
* The SVG is set to `display: none;`.
* Best practice is to wrap SVG symbols in a parent `<div>`, which you can use for standard positioning, sizing, and styling for your icons.

### Font Awesome

[Font Awesome](https://fontawesome.com) is an iconography framework used on many Imarc projects. Note that as of 2021, we prefer using SVG icon sets. That said, Imarc owns a <a href="https://fontawesome.com/pro">professional license</a>. You can find sign-in credentials in our [LastPass](https://lastpass.com).

#### Font Awesome implementation
There are a couple ways to get Font Awesome going on your project. You can manually include supplied
source files or leverage a <a href="https://fontawesome.com/how-to-use/use-with-node-js">private node
package (npm)</a>.

**Imarc-recommended implementation**
* Implementation via npm is fine, but note that using the professional tier requires all team members to possess the same `.npmrc` file in order to pull down gated assets from npm. See a lead front-end engineer for help.
* You can also download the FontAwesome font files and self-host.
* **Deprecated**: use a [Font Awesome kit](https://fontawesome.com/kits) 

## Animation

Imarc often uses [GreenSock](https://greensock.com/) or [animejs](https://animejs.com/) for site animations. animejs is often seen as a simpler solution.

<div class="fpo">WORK IN PROGRESS</div>

## Performance

Having a fast website is crucial. If you have access to the Imarc wiki, see our existing [Frontend Performance](https://wiki.imarc.com/Frontend_Performance) article.

### Responsive images

Responsive image techniques allow one to serve appropriately sized images for the device a site user is using. Mobile devices can download a small image, and a desktop machine can download a large version of the same image. Imarc typically uses [lazysizes](https://github.com/aFarkas/lazysizes) on projects, as it provides lazyloading among other features, and allows for cross-browser compatibility. It can be included as a [node package](https://www.npmjs.com/package/lazysizes).

### Web inspector

<div class="fpo">WORK IN PROGRESS</div>

### PageSpeed Insights / Core web vitals

<div class="fpo">WORK IN PROGRESS</div>

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
            <td>Chrome (current version)</td>
            <td class="supported">yes</td>
            <td class="supported">yes</td>
        </tr>
        <tr>
            <td>Firefox (current version)</td>
            <td class="supported">yes</td>
            <td class="supported">yes</td>
        </tr>
        <tr>
            <td>Microsoft Edge (stable)</td>
            <td></td>
            <td class="supported">yes</td>
        </tr>
        <tr>
            <td>Safari (current version)</td>
            <td class="supported">yes</td>
            <td></td>
        </tr>
    </table>
</div>

_** We recognize that some browsers are incapable of properly rendering standards compliant code. We do not code to support these browsers unless explicitly requested and specified for the project (Internet Explorer 11 from Microsoft is one example)_

### Mobile

<div class="table table--responsive">
    <table>
        <tr>
            <th>Browser</th>
            <th>Platform/OS</th>
        </tr>
        <tr>
            <td>Chrome (current release)</td>
            <td>Android</td>
        </tr>
        <tr>
            <td>Chrome (current release)</td>
            <td>iOS</td>
        </tr>
        <tr>
            <td>Safari (current release)</td>
            <td>iOS</td>
        </tr>
    </table>
</div>

Individual projects may require browser support beyond our defaults. In these cases the additional
support will be specified in the proposal and strategy documents.

Imarc employees who have access to our wiki can read more about our policies in the [Browser Support](http://wiki.imarc.net/Browser_Support) article.

## Analytics, marketing, and plug-ins

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

### Web forms

* Inputs always have associated labels
* Inputs should use an associated type attribute (e.g. `search`, `tel`, `email`, etc)
* Make sure required fields are visually indicated as such (e.g. with an asterisk <strong>*</strong>)
* All forms are keyboard-operable, with obvious visual `:focus` styles.
* Validation messages show all errors at once instead of progressively showing more errors
* Validation messages use same field names as form and in the same order

### Color

* Color combinations should be in compliance with [WCAG 2.0 minimum contrast](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html). Use a <a href="https://contrast-grid.eightshapes.com">color contrast checker</a> to ensure your ratio meets the standard.
* Important information should not be conveyed with color alone. Use other visual identifiers like font-weight, sizing, shapes, special characters.
