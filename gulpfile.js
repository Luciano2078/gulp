
const gulp = require('gulp')
const {series} = require('gulp')
const htmlmin = require('gulp-htmlmin')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const image = require('gulp-imagemin')
const html = require('gulp-htmlmin')


function tarefasCSS(cb) {
    return gulp.src([
            '../node_modules/bootstrap/dist/css/bootstrap.css', 
            '../vendor/OwlCarousel2-2.3.4/dist/assets/owl.carousel.css', 
            '../node_modules/font-awesome/css/font-awesome.css',
            'css/style.css',
        ])
        .pipe(concat('libs.css'))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'})) //libs.min.css
        .pipe(gulp.dest('./dist/css'))
}

function tarefasJS() {
    return gulp.src([
        '../node_modules/jquery/dist/jquery.js',
        '../node_modules/bootstrap/dist/js/bootstrap.js',
        '../vendor/OwlCarousel2-2.3.4/dist/owl.carousel.js',
        '.js/custom.js',
    ])
        .pipe(concat('libs.js'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'})) //libs.min.js
        .pipe(gulp.dest('./dist/js'))
}

function tarefasImagem(){
    
    return gulp.src('./src/images/*')
        .pipe(image({
            pngquant: true,
            optipng: false,
            zopflipng: true,
            jpegRecompress: false,
            mozjpeg: true,
            gifsicle: true,
            svgo: true,
            concurrent: 10,
            quiet: true
        }))
        .pipe(gulp.dest('./dist/images'))
}

function tarefasHTML(callback) {
    gulp.src('./src/**/*.html')    
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dist'))
    
    return callback()
}


exports.styles = tarefasCSS
exports.scripts = tarefasJS
exports.images = tarefasImagem
exports.html = tarefasHTML
