const { src, dest } = require('gulp');
const plumber = require('gulp-plumber');
const linter = require('gulp-eslint');
const concat = require('gulp-concat');
const order = require('gulp-order');
const babel = require('gulp-babel');

const config = require('../gulp.config');

function js () {
    return src(config.src.file.js)
        .pipe( plumber() )
        .pipe( order(config.js.order) , { base: './' })
        .pipe( linter.format() )
        .pipe( babel() )
        .pipe( concat('bundle.js') )
        .pipe( dest(config.tmp.folder.js) );
}

module.exports = js;