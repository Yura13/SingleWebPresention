var gulp = require("gulp"),
    minifyCSS = require("gulp-minify-css"),
    uglify = require("gulp-uglify"),
    concat = require("gulp-concat"),
    inject = require("gulp-inject");

var path = {
    scripts: ["app/**/*.js"],
    css:["app/**/*.css"],
    vendorJS: [
        "bower_components/angular/angular.min.js",
        "bower_components/angular-ui-router/release/angular-ui-router.min.js",
        "bower_components/angular-animate/angular-animate.min.js",
        "bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js",
        "bower_components/angular-aria/angular-aria.min.js",
        "bower_components/angular-material/angular-material.min.js"
    ],
    vendorCSS: [
        "bower_components/bootstrap/dist/css/bootstrap.min.css",
        "bower_components/font-awesome/css/font-awesome.min.css",
        "bower_components/angular-material/angular-material.min.css"
    ],
    fonts: [
        "bower_components/bootstrap/fonts/**.*",
        "bower_components/font-awesome/fonts/**.*"
    ],
    images: ["assets/images/*.jpg"],
    distSrc: ["dist/css/vendor.min.css", "dist/css/style.min.css",
        "dist/js/vendor.min.js", "dist/js/script.min.js"],
    index: ["index.html"]
};

gulp.task("default", ["minifyCSS", "uglify", "vendorCSS", "vendorJS", "distFonts"], function() {

});

gulp.task("minifyCSS", function () {
    return gulp.src(path.css)
        .pipe(minifyCSS())
        .pipe(concat("style.min.css"))
        .pipe(gulp.dest("dist/css"));
});

gulp.task("uglify", function () {
    return gulp.src(path.scripts)
        .pipe(uglify())
        .pipe(concat("script.min.js"))
        .pipe(gulp.dest("dist/js"));
});

gulp.task("vendorCSS", function() {
    return gulp.src(path.vendorCSS)
        .pipe(concat("vendor.min.css"))
        .pipe(gulp.dest("dist/css"));
});

gulp.task("vendorJS", function() {
    return gulp.src(path.vendorJS)
        .pipe(concat("vendor.min.js"))
        .pipe(gulp.dest("dist/js"));
});

gulp.task("distFonts", function() {
    return gulp.src(path.fonts)
        .pipe(gulp.dest("dist/fonts"));
});

gulp.task("distImage", function() {
    return gulp.src(path.images)
        .pipe(gulp.dest("dist/images"));
});

gulp.task("index", function () {
    gulp.src(path.index)
        .pipe(inject(gulp.src(path.distSrc, {read: false})))
        .pipe(gulp.dest(""));
});