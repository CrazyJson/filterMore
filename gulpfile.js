var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');

//压缩css
gulp.task('minifycss', function() {
    return gulp.src('src/css/*.css')      //压缩的文件
        .pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
        .pipe(minifycss())  //执行压缩
        .pipe(gulp.dest('dist/css'));   //输出文件夹
});

//压缩js
gulp.task('minifyjs', function() {
    return gulp.src('src/filterMore.js')
        .pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
        .pipe(uglify({
            preserveComments: 'license' //保留license注释
        }))    //压缩
        .pipe(gulp.dest('dist'));  //输出
});

//默认命令，在cmd中输入gulp后，执行的就是这个命令
gulp.task('default', function() {
    gulp.start('minifycss', 'minifyjs');
});