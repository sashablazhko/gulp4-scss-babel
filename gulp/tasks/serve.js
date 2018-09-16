module.exports = function() {
  $.gulp.task('serve', function() {
    $.bs.init({
      server: {
        baseDir: './app',
      },
      notify: false,
    });
  });
};
