var gulp = require('./node_modules/gulp');
var uglify = require('./node_modules/gulp-terser');
var del = require('./node_modules/del');
var sass = require('./node_modules/gulp-sass');
var concat =require('./node_modules/gulp-concat'); 
var cleanCSS = require('gulp-clean-css');
sass.compiler = require('node-sass');


gulp.task('copyFolders',function(){
  return gulp.src('./src/lessons/**/*.*')
  .pipe(gulp.dest('./build/lessons'))
})
gulp.task('buildScripts', function () {
  return gulp.src('./src/js/*.js')    
    .pipe(uglify())
    .pipe(gulp.dest('./build/js/'))
});
gulp.task('buildStyles',function(){
  return gulp.src('./src/scss/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(concat('main.css'))
  .pipe(cleanCSS())
  .pipe(gulp.dest('./build/css'));
});
gulp.task('cleanScripts',function(){
  return del('./build/js/**/*.*')
});
gulp.task('cleanStyles',function(){
  return del('./build/css/**/*.*')
});
gulp.task('default', gulp.series('cleanScripts','cleanStyles','copyFolders','buildScripts','buildStyles'));