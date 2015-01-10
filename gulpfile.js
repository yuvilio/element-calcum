

var gulp = require('gulp');
var deployGh = require('gulp-gh-pages');


//generate docs
gulp.task('docs', function () {
  return gulp.src('README.md')
  .pipe(markdown())
  .pipe(gulp.dest('dist/doc'));
});

//deploy docs to Github Pages
gulp.task('deploy-gh-pages',  function() {

  console.log('deploy-gh-pages');

});
