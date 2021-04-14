# Handbook

https://handbook.imarc.com

Imarc Handbook documents coding best practices. All pull requests should be done against the *gh-pages* branch.

## Setup

If you don’t have [Bundler](https://rubygems.org/gems/bundler), install it via `gem install bundler` (you only need to do this once).

Run `bundle install`

## Development

Work locally before committing any code. Handbook can be viewed locally using [Jekyll](https://jekyllrb.com).

Serve Handbook locally `bundle exec jekyll serve`

Run `npm i` to install packages (first time only) and `npm run watch` to compile Sass to CSS.

### BEM

HTML classes are formed following [BEM's Two Dashes Style](https://en.bem.info/methodology/naming-convention/#two-dashes-style)

``block-name__elem-name--mod-name``

### Icons

We use [Tabler SVG Icons](https://tablericons.com/) for department icons. They are include from the `_includes` folder.

### Images

[lazysizes](https://github.com/aFarkas/lazysizes) is used for lazy loading and responsive images.

## Deployment

You can deploy Handbook by pushing to the `gh-pages` branch. Remember to run `npm run prod` before doing so. Handbook uses [GitHub Pages](https://pages.github.com) for hosting.
