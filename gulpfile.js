var gulp = require('gulp'),
    uglify = require('gulp-uglify');

// Uglify 
gulp.task('scripts', function() {
  gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/js'))
});

gulp.task('handlechange', function() {
  console.log('something changed')
});

gulp.task('watch', function() {
    gulp.watch('js/*.js', ['scripts','handlechange'])
});

gulp.task('default', ['watch']);