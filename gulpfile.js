const gulp = require('gulp');
const rollup = require('rollup');
const rollupTypescript = require('rollup-plugin-typescript');
const uglify = require('rollup-plugin-uglify').uglify;
const browserSync = require('browser-sync').create();


gulp.task('bundle', function() {

  return rollup.rollup({
    input: './src/index.ts',
    plugins: [
      rollupTypescript(),
      uglify()
    ]
  })
  .then(bundle => {
    return bundle.write({
      file: './build/cdn/canvas-elements.min.js',
      format: 'umd',
      name: 'canvas-elements',
      sourcemap: true
    })
  });
  
});

gulp.task('dev', function() {

  browserSync.init({
    server: {
      baseDir: './playground'
    },
    serveStatic: ['.'],
    port: 3030,
    ui: false,
    online: false
  });

  function reload(done) {
    browserSync.reload();

    done();
  };

  gulp.watch('./src/**/*', gulp.series('bundle', reload));
  gulp.watch('./playground/**/*', reload);

});