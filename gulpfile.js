const { watch, series, parallel } = require('gulp');
const browserSync = require('browser-sync');

// Конфигурация
const app =  require('./src/config/app.js');

// Подключения
const html = require('./src/tasks/html.js');
const scss = require('./src/tasks/scss.js');
const js = require('./src/tasks/js.js');
const clear = require('./src/tasks/clear.js');
const img = require('./src/tasks/img.js');
const svgImg = require('./src/tasks/svg.js');
const font = require('./src/tasks/fonts.js');
const resources = require('./src/tasks/resources.js');
const zipFiles = require('./src/tasks/zip.js');


// Сервер
const server = () => {
    browserSync.init({
        server: {
            baseDir: './dist'
        }
    });
}

// Наблюдение
const watcher = () => {
    watch('./src/**/*.html', html).on('all', browserSync.reload);
    watch('./src/**/*.scss', scss).on('all', browserSync.reload);
    watch('./src/**/*.js', js).on('all', browserSync.reload);
    watch('./src/**/*.{png,jpg,jpeg,gif,svg}', img).on('all', browserSync.reload);
    watch('./src/**/*.svg', svgImg).on('all', browserSync.reload);
    watch('./src/**/*.{eot,ttf,otf,otc,woff,woff2,svg}', font).on('all', browserSync.reload);
    watch('./src/**', resources).on('all', browserSync.reload);
};

const build = series(
    clear,
    parallel(html, scss, js, img, svgImg, font, resources)
);

const dev = series(
    build,
    parallel(watcher, server)
);

// Задачи
exports.html = html;
exports.scss = scss;
exports.js = js;
exports.img = img;
exports.font = font;
exports.clear = clear;
exports.watch = watcher;
exports.zip = zipFiles;
exports.build = build;

// Сборка
exports.default = app.isProd
? build
: dev;