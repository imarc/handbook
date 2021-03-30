const mix = require('laravel-mix');

mix.setPublicPath('./')

mix
    .sass('src/sass/main.scss', 'css')
    .options({
        processCssUrls: false,
    })

mix.js('src/js/main.js', 'js')

mix.copyDirectory('src/img', 'img');


mix.extract(['gsap'])
mix.sourceMaps()
mix.version()
