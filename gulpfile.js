var gulp = require('gulp');
var livereload = require('gulp-livereload');
var browserify = require('gulp-browserify');
var serveStatic = require('serve-static');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');

var connect = require('connect');
var server = connect();
var dest = 'dist';

gulp.task('browserify', function() {
    gulp.src('src/js/index.js')
      .pipe(browserify({transform: 'reactify'}))
      .pipe(concat('index.js'))
      .pipe(gulp.dest(dest + '/js'));
});

gulp.task('css', function () {
  gulp.src('src/**/main.css')
      .pipe(minifyCSS({keepBreaks: true}))
      .pipe(gulp.dest(dest));
});

gulp.task('copy', function() {
    gulp.src('src/index.html')
      .pipe(gulp.dest('dist'));
});

gulp.task('build', ['browserify', 'copy', 'css']);
gulp.task('default', ['build']);

gulp.task('server', function(next) {
    server.use(serveStatic(dest)).listen(3000, next);
});

gulp.task('watch', ['server'], function() {
    gulp.watch('src/**/*.*', ['default']).on('change', livereload.changed);
});

