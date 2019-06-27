const { src, dest } = require('gulp');
const through2 = require('through2');

function writeToFile(tasks){
  let impo = "const {parallel} = require('gulp')\n";
  let expo = `exports.auto = parallel(`;
  console.log("2 TASKS: "+tasks);
  //imports
  for(i in tasks){
    impo+=`const p${i} = require("${tasks[i]}");\n`;
    expo+=(i!==0? "": ",")+`p${i}`;
  }
  //exports
  expo+=");"
  let generatedCode = impo + expo;
  require('fs').writeFileSync("./gulpfile.js/searchGen.gulp_task.js", generatedCode);
  console.log("ATTEMTING TO WRITE: "+generatedCode);
}

async function task(cb) {

  let tasks = [];

	await src("src/**/**.gulp.js", {buffer:true})
    .pipe(through2.obj(function(file, _, callb) {
      if (file.isBuffer()) {
        tasks.push(file.path);
      	// const fileName = file.path.match(/(?:\w*(?=(?:\.\w*)*$))(?!=\/)/);
        // const code = file.contents.toString();
      }
      callb(null, file);
      writeToFile(tasks);
      console.log("1 TASKS: "+tasks);
    }));

  
	cb();
}
module.exports = task;