gulp = require 'gulp'
concat = require 'gulp-concat'

gulp.task 'default', ['js']

gulp.task 'js', ->
  gulp.src ['*.js', 'durandal/**/*.js']
    .pipe concat 'dist.js'
    .pipe gulp.dest './'