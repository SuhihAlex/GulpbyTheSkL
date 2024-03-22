const { src, dest } = require('gulp');
const clear = require('./clear.js');

// Плагины
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const zip = require('gulp-zip');
const path = require('path');


const zipFiles = (done) => {
  clear.sync([`./dist/*.zip`]);
  return src(`./dist/**/*.*`, {})
    .pipe(plumber(
      notify.onError({
        title: "ZIP",
        message: error.message
      })
    ))
    .pipe(zip(`path.zip`))
    .pipe(dest('./dist'));
}

// Подключения
module.exports = zipFiles;