var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    plumber = require('gulp-plumber'),
    browserSync = require('browser-sync');

var reload = browserSync.reload;
var exec = require('child_process').exec;

// Uglify 
gulp.task('scripts', function() {
  gulp.src('js/*.js')
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest('build/js'))
});

//Run Flask server
gulp.task('runserver', function() {
   
    var proc = exec('python app.py');
});

// Watch Files For Changes & Reload, the default task
gulp.task('default', ['runserver'], function () {
  browserSync({
    notify: false,
    proxy: "127.0.0.1:5003"
  });
 
  gulp.watch(['templates/*.*'], reload);

});