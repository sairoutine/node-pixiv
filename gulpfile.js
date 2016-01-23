'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var path = require('path');

gulp.task('lint', function() {
	return gulp.src([
		path.join(__dirname, '/*.js'),
		path.join(__dirname, '/test/*.js')
	 ],
	{
		base: './'
	})
	.pipe(jshint())
	.pipe(gulp.dest('.'));
});

gulp.task('test', function() {
	return gulp.src(['test/*.js'], { read: false })
	.pipe(mocha({ reporter: 'list'}));
});

