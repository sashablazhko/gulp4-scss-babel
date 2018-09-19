module.exports = function() {
  var pngquant = require('imagemin-pngquant'); // Подключаем библиотеку для работы с png

  $.gulp.task('img:build', () => {
    return $.gulp
      .src('./app/img/**/*.{png,jpg,jpeg,gif}')
      .pipe(
        $.gp.cache(
          $.gp.imagemin({
            interlaced: true,
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            use: [pngquant()],
          })
        )
      )
      .pipe($.gulp.dest('./build/img/'));
  });
};
