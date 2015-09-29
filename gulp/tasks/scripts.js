var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var concat       = require('gulp-concat');
var gulpif       = require('gulp-if');
var handleErrors = require('../util/handleErrors');
var config       = require('../config').scripts;
var autoprefixer = require('gulp-autoprefixer');
var mainBowerFiles = require('main-bower-files');
var sourcemaps   = require('gulp-sourcemaps');

gulp.task('scripts', function () {
  return gulp.src(mainBowerFiles({filter: '**/*.js'}).concat(config.src))
    .pipe(sourcemaps.init())
    .pipe(concat('app.js')) 
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.dest))
    .pipe(gulpif(browserSync.active, browserSync.reload({ stream: true })));
}); 
