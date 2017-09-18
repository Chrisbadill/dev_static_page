const gulp= require("gulp");
const browserSync= require("browser-sync").create();

gulp.task('serve', () => {
    browserSync.init({
        server: "./app/dist/slider/"
    });

    gulp.watch("./app/dist/slider/*.html",['html']);
    gulp.watch("./app/dist/slider/*.js",['html']);
    gulp.watch("./app/dist/slider/*.css",['css']);
});

gulp.task('css',() => {
  gulp.src("./app/dist/slider*.css")
  .pipe(browserSync.reload())
});

gulp.task('html',() => {
  browserSync.reload();
});



gulp.task('default', ['serve']);
