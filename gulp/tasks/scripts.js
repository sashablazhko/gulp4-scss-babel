module.exports = function() {
  $.gulp.task('libsJS:dev', () => {
    return (
      $.gulp
        .src([
          'node_modules/svg4everybody/dist/svg4everybody.min.js',
          // 'app/libs/magnific-popup/dist/jquery.magnific-popup.min.js', // Берем Magnific Popup
          // 'node_modules/jquery/dist/jquery.js', // Берем jQuery
          // 'node_modules/slick-carousel/slick/slick.js',
        ])
        .pipe($.gp.concat('libs.js'))
        // .pipe($.gp.uglify()) // Сжимаем JS файл
        .pipe($.gulp.dest('./app/js/'))
        .pipe(
          $.bs.reload({
            stream: true,
            once: true,
          })
        )
    );
  });

  $.gulp.task('libsJS:build', () => {
    return $.gulp
      .src([
        'node_modules/svg4everybody/dist/svg4everybody.min.js',
        // 'app/libs/magnific-popup/dist/jquery.magnific-popup.min.js', // Берем Magnific Popup
        // 'node_modules/jquery/dist/jquery.js', // Берем jQuery
        // 'node_modules/slick-carousel/slick/slick.js',
      ])
      .pipe($.gp.concat('libs.js'))
      .pipe($.gp.uglify())
      .pipe($.gulp.dest('./build/js/'));
  });

  $.gulp.task('js:dev', () => {
    return $.gulp
      .src('./app/jsbeforebabel/jsbeforebabel.js')
      .pipe($.gp.plumberNotifier())
      .pipe($.gp.sourcemaps.init())
      .pipe(
        $.gp.babel({
          presets: ['@babel/env'],
        })
      )
      .pipe($.gp.sourcemaps.write())
      .pipe($.gp.rename('common.js'))
      .pipe($.gulp.dest('./app/js/'))
      .pipe(
        $.bs.reload({
          stream: true,
          once: true,
        })
      );
  });

  $.gulp.task('js:build', () => {
    return $.gulp
      .src('./app/jsbeforebabel/jsbeforebabel.js')
      .pipe(
        $.gp.babel({
          presets: ['@babel/env'],
        })
      )
      .pipe($.gp.rename('common.js'))
      .pipe($.gulp.dest('./build/js/'));
  });
};
