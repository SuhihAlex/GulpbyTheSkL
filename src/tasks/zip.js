const { src, dest } = require('gulp');
const del = require('del');

// Плагины
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const zip = require('gulp-zip');


const zipFiles = () => {
  return del(['./dist/*.zip']).then(() => {
    return src('./dist/**/*.*')
      .pipe(plumber({
        errorHandler: function(err) {
          notify.onError({
            title: 'ZIP',
            message: err.message
          })(err);
          this.emit('end');
        }
      }))
      .pipe(zip('archive.zip'))
      .pipe(dest('./dist'));
  });
}

// Подключения
module.exports = zipFiles;