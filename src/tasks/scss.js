const { src, dest } = require('gulp');

// Конфигурация
const app = require('../config/app.js');

// Плагины
const sass = require('gulp-sass')(require('sass'));
const sassGlob = require('gulp-sass-glob');
const postCss = require('gulp-postcss');
const postCssImport = require('postcss-import');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const autoprefixer = require('gulp-autoprefixer');
const cssO = require('gulp-csso');
const rename = require('gulp-rename');
const size = require('gulp-size');
const shorthand = require('gulp-shorthand');
const groupCssMediaQueries = require('gulp-group-css-media-queries');
const webpCss = require('gulp-webp-css');
const cleanCSS = require('gulp-clean-css');
const gulpIf = require('gulp-if');

// Обработка SCSS
const scss = () => {
    return src('./src/scss/*.{sass,scss}', {sourcemaps: app.isDev})
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: 'SCSS',
            message: error.message
        }))
    }))
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(postCss([postCssImport()]))
    .pipe(webpCss())
    .pipe(autoprefixer(app.css))
    .pipe(shorthand())
    .pipe(groupCssMediaQueries())
    .pipe(size({ title: 'main.css' }))
    .pipe(dest('./dist/css', {sourcemaps: app.isDev}))
    .pipe(rename({ suffix: ".min" }))
    .pipe(cssO())
    .pipe(size({ title: 'main.min.css' }))
    .pipe(gulpIf(app.isProd, cleanCSS(app.clean)))
    .pipe(dest('./dist/css', {sourcemaps: app.isDev}))
}

// Подключение
module.exports = scss;