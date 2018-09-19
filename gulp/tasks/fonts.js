module.exports = function() {
  $.gulp.task('fonts:build', () => {
    return $.gulp.src('./app/fonts/**/*.*').pipe($.gulp.dest('./build/fonts/'));
  });
};
