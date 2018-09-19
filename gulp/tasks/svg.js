module.exports = function() {
  $.gulp.task('svg:dev', () => {
    return $.gulp
      .src('./app/img/svgbeforesprite/*.svg')
      .pipe(
        $.gp.svgmin({
          js2svg: {
            pretty: true,
          },
        })
      )
      .pipe(
        $.gp.cheerio({
          run: function($) {
            $('[fill]').removeAttr('fill');
            $('[stroke]').removeAttr('stroke');
            $('[style]').removeAttr('style');
            $('style').remove();
          },
          parserOptions: { xmlMode: true },
        })
      )
      .pipe($.gp.replace('&gt;', '>'))
      .pipe(
        $.gp.svgSprite({
          mode: {
            symbol: {
              sprite: '../sprite.svg',
              render: {
                scss: {
                  dest: '../../../scss/_sprite.scss',
                  template: './app/scss/templates/_sprite_template.scss',
                },
              },
            },
          },
        })
      )
      .pipe($.gulp.dest('./app/img/svg/'));
  });
  // for support IE11 https://ru.stackoverflow.com/questions/820941/%D0%9A%D0%B0%D0%BA-%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D1%8C%D0%BD%D0%BE-%D0%BF%D0%BE%D0%B4%D0%BA%D0%BB%D1%8E%D1%87%D0%B0%D1%82%D1%8C-svg4everybody

  $.gulp.task('svg:build', () => {
    return $.gulp.src('./app/img/svg/*.svg').pipe($.gulp.dest('./build/img/svg/'));
  });
};
