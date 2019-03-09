const gulp = require('gulp');
const rollup = require('rollup');
const rollupTypescript = require('rollup-plugin-typescript');
const uglify = require('rollup-plugin-uglify').uglify;


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