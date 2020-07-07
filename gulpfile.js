var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('dist/scss/style.scss')
      .pipe(sass()) // Using gulp-sass
      .pipe(gulp.dest('dist/css'))
  });


gulp.task('watch', function(){
    gulp.watch('dist/scss/*.scss', gulp.series('sass'));
    // Other watchers
  })