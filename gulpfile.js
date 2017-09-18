const gulp= require("gulp");
const browserSync= require("browser-sync").create();

gulp.task('serve', () => {
    browserSync.init({
        server: "./dist/"
    });

    gulp.watch("./dist/*.html",['html']);
    gulp.watch("./dist/js/*.js",['html']);
    gulp.watch("./dist/css/*.css",['css']);
});

gulp.task('css',() => {
  gulp.src("./dist/css/*.css")
  .pipe(browserSync.reload())
});

gulp.task('html',() => {
  browserSync.reload();
});



gulp.task('default', ['serve']);
