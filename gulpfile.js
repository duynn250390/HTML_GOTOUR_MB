var gulp = require('gulp'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect'),
    rename = require('gulp-rename'),
    minifyCss = require('gulp-cssnano'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    fileinclude = require('gulp-file-include');

// // compile task
// var gulp = require('gulp');
// var sass = require('gulp-sass');
// var browserSync = require('browser-sync');


gulp.sources = {
    build: './build',
    layout: './layout',
    public: './public'
};


// compile task
gulp.task('sass', function () {
    gulp.src(gulp.sources.build + '/scss/**/*.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(minifyCss())
        .pipe(rename('style.css'))
        .on('error', swallowError)
        .pipe(gulp.dest('public/css'))
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
        .pipe(gulp.dest('./'))
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
    gulp.watch(gulp.sources.layout + '/*.html', ['fileinclude']);
    gulp.watch(gulp.sources.build + '/scss/*.scss', ['sass']);
    gulp.watch('/*.html', ['fileinclude']);
    gulp.watch('*.html')
        .on('change', browserSync.reload);
})

// skip if error occured
function swallowError(error) {
    console.log(error.toString())
    this.emit('end')
}