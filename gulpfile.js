

var gulp = require('gulp');
var deployGh = require('gulp-gh-pages');


gulp.task('deploy-gh-pages', function () {

  var options = {};
  return gulp.src('./dist/doc/**/*')
  .pipe(deployGh(options));
});

//deploy docs to Github Pages
gulp.task('deploy-gh-pages',  function() {

  console.log('deploy-gh-pages');

});
