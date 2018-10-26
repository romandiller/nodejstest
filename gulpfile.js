const gulp = require('gulp');
const cssnano = require('gulp-cssnano');
const plumber = require('gulp-plumber');
const concat = require('gulp-concat');

gulp.task('css', () => {
    gulp
        .src('src/css/*.css')
        .pipe(plumber())
        .pipe(cssnano())
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('public/stylesheets'));
});

gulp.task('default', ['css']);