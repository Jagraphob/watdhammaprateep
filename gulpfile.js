var gulp = require('gulp');
var $ = require('gulp-load-plugins')({ lazy: true });
var del = require('del');
var wiredep = require('wiredep').stream;


gulp.task('build', ['build-css', 'build-html', 'build-fonts', 'build-images', 'build-js-map'], function(){
    return gulp
        .src('index.html')
        .pipe($.debug())
        .pipe($.plumber())
        .pipe($.useref({ searchPath: './'}))
        .pipe(gulp.dest('./public/'))
});

gulp.task('build-js-map', ['build-css-map'], function(){
    return gulp
        .src([
            './bower_components/angular-bootstrap-calendar/dist/js/angular-bootstrap-calendar-tpls.min.js.map',
        ])
        .pipe(gulp.dest('./public/styles/'))
});

gulp.task('build-css-map', ['clean-map'], function(){
    return gulp
        .src([
            './bower_components/bootstrap/dist/css/bootstrap.css.map',
        ])
        .pipe(gulp.dest('./public/styles/'))
});

gulp.task('build-css', ['clean-css'], function(){
    return gulp
        .src('./app/content/*.css')
        .pipe(gulp.dest('./public/app/content/'))
});

gulp.task('build-html', ['clean-html'], function(){
    return gulp
        .src('./app/**/*.html')
        .pipe(gulp.dest('./public/app/'))
});

gulp.task('build-fonts', ['build-lib-fonts','clean-fonts'], function(){
    return gulp
        .src('./app/content/fonts/**.*')
        .pipe(gulp.dest('./public/app/content/fonts/'))
});

gulp.task('build-lib-fonts', function(){
    return gulp
        .src([
            './bower_components/font-awesome/fonts/*.*',
            './bower_components/bootstrap/dist/fonts/*.*'
        ])
        .pipe(gulp.dest('./public/fonts/'))
});

gulp.task('build-images', ['clean-images'], function(){
    return gulp
        .src('./app/content/images/**.*')
        .pipe($.imagemin({ optimizationLevel: 4}))
        .pipe(gulp.dest('./public/app/content/images/'))
});

gulp.task('clean-build', function() {
    var files = [].concat(
        './.tmp/**/*.html',
        './public/*.html',
        './public/js/**/*.js'
    );
    del(files);
});

gulp.task('clean-map'), function(){
    del('./public/**/*.map')
}

gulp.task('clean-html', function(){
    del('./public/app/**/*.html')
});

gulp.task('clean-css', function() {
    del('./public/app/content/*.css');
});

gulp.task('clean-fonts', function() {
    del([
        './public/app/content/fonts/**.*',
        './public/fonts/*.*'
    ]);
});

gulp.task('clean-images', function() {
    del('./public/app/content/images/**.*');
});
