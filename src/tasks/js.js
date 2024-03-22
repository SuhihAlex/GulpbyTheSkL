const { src, dest } = require('gulp');

// Конфигурация
const app = require('../config/app.js');

// Плагины
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const babel = require('gulp-babel');
const webpack = require('webpack-stream');

// Обработка JavaScript
const js = () => {
    return src('./src/js/**/*.js', { sourcemaps: app.isDev })
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: 'JS',
            message: error.message
        }))
    }))
    .pipe(babel())
    .pipe(webpack(require('../../webpack.config.js'))).on('error', function (err) {
      console.error('WEBPACK ERROR', err);
      this.emit('end');
    })
    .pipe(dest('./dist/js', { sourcemaps: app.isDev }))
}

// Подключение
module.exports = js;