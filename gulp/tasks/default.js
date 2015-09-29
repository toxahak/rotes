var gulp = require('gulp');

gulp.task('default', function() {
    gulp.start('styles', 'scripts', 'markup', 'watch');
});
