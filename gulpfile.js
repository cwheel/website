var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	minifycss = require('gulp-minify-css'),
	concat = require('gulp-concat')
	livereload = require('gulp-livereload'),
	webserver = require('gulp-webserver');

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      open: true,
      host: '0.0.0.0',
      fallback: 'index.html'
    }));
});

gulp.task('scss', function() {
  return gulp.src('scss/**/*.scss')
    .pipe(sass())
    .pipe(minifycss())
    .pipe(autoprefixer())
    .pipe(concat('app.css'))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
  	gulp.watch('scss/**/*.scss', ['scss']);
});

gulp.task('default', ['webserver', 'scss', 'watch'], function() {});