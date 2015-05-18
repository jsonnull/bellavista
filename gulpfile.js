var gulp = require('gulp');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var watchify = require('watchify');
var browserify = require('browserify');
var babelify = require('babelify');
var jasmine = require('gulp-jasmine');

gulp.task('build', function() {
    var bundle = browserify({ cache: {}, packageCache: {}, debug: true });

    bundle.add('./lib/bellavista.es6');
    bundle.on('error', console.log);

    build(bundle);
});

gulp.task('watch', function() {
    var bundle = browserify({ cache: {}, packageCache: {}, debug: true });
    bundle = watchify(bundle);

    bundle.add('./lib/bellavista.es6');

    bundle.on('log', console.log);
    bundle.on('error', console.log);

    bundle.on('update', function() {
        build(bundle);
    });

    build(bundle);
});

gulp.task('test', function() {
    return gulp.src('spec/**/*[sS]pec.js')
        .pipe(jasmine());
});

function build(bundle) {
    bundle
        .transform(babelify)
        .bundle()
        .pipe(source('bellavista.js'))
        // Sourcemaps
        .pipe(buffer())
            .pipe(sourcemaps.init({loadMaps: true}))
            .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist'));
}

gulp.task('default', ['build']);
