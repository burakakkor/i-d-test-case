var gulp = require('gulp');
var mocha = require('gulp-mocha');
var pug = require('gulp-pug');

gulp.task('files', function() {
  gulp.watch(['config/**', 'src/**', 'test/**'], ['tests']);
});

gulp.task('views', function buildHTML() {
  return gulp.src('src/client/app/views/**/*.pug')
  .pipe(pug())
  .pipe(gulp.dest('src/client/app/views/dist'));
});

gulp.task('tests', function() {
  return gulp.src(['test/test-**.js'], { read: false })
    .pipe(mocha({
      reporter: 'spec',
      timeout: 5000
    }))
    .on('error', function(err) {
      this.emit('end');
    });
});

gulp.task('default', ['files', 'views']);