/* Modules */

var gulp     = require('gulp');
//var stylus   = require('gulp-stylus');
var prefixer = require('gulp-autoprefixer');
var pixrem   = require('gulp-pixrem');
var concat   = require('gulp-concat');
var minify   = require('gulp-minify-css');
var rename   = require('gulp-rename');
var exec     = require('gulp-exec');

/* Tasks */

gulp.task('css', function() {
  return gulp.src('_assets/css/*.css')
    //.pipe(prefixer('last 2 versions'))
    //.pipe(pixrem())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('css/'))
    .pipe(minify())
    .pipe(gulp.dest('css/'));
});

gulp.task('img', function() {
  return gulp
    .src('_assets/img/*')
    .pipe(gulp.dest('img/'));
});

gulp.task('serve', function() {
  var jekyll = [
    'jekyll serve',
    '--watch',
    '--config',
    '_config.yml,_local.yml'
  ].join(' ');
  gulp.src('./').pipe(exec(jekyll));
});

gulp.task('watch', function() {
  gulp.watch('_assets/css/*.css', ['css']);
});

gulp.task('default', [
  'css',
  'img',
  'serve',
  'watch'
]);
