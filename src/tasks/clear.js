const gulp = require('gulp');
const del = require('del');

// Удаление директории
const clear = () => {
    return del('./dist', { force: true });
};

module.exports = clear;