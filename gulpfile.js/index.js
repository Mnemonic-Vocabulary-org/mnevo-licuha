const { src, dest, series, parallel } = require('gulp');
const gulp = require("gulp");
const through2 = require('through2');
const searchGen = require("./search_gulp_plugins.js");
const auto = require("./searchGen.gulp_task.js");


;
exports.default = series(cb=>{gulp.task(searchGen);/* gulp.task(auto);*/console.log("FILE: "+JSON.stringify(searchGen));cb()});
exports.searchGen = function(cb=function(){}){searchGen(cb)};
// exports.auto = function(cb=function(){}){auto(cb)};

// exports.auto = series(searchGen);