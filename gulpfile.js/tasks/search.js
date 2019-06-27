const { src, dest } = require('gulp');
const through2 = require('through2');

async function task(cb) {

  let tasks = [];

	await src("src/**/**.gulp.js", {buffer:true})
    // Instead of using gulp-uglify, you can create an inline plugin
  .pipe(through2.obj(function(file, _, cb) {
    if (file.isBuffer()) {
      tasks.push(file.path);
    	// const fileName = file.path.match(/(?:\w*(?=(?:\.\w*)*$))(?!=\/)/);
      // const code = file.contents.toString();
    }
    cb(null, file);
  }));

  let impo = "const {parallel} = require('gulp')\n";
  let expo = `exports.auto = parallel(`;
  //imports
  for(i in tasks){
    impo+=`const p${i} = require("${tasks[i]}");\n`;
    expo+=(i===0? "": ",")+`p${i}`;
  }
  //exports
  expo+=");"
  let generatedCode = impo + expo;
  require('fs').writeFileSync("./searchGen.gulp_task.js", generatedCode);
	cb();
}
module.exports = task;