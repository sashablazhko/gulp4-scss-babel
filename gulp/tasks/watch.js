module.exports = function() {
  $.gulp.task('watch', function() {
    $.gulp.watch('app/scss/**/*.+(scss|sass)', $.gulp.series('sass'));
  });
};
