const { src, dest } = require('gulp');
const through2 = require('through2');

function task(cb) {
	src("src/**/**.gulp.js", {buffer:true})
    // Instead of using gulp-uglify, you can create an inline plugin
    .pipe(through2.obj(function(file, _, cb) {
      if (file.isBuffer()) {
        const code = file.contents.toString()+"/*HOLY SHIT BABE!*/";
        file.contents = Buffer.from(code);
      }
      cb(null, file);
    }))
    .dest("src/");
	cb();
}
exports.autogroup = task
