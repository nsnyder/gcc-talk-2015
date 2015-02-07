var gulp = require('gulp');
var browserSync = require('browser-sync');

var files = [
  'index.html',
  'demos/**/*.*',
  'examples/**/*.*',
  'images/**/*.*',
  'scripts/**/*.js',
  'styles/**/*.css'
];

gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: './'
    },
    notify: false,
    snippetOptions: {
      ignorePaths: ['node_modules/**/*.html', 'demos/**/*.html']
    }
  });

  gulp.watch(files).on('change', function(e) {
    browserSync.reload(e.path);
  });
});

gulp.task('default', ['serve']);
