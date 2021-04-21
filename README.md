# Handbook

https://handbook.imarc.com

Imarc Handbook documents coding best practices. All pull requests should be made against the *gh-pages* branch.

## Setup

Handbook uses [Jekyll](https://jekyllrb.com), a static-site generator written in Ruby. Your machine likely already has Ruby, but you can install it if needed. You might [use Homebrew](https://formulae.brew.sh/formula/ruby), for example.

### Bundler

If you don’t have [Bundler](https://rubygems.org/gems/bundler), install it via `gem install bundler` (you only need to do this once). Then run `bundle install`. Note: you might need to run these commands as `sudo`

### Node packages

Run `npm i` to install node packages.

## Development

### Serve Handbook in browser

`bundle exec jekyll serve`

### Watch Sass and JavaScript

`npm run watch`

### HTML class naming

HTML classes are formed following [BEM's Two Dashes Style](https://en.bem.info/methodology/naming-convention/#two-dashes-style)

``block-name__elem-name--mod-name``

### Icons

We use [Tabler SVG Icons](https://tablericons.com/) for department icons. They are include from the `_includes` folder.

### Images

[lazysizes](https://github.com/aFarkas/lazysizes) is used for lazy loading and responsive images.

## Deployment

You can deploy Handbook by pushing to the `gh-pages` branch. Remember to run `npm run prod` before doing so. Handbook uses [GitHub Pages](https://pages.github.com) for hosting.
