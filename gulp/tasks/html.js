module.exports = function() {
  $.gulp.task('html:build', () => {
    return $.gulp.src('./app/*.html').pipe($.gulp.dest('./build/'));
  });
};
