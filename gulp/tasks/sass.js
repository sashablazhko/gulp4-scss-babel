module.exports = function() {
  $.gulp.task('sass', function() {
    return (
      $.gulp
        .src('app/scss/**/*.+(scss|sass)')
        .pipe($.gp.sourcemaps.init())
        // .pipe($.gp.sass().on('error', $.gp.sass.logError))
        .pipe($.gp.sass())
        .pipe($.gp.autoprefixer(['last 10 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .on(
          'error',
          $.gp.notify.onError({
            message: 'Error: <%= error.message %>',
            title: 'style',
          })
        )
        .pipe($.gp.sourcemaps.write())
        .pipe($.gulp.dest('app/css'))
        .pipe($.bs.reload({ stream: true }))
    );
  });
};
