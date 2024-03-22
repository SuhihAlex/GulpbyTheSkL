const { src, dest } = require('gulp');

// Конфигурация
const app = require('../config/app.js');

// Плагины
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const newer = require('gulp-newer');
const fonter = require('gulp-fonter');
const ttf2woff2 = require('gulp-ttf2woff2');

// Обработка Шрифтов
const fonts = () => {
    return src('./src/resources/fonts/*.{eot,ttf,otf,otc,woff,woff2,svg}')
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: 'IMAGE',
            message: error.message
        }))
    }))
    .pipe(newer('./dist/fonts'))
    .pipe(fonter(app.fonter))
    .pipe(dest('./dist/fonts'))
    .pipe(ttf2woff2())
    .pipe(dest('./dist/fonts'));
}


// Подключение
module.exports = fonts;