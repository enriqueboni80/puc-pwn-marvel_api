var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('sass', function() {
    return gulp.src('src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('public/stylesheets'))
});

//task para o watch
gulp.task('watch', function() {
    gulp.watch('src/scss/*.scss', gulp.series('sass'));
});

//task default gulp
//gulp.task('default', gulp.parellel('watch', 'login'));
gulp.task('default', gulp.series('sass', 'watch'));