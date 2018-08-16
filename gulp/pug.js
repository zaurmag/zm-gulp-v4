var path = require('./path/path.js');
module.exports = function () {
    $.gulp.task('pug:build', function() {
        return $.gulp.src(path.path.src.pug)
            .pipe($.plugins.plumber())
            .pipe($.plugins.pug2({
                pretty: true
            }))
            .pipe($.gulp.dest(path.path.build.html))
            .on('end', $.browserSync.reload);
    });
};
