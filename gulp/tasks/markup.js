var gulp = require('gulp');
var jade = require("gulp-jade");
var config = require('../config').markup;
var browserSync  = require('browser-sync'); 

gulp.task('markup', function() {
  return gulp.src(config.src)
  	.pipe(jade()) 
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});
