const { src, dest } = require('gulp');

// Конфигурация
const app = require('../config/app.js');

// Плагины
const svgMin = require('gulp-svgmin');
const cheerio = require('gulp-cheerio');
const replace = require('gulp-replace');
const svgSprite = require('gulp-svg-sprite');

// Обработка SVG
const svgImg = () => {
    return src('./src/img/svg/**.svg')
    .pipe(svgMin(app.svgmin))
    .pipe(cheerio(app.svgFunc))
    .pipe(replace('&gt;', '>'))
    .pipe(svgSprite(app.svgSprite))
    .pipe(dest('./dist/img'))
}

// Подключение
module.exports = svgImg;