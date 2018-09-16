'use strict';

var gulp = require('gulp');

global.$ = {
  gulp: require('gulp'),
  gp: require('gulp-load-plugins')(),
  bs: require('browser-sync').create(),

  path: {
    tasks: require('./gulp/config/tasks.js'),
  },
};

$.path.tasks.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task('default', $.gulp.series('sass', $.gulp.parallel('watch', 'serve')));
