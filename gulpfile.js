
const gulp = require('gulp')
const {parallel, series} = require('gulp')
const htmlmin = require('gulp-htmlmin')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const image = require('gulp-imagemin')
const babel = require('gulp-babel')
const browserSync = require('browser-sync').create()
const reload = browserSync.reload


function tarefasCSS(cb) {
    return gulp.src([
            './node_modules/bootstrap/dist/css/bootstrap.css', 
            './vendor/OwlCarousel2-2.3.4/dist/assets/owl.carousel.css', 
            './node_modules/font-awesome/css/font-awesome.css',
            './src/css/style.css'
        ])
        .pipe(concat('libs.css'))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'})) //libs.min.css
        .pipe(gulp.dest('./dist/css'))
}

function tarefasJS() {
    return gulp.src([
            './node_modules/jquery/dist/jquery.js',
            './node_modules/bootstrap/dist/js/bootstrap.js',
            './vendor/OwlCarousel2-2.3.4/dist/owl.carousel.js',
            './src/js/custom.js'
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

gulp.task('serve', function(){

    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    })
    gulp.watch('./src/**/*').on('change', process) // repete o processo quando alterar algo em src
    gulp.watch('./src/**/*').on('change', reload)

})


function end(cb){
    console.log('Tarefas Concluídas')
    return cb()
}

const process = series( tarefasHTML, tarefasJS, tarefasCSS, end)

exports.default = process
exports.styles = tarefasCSS
exports.scripts = tarefasJS
exports.html = tarefasHTML
exports.images = tarefasImagem

