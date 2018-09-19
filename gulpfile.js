'use strict';

global.$ = {
  path: {
    tasks: require('./gulp/config/tasks.js'),
  },
  gulp: require('gulp'),
  del: require('del'),
  gp: require('gulp-load-plugins')(),
  bs: require('browser-sync').create(),
};

$.path.tasks.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task('clear', function() {
  return $.gp.cache.clearAll(); // очистить кеш картинок
});

$.gulp.task(
  'build',
  $.gulp.series(
    'clean',
    $.gulp.parallel(
      'sassLibs:build',
      'sassMain:build',
      'libsJS:build',
      'js:build',
      'svg:build',
      'img:build',
      'fonts:build',
      'html:build'
    )
  )
);

$.gulp.task(
  'default',
  $.gulp.series(
    $.gulp.parallel('sassMain:dev', 'sassLibs:dev', 'libsJS:dev', 'js:dev', 'svg:dev'),
    $.gulp.parallel('watch', 'serve')
  )
);
