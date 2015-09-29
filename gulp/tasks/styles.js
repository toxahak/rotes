var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var concat       = require('gulp-concat');
var gulpif         = require('gulp-if');
var sass         = require('gulp-ruby-sass');
var handleErrors = require('../util/handleErrors');
var config       = require('../config').sass;
var mainBowerFiles   = require('main-bower-files');
var autoprefixer = require('gulp-autoprefixer'); 

gulp.task('styles', function () {
  return gulp.src(mainBowerFiles({filter: '**/*.css'}).concat(config.src))
    .pipe(gulpif('**/*.sass',sass(config.settings)))
    .on('error', handleErrors) 
    .pipe(concat('styles.css'))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
}); 
