module.exports = function() {
  $.gulp.task('watch', () => {
    $.gulp.watch(
      ['./app/scss/**/*.+(scss|sass)', '!./app/scss/**/libs.min.{scss,sass}'],
      $.gulp.series('sassMain:dev')
    );
    $.gulp.watch('./app/scss/**/libs.min.{scss,sass}', $.gulp.series('sassLibs:dev'));
    $.gulp.watch('./app/jsbeforebabel/**/*.js', $.gulp.series('js:dev'));
    $.gulp.watch('./app/*.html').on('change', $.bs.reload);
    $.gulp.watch('./app/img/svgbeforesprite/*', $.gulp.series('svg:dev'));
  });
};
