var gulp = require('gulp');
var browserSync = require('browser-sync');

var files = [
  'index.html',
  'demos/**/*',
  'examples/**/*',
  'images/**/*',
  'scripts/**/*.js',
  'styles/**/*.css'
];

gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: './'
    }
  });

  gulp.watch(files).on('change', function(e) {
    browserSync.reload(e.path);
  });
});

gulp.task('default', ['serve']);
