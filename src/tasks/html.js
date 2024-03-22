const { src, dest } = require('gulp');

// Конфигурация
const app = require('../config/app.js');

// Плагины
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const fileInclude = require('gulp-file-include');
const htmlMin = require('gulp-htmlmin');
const size = require('gulp-size');
const webpHtml = require('gulp-webp-html');
const typograf = require('gulp-typograf');

// Обработка HTML
const html = () => {
    return src('./src/*.html')
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: 'HTML',
            message: error.message
        }))
    }))
    .pipe(fileInclude(app.include))
    .pipe(typograf(app.typograf))
    .pipe(webpHtml())
    .pipe(size({
        title: 'HTML'
    }))
    .pipe(htmlMin(app.html))
    .pipe(size({
        title: 'HTMLmin'
    }))
    .pipe(dest('./dist'))
};

// Подключения
module.exports = html;