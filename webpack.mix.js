let mix = require('laravel-mix');

mix
    .sass('src/main.scss', 'css')
    .options({
        processCssUrls: false,
    })
