'use strict';

var config         = require('../config');
var gulp           = require('gulp');
var jade           = require('gulp-jade');
var inject         = require('gulp-inject');
var browserSync  = require('browser-sync');

// Views task
gulp.task('index.html', ['scripts'], function() {
  var sources = gulp.src(['build/**/*.js', 'build/**/*.css'], {read: false});

  // Put our index.html in the dist folder
  gulp.src('src/index.jade')
    .pipe(inject(sources, {ignorePath: '/build'}))
    .pipe(jade({
      compilerOpts: {format: 'html5'}
    }))
    .pipe(gulp.dest('build'));
});
