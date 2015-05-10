var gulp = require('gulp');
var gutil = require('gulp-util'); 
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var watchify = require('watchify');
var browserify = require('browserify');
var babelify = require('babelify');

var bundler = watchify(browserify(watchify.args).transform(babelify));

gulp.task('build', build);

gulp.task('watch', function() {
    bundler.add('./lib/bellavista.es6');
    bundler.on('update', build);
    bundler.on('log', gutil.log);
    build();
});

function build() {
    bundler.bundle()
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(source('bellavista.js'))
        // Sourcemaps
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist'));
}

gulp.task('default', ['build']);