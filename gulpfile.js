var gulp = require('gulp');
var path = require('path');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var open = require('gulp-open');

var Paths = {
  HERE: './',
  DIST: 'public/',
  CSS: './public/css/',
  SCSS_TOOLKIT_SOURCES: './public/scss/material-kit.scss',
  SCSS: './public/scss/**/**'
};

gulp.task('compile-scss', function() {
  return gulp.src(Paths.SCSS_TOOLKIT_SOURCES)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write(Paths.HERE))
    .pipe(gulp.dest(Paths.CSS));
});

gulp.task('watch', function() {
  gulp.watch(Paths.SCSS, gulp.series('compile-scss'));
});

gulp.task('open', function() {
  console.log('Gulp tasks running...')
});

gulp.task('open-app', gulp.parallel('open', 'watch'));

// start app
const app = require('./index');
app.set('port', process.env.PORT || 5000);
const server = app.listen(app.get('port'), () => {
 console.log(`Now Listening on port ${server.address().port}`);
});

module.exports = gulp;
