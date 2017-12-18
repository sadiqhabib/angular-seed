'use strict';

/**
 * Dependencies
 */
const gulp = require('gulp');
const build = require('../build');

/**
 * Copy assets
 */
module.exports = function copyFonts() {
  return gulp
    .src(build.SRC_FONTS)
    .pipe(gulp.dest(build.DEST_FONTS));
};
