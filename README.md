# Handbook

https://handbook.imarc.com

Imarc Handbook documents coding best practices. All pull requests should be made against the *gh-pages* branch.

## Setup

Handbook uses [Jekyll](https://jekyllrb.com), a static-site generator written in Ruby. Your machine likely already has Ruby, but you can install it if needed. You might [use Homebrew](https://formulae.brew.sh/formula/ruby), for example.

### Bundler

If you don’t have [Bundler](https://rubygems.org/gems/bundler), install it via `gem install bundler` (you only need to do this once). Then run `bundle install`. Note: you might need to run these commands as `sudo`

### Node packages

Run `npm i` to install node packages.

## Content Authoring

Edit and save a respective department's markdown file (e.g. `frontend.md`). See a [markdown guide](https://guides.github.com/features/mastering-markdown/) for editing help.

### Embeds

As of this writing, we embed Codepen examples. See LastPass for its login credentials. Wrap Codepen embed code in a `<div class="emebed"></div>` parent for proper spacing. Remove the _See the Pen_ byline copy and the `<script>`.

## Development

### Serve Handbook in browser

`bundle exec jekyll serve`

### Watch Sass and JavaScript

`npm run watch`

### HTML class naming

HTML classes are formed following [BEM's Two Dashes Style](https://en.bem.info/methodology/naming-convention/#two-dashes-style)

``block-name__elem-name--mod-name``

### Mobile Nav

[mmenu-light](https://www.npmjs.com/package/mmenu-light) is used. We do not apply an mmenu-light "theme" but rather leverage a CSS custom property in `src/sass/layouts/_nav-mobile.scss`. It works in tandem with Handbook's other light/dark colors in `src/sass/base/_root.scss`.

### Fonts

Handbook uses the Gibson typeface via TypeKit (Adobe Fonts).

### Icons

We use [Streamline](https://app.streamlinehq.com/icons) for icons. Specifically, the _Streamline Light_ family.
### Images

[lazysizes](https://github.com/aFarkas/lazysizes) is used for lazy loading and responsive images.

## Deployment

You can deploy Handbook by pushing to the `gh-pages` branch. Remember to run `npm run prod` before doing so. Handbook uses [GitHub Pages](https://pages.github.com) for hosting.
