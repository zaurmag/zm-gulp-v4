var path = require('./path/path.js');
module.exports = function () {
    $.gulp.task('watch', function() {
        $.gulp.watch(path.path.src.pug, $.gulp.parallel('pug:build'));
        $.gulp.watch(path.path.watch.style, $.gulp.parallel('style:build'));
        $.gulp.watch(path.path.src.js, $.gulp.parallel('js:build'));
        $.gulp.watch(path.path.src.img, $.gulp.parallel('img:build'));
        $.gulp.watch(path.path.src.pngIcons, $.gulp.parallel('spriteImg:build'));
    });
};