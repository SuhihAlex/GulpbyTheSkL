const { src, dest } = require('gulp');

const resources = () => {
  return src(`./src/resources/**`)
    .pipe(dest('./dist'))
};

module.exports = resources;