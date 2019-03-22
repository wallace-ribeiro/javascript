var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('default', function() {
    return gulp.src(
      [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'js/*.js'
      ])
      .pipe(babel({presets: ['es2015', 'stage-2']}))
      .pipe(gulp.dest('compiled'))
});
