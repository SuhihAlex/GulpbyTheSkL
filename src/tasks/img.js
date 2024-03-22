const { src, dest } = require('gulp');

// Конфигурация
const app = require('../config/app.js');

// Плагины
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const imageMin = require('gulp-imagemin');
const newer = require('gulp-newer');
const webp = require('gulp-webp');
const gulpIf = require('gulp-if');

// Обработка IMG
const img = () => {
    return src('./src/img/*.{png,jpg,jpeg,gif,svg}')
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: 'IMAGE',
            message: error.message
        }))
    }))
    .pipe(newer('./dist/img'))
    .pipe(webp())
    .pipe(dest('./dist/img'))
    .pipe(src('./src/img/*.{png,jpg,jpeg,gif,svg}'))
    .pipe(newer('./dist/img'))
    .pipe(gulpIf(app.isProd, imageMin(app.imagemin)))
    .pipe(dest('./dist/img'))
}


// Подключение
module.exports = img;