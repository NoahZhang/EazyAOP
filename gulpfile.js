'use strict'

var gulp = require('gulp'),
mocha = require('gulp-mocha');

gulp.task('test', function() {
  return gulp.src('test/index.js', {read: false})
    .pipe(mocha());
});


