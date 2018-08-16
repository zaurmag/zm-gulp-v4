'use strict';

global.$ = {
    path: {
        task: require('./gulp/path/tasks.js')
    },
    gulp: require('gulp'),
    del: require('del'),
    browserSync: require('browser-sync').create(),
    plugins: require('gulp-load-plugins')({
        overridePattern: true,
        pattern: '*'
    })
};

$.path.task.forEach(function(taskPath){
    require(taskPath)();
});

$.gulp.task('build', $.gulp.series(
    'spriteSvg:build',
    $.gulp.parallel(
        'pug:build',
        'style:build',
        'styleDev:build',
        'js:build',
        'img:build',
        'spriteImg:build'
        // 'fonts:build'
    ))
);
$.gulp.task('default', $.gulp.series(
    'build',
    $.gulp.parallel(
    'watch',
    'bsync'
)));