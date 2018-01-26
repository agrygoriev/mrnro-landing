const gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    cssnext = require('postcss-cssnext'),
    cssnano = require('cssnano'),
    concatcss = require('gulp-concat-css'),
    imgmin = require('gulp-imagemin'),
    // minify = require('gulp-minify'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    watch = require('gulp-watch'),
    // uglify = require('gulp-uglify'),
    // gulpIf = require('gulp-if'),
    // useref = require('gulp-useref');
    uncss = require('postcss-uncss');
    // modules = './node_modules';
var paths = {
    scripts: [
        './js/*.js'
    ],
    styles: [
        './*.css',
        './css/*.css'
    ],
    layout: [
        './*.html'
    ]
};
gulp.task('css', function() {
    var plugins = [
        // uncss({
        //     html: ['index.html']
        // }),
        cssnext({
            browsers: ['last 5 versions', '> 1%', 'ie 11']
        }),
        cssnano()
    ];
    return gulp.src('./css/**/*.css')
        .pipe(concatcss('./style.min.css'))
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./dist/css'))
});
gulp.task('js', function(){
    return gulp.src('./js/*.js')
    // .pipe(uglify())
    .pipe(gulp.dest('./dist/js/'))
});
gulp.task('html', function() {
    return gulp.src('./*.html')
        .pipe(gulp.dest('./dist'));
});
gulp.task('img', function () {
    return gulp.src('./images/landing/**/*.{jpg,jpeg,png,gif,svg}')
        .pipe(gulp.dest('./dist/img/landing'))
});
gulp.task('img:build', function () {
    return gulp.src('./images/landing/**/*.{jpg,jpeg,png,gif,svg}')
        .pipe(imgmin())
        .pipe(gulp.dest('./dist/img/landing'))
});
gulp.task('serve', function() {
    browserSync.init({
        server: {
        baseDir: "./dist"
    }});
    gulp.watch(paths.styles, ['css']);
    gulp.watch(paths.scripts, ['js']);
    gulp.watch(paths.layout, ['html']);
    gulp.watch('./dist/*.html').on('change', reload);
    gulp.watch('./dist/js/*.js').on('change', reload);
    gulp.watch('./dist/css/*.css').on('change', reload);
    // gulp.watch('./dist/img/**').on('change', reload);
});
gulp.task('build', ['img','css','js','html']);