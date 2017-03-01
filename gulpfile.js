var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync');

var reload = browserSync.reload;
var exec = require('child_process').exec;

//Run Flask server
gulp.task('runserver', () => {
    // Check for errors of python script to avoid empty browserSync running.
    var error = false;
    var proc = exec('python app.py', function(err, stdout, stderr){
        console.log(stdout);
        console.log(stderr);
        error = false;
    });
    if(!error){
        // No errors, run browserSync
        gulp.start('browser-sync');
    }
});

gulp.task('browser-sync', function() {
  browserSync({
    notify: false,
    proxy: "127.0.0.1:5003",
  });
});

gulp.task('start', () => {
    gulp.watch(['**/*.py', 'templates/**/*.html', '!env', '!node_modules'], browserSync.reload);
});

gulp.task('default', ['start', 'runserver']);
