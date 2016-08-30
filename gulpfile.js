/**
 * Gulp任务管理
 * 2016年8月29日12:35:02
 * Created by Leon on 2016/8/29.
 */

var path = require('path');
var gulp = require('gulp');
var rimraf = require('rimraf');
var models = require('./models');

// 数据库初始任务
gulp.task('database', function (callback) {
    models.sequelize.sync({force: true}).then(function () {
        console.log('数据库初始完毕...');
        models.sequelize.close();
        callback();
    });
});

// 清空静态资源
gulp.task('clean:static', function (callback) {
    rimraf('./public/', callback);
});

// 全局清空任务
gulp.task('clean', ['clean:static'], function () {
    console.log('执行清空任务完毕');
});

// 复制静态资源
gulp.task('copy:static', function () {
    return gulp.src(path.join(__dirname, 'builder/public/**'))
        .pipe(gulp.dest('./public'));
});

// 复制React编译后的资源文件
gulp.task('copy:react', function () {
    return gulp.src(path.join(__dirname, 'builder/dist/*'))
        .pipe(gulp.dest('./public/app'));
});

gulp.task('copy', ['copy:static', 'copy:react'], function () {
    console.log('复制任务执行完毕');
});