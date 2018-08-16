module.exports = function() {
    $.gulp.task('bsync', function() {
        $.browserSync.init({
            server: './build'
        });
    });
};