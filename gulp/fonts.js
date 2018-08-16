var path = require('./path/path.js');
module.exports = function () {
    $.gulp.task('fonts:build', function () {
        $.gulp.src(path.path.src.fonts)
            .pipe($.plugins.changed(path.path.build.fonts))
            .pipe($.gulp.dest(path.path.build.fonts))
    });
};