const { src, dest } = require('gulp');

// Конфигурация
const app = require('../config/app.js');

// Плагины
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const concat = require('gulp-concat');
const cssImport = require('gulp-cssimport');
const autoprefixer = require('gulp-autoprefixer');
const cssO = require('gulp-csso');
const rename = require('gulp-rename');
const size = require('gulp-size');
const shorthand = require('gulp-shorthand');
const groupCssMediaQueries = require('gulp-group-css-media-queries');
const webpCss = require('gulp-webp-css');

// Обработка CSS
const css = () => {
    return src('./src/css/*.css', {sourcemaps: app.isDev})
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: 'CSS',
            message: error.message
        }))
    }))
    .pipe(concat('main.css'))
    .pipe(cssImport())
    .pipe(webpCss())
    .pipe(autoprefixer(app.css))
    .pipe(shorthand())
    .pipe(groupCssMediaQueries())
    .pipe(size({ title: 'main.css' }))
    .pipe(dest('./dist/css', {sourcemaps: app.isDev}))
    .pipe(rename({ suffix: ".min" }))
    .pipe(cssO())
    .pipe(size({ title: 'main.min.css' }))
    .pipe(dest('./dist/css', {sourcemaps: app.isDev}))
}

// Подключение
module.exports = css;