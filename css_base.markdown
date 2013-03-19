---
title: iMarc CSS Base
layout: default
---

# iMarc CSS Base

This is a description of the interesting details of our CSS base.

## DOCTYPE

    <!DOCTYPE html>
    <!--[if lt IE 7]> <html class="lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
    <!--[if IE 7]>    <html class="lt-ie9 lt-ie8" lang="en"> <![endif]-->
    <!--[if IE 8]>    <html class="lt-ie9" lang="en"> <![endif]-->
    <!--[if gt IE 8]><!--> <html lang="en"> <!--<![endif]-->
        <head>
            <meta charset="utf-8" />
            <meta name="author" content="Created by iMarc: web + creative + strategy + mobile. More info at www.imarc.net" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
            <meta name="viewport" content="width=device-width" />
            <title>iMarc CSS Base</title>

A lot of the doctype comes directly from the
[HTML5 Boilerplate](http://html5boilerplate.com/). We've using IE's conditional
comments to add classes to the `html` element itself for browser targetting.

We use UTF-8 for all of our websites. We also include an author meta tag
crediting our work.

The X-UA-Compatible meta statement switches IE to using Chrome Frame for
rendering the site if Chrome Frame is available. Chrome Frame is an IE plugin
that allows IE to use Chrome's (webkit-based) rendering engine instead of its
own in older version of IE (6, 7, and 8.)

Lastly, to support mobile devices, we set the `viewport` to the width of the device.
This is meant to avoid unusual page scaling. For more information about which
mobile browsers this works with, see
[Quirksmode's Chart](http://www.quirksmode.org/mobile/tableViewport.html#metaviewport).

## Web Fonts

As a rule, its always better practice to include CSS for webfonts directly
rather than via @import statements, however, if you are going to include them,
they should be up top.

## Animations

CSS Animations shold be defined also at the beginning of your CSS files, as
they can be used in all subsequent sections.

## Reset

The CSS Reset is based off of both Eric Meyer's HTML5 reset with some includes
from the HTML5 Boilerplate.

### Audio, Canvas, Video

For these elements, we're defaulting to inline-block. However, since IE6/7
don't support inline-block, we're using H5BP's inline-block hack and using the
conditional classes to target these browsers (opposed to the star hack.)

### `audio:not([controls])`

HTML5 Audio elements can have built in controls, such as the following:

    <div>
    	<audio style="background: #ccc;" controls=""></audio>
    </div>

<div class="group">
	<audio style="background: #ccc;" controls=""></audio>
</div>

However, HTML5 audio elements without controls, such as the following,
incorrectly show up in some versions of Firefox and Opera:

    <div>
    	<audio style="background: #ccc;"></audio>
    </div>

<div class="group">
	<audio style="background: #ccc;"></audio>
</div>

Both H5BP and Normalize.css use this snippet, and so are we.

### `text-size-adjust`

This suppresses automatic text size resizing that happens in Safari on iOS.


### Min-width/Max-width/Width for the `body` element

We promote 'fluid between break points' to support the widest range of desktops
and mobile devices. Here, we set a max-width and a min-width on the body
element as well as use the conditional class to target IE6 to set a hard width.

### `::selection`

These two selectors are very special and allow styling selected text. Older
versions of firefox don't support the unprefixed selector, and don't even
support the selectors combined together. Reseting text-shadow from these
elements helps hide 'odd glows' that can show up otherwise.


## Headings

In addition to the typical heading styles, we also collapses margins on
immediately subsequent headings (subtitles or equivalent.)

## Typography

### `code` and Preformatted Blocks

Our font stack for these goes from least available to most wildly available
monospaced fonts, loosely matching up with platforms:

+ Monaco (Mac, iOS)
+ Droid Sans Mono (Linux, Android)
+ Consolas (Windows 7, Vista)
+ Courier New (Windows XP)

### `q:before`/`q:after`

Safari doesn't support the `quotes` property, so this has to be done to avoid
Safari automatically inserting its own quotes around quotes.

By default, we don't use quotes because they aren't support in IE7/IE6.

## Links

By default, we have a slight CSS transition for hovering over links.

## Lists

Nothing interesting here.

## Embedded Content

### `-ms-interpolation-mode`

In IE8 and above, this is used as the improved way to resize images. It doesn't
exist in IE6, so we only need this on for IE7.

## Tables

Nothing interesting here.

## Layout

Moving towards using HTML5s `header` and `footer` tags, we use
header/torso/footer classes as the three, top level elements under `body`.
Similarly, we use a nav class on `ul` elements that will eventually transition
to `nav` elements.

## Messaging

+ highlight - used as a callout.
+ error, info, success - these are used for server messaging. They can be used
  inline with spans, or as block level elements with `div`s.

## Non-semantic Classes

+ visuallyhidden - This denotes text that should be completely hidden from
  browsers but available for screen readers.
+ We also provide `.ie7-only` and `.lt-ie7-only` classes for marking content as
  only visible in IE7 or IE6.
+ We use `group` as our clearfix instead of arbitrary extra clearfix elements.

## Forms

This area has a lot of content, much of which is only important if you're using
the related elements.

### `-webkit-appearance`

This CSS attribute makes buttons and button-like inputs able to be styled on
iOS:

<div class="group">
	<button type="button">This is a button</button>
	<input type="button" value="This is a button-type input" />
	<input type="submit" value="This is a submit-type input" />
</div>

### `overflow: visible` for IE7

This corrects a bug in IE7's inner spacing of text for styled buttons and
button-like inputs.

## Print Styles

This section is directly from H5BP at the moment, and provides a base plate for
print styles.

## Site Specific

This area is just marked as a place to start site specific CSS.
