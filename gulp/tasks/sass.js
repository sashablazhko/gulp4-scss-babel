module.exports = function() {
  $.gulp.task('sassLibs:dev', () => {
    return $.gulp
      .src('./app/scss/**/libs.min.{scss,sass}')
      .pipe($.gp.plumberNotifier())
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.sass())
      .pipe($.gp.autoprefixer(['last 10 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
      .pipe($.gp.csscomb())
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest('./app/css/'))
      .pipe($.bs.reload({ stream: true, match: '**/*.css' }));
  });

  $.gulp.task('sassMain:dev', () => {
    return $.gulp
      .src(['./app/scss/**/*.+(scss|sass)', '!./app/scss/**/libs.min.{scss,sass}'])
      .pipe($.gp.plumberNotifier())
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.sass())
      .pipe($.gp.autoprefixer(['last 10 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
      .pipe($.gp.csscomb())
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest('./app/css/'))
      .pipe($.bs.reload({ stream: true, match: '**/*.css' }));
  });

  $.gulp.task('sassLibs:build', () => {
    return $.gulp
      .src('./app/scss/**/libs.min.{scss,sass}')
      .pipe($.gp.sass())
      .pipe($.gp.autoprefixer(['last 10 versions', '> 1%', 'ie 8', 'ie 7']))
      .pipe($.gp.csscomb())
      .pipe($.gp.csso())
      .pipe($.gulp.dest('./build/css/'));
  });

  $.gulp.task('sassMain:build', () => {
    return $.gulp
      .src(['./app/scss/**/*.+(scss|sass)', '!./app/scss/**/libs.min.{scss,sass}'])
      .pipe($.gp.sass())
      .pipe($.gp.autoprefixer(['last 10 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
      .pipe($.gp.csscomb())
      .pipe($.gulp.dest('./build/css/'));
  });
};
