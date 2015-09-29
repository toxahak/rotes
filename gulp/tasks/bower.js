var gulp = require('gulp');
var concat           = require('gulp-concat');
var gulpFilter       = require('gulp-filter');
var less       = require('gulp-less');
var mainBowerFiles   = require('main-bower-files');
var path = require('path');

gulp.task('bower', function () { 
    var lessFilter = gulpFilter('**/*.{less,css}');
    return gulp.src(mainBowerFiles({
        includeDev: true
    }))  
    .pipe(lessFilter)
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(concat('libs.css'))
    .pipe(gulp.dest('./build'));
});
