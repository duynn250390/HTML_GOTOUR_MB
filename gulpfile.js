var gulp = require('gulp'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect'),
    rename = require('gulp-rename'),
    minifyCss = require('gulp-cssnano'),
    browserSync = require('browser-sync'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    autoprefixer = require('gulp-autoprefixer'),
    beautify = require('gulp-beautify'),
    prettyHtml = require('gulp-pretty-html'),
    fileinclude = require('gulp-file-include');

// // compile task
// var gulp = require('gulp');
// var sass = require('gulp-sass');
// var browserSync = require('browser-sync');


gulp.sources = {
    build: './build',
    layout: './layout',
    public: './public',
    dist: './dist'
};

// compile JS
gulp.task('js', function () {
    gulp.src(gulp.sources.build + '/js/*.js')
        .pipe(gulpif(uglify(), beautify()))
        .pipe(gulp.dest(gulp.sources.dist + '/public/js'))
        .pipe(browserSync.stream());
});
// compile task
gulp.task('scss', function () {
    gulp.src(gulp.sources.build + '/scss/**/*.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        // .pipe(minifyCss())
        .pipe(rename('style.css'))
        .on('error', swallowError)
        .pipe(gulp.dest(gulp.sources.dist + '/public/css'))
        // .pipe(gulp.dest(function (f) {
        //     return f.base;
        // }))
        .pipe(browserSync.stream());
});
// compile task
// gulp.task('build_html', function () {
//     gulp.src(gulp.sources.layout + '/**/*.html')
//         .pipe(fileinclude({
//             prefix: '@@',
//             basepath: '@file'
//         }))
//         .pipe(browserSync.stream());
// });
// Include HTML
gulp.task('fileinclude', () => {
    gulp.src(gulp.sources.build + '/*.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(prettyHtml())
        .pipe(gulp.dest(gulp.sources.dist))
        .pipe(browserSync.stream());
});
gulp.task('tem_fileinclude', () => {
    gulp.src(gulp.sources.layout + '/*.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(browserSync.stream());
});



// browser sync init
gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

// watch for changes in html, css, scss
gulp.task('default', ['browser-sync'], function () {
    gulp.watch(gulp.sources.build + '/*.html', ['fileinclude']);
    gulp.watch(gulp.sources.layout + '/*.html', ['tem_fileinclude','fileinclude']);
    gulp.watch(gulp.sources.build + '/scss/*.scss', ['scss']);
    // gulp.watch('/*.html', ['fileinclude']);
    gulp.watch(gulp.sources.build + '/js/*.js', ['js']);
    gulp.watch('*.html')
        .on('change', browserSync.reload);
})

// skip if error occured
function swallowError(error) {
    console.log(error.toString())
    this.emit('end')
}