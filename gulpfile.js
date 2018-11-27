var gulp = require('./node_modules/gulp');
var uglify = require('./node_modules/gulp-terser');
var del = require('./node_modules/del');
var sass = require('./node_modules/gulp-sass');
var concat =require('./node_modules/gulp-concat'); 
var cleanCSS = require('gulp-clean-css');
const workboxBuild = require('workbox-build');
sass.compiler = require('node-sass');


gulp.task('copyFolders',function(){
  return gulp.src(['./src/**/*','!./src/**/scss','!./src/**/scss/*','!./src/**/js','!./src/**/js/*'])
  .pipe(gulp.dest('./build'))
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
gulp.task('cleanAll',function(){
  return del('./build/**/*')
});

gulp.task('service-worker', () => {
  return workboxBuild.generateSW({
    globDirectory: 'build',
    globPatterns: [
      '**\/*.{html,json,js,css,png}',
    ],
    clientsClaim: true,
    skipWaiting: true,
    swDest: 'build/sw.js',
  });
});
gulp.task('default', gulp.series('cleanAll','copyFolders','buildScripts','buildStyles','service-worker'));