

var gulp = require('gulp');
var deployGh = require('gulp-gh-pages');


gulp.task('deploy-gh-pages', function () {

  // var options = {
  //   remoteUrl: '/'
  // };
  return gulp.src('./dist/**/*')
  .pipe(deployGh());
});
