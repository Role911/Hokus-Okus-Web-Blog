var gulp = require('gulp'),
    concat = require('gulp-concat'),
    less = require('gulp-less'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    connect = require('gulp-connect'),
    notify = require("gulp-notify"),
    filter = require('gulp-filter'),
    cleanCSS = require('gulp-clean-css'),
    cssImport = require('gulp-cssimport'),
    mainBowerFiles = require('main-bower-files'),
    sourcemaps = require('gulp-sourcemaps'),
    ngAnnotate = require('gulp-ng-annotate'),
    ngHtml2Js = require("gulp-ng-html2js"),
    path = require('path');



gulp.task('default', [ 'less-files','watch', 'connect']);

gulp.task('less-files', function () {
    return gulp.src('less/style.less')
        .pipe(less())
        .pipe(cssImport())
        .pipe(concat('app.css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(cleanCSS())
        .pipe(gulp.dest('public/css'))
        .pipe(notify("less-files task done!"))
        .pipe(connect.reload());
});


gulp.task('connect', function () {
    connect.server({
        root: 'public',
        proxy: 'localhost',
        port: 9000,
        fallback: 'public/index.html',
        livereload: true
    });
});

gulp.task('watch', function() {
      gulp.watch(['less/**/*.less'], ['less-files']);
});