var gulp = require('gulp');
var sass = require('gulp-sass');
var mocha = require('gulp-mocha');
var pug = require('gulp-pug');
 
gulp.task('sass', function () {
  return gulp.src('src/public/css/lib/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/public/css/dist/main.css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('src/public/css/lib/**/*.scss', ['sass']);
});

gulp.task('views', function buildHTML() {
  return gulp.src('src/client/app/views/**/*.pug')
  .pipe(pug())
  .pipe(gulp.dest('src/client/app/views/dist'));
});

gulp.task('views:watch', function () {
  gulp.watch('src/client/app/views/**/*.pug', ['views']);
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

gulp.task('tests:watch', function () {
  gulp.watch('test/test-**.js', ['tests']);
});

gulp.task('default', function() {
  gulp.watch(['config/**', 'src/**', 'test/**'], ['views:watch', 'sass:watch']);
});

gulp.task('tests', function() {
  gulp.watch(['config/**', 'src/**', 'test/**'], ['tests:watch']);
});
