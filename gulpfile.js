const sprite = require('./gulp/sprite');
const inject = require('./gulp/inject');
const watch = require('./gulp/watch');
const tmp = require('./gulp/tmp');
const build = require('./gulp/build');
const clean = require('./gulp/clean');
const cleanTmp = require('./gulp/clean_tmp');

exports.sprite = sprite;
exports.inject = inject;
exports.watch = watch;
exports.tmp = tmp;
exports.build = build;
exports.clean = clean;
exports.clean_tmp = cleanTmp;