var exec = require('child_process').exec;
var fs = require("fs");
var path = require('path');
var UglifyJS = require("uglify-js");

//settings
var src="./src";
var dest = "./proc";
var fdest ="./dest";

var dirs = [
  'global',
  'umd',
  'es6' 
];

var except = [
  'require','exports','module', 'export', 'default'
];
//end settings
var extract = function(x){
  var startIndex = x.indexOf("///{");
  if(startIndex < 0) return x;
  else startIndex=startIndex+4;
  var endIndex = x.lastIndexOf("///}");
  if(endIndex>0) return x.slice(startIndex, endIndex);
  else return x.slice(startIndex);
}
var walk = function(directoryName, ext) {
  var res=  [];
  ext=ext || ".ts";
  var files=fs.readdirSync(directoryName);   
  files.forEach(function(file) {
      let fullPath = path.join(directoryName,file);
      let f= fs.statSync(fullPath);
      if (f.isDirectory()) {
          res=res.concat(walk(fullPath));
      } else {
      if(fullPath.match(ext+"$"))
            res.push(fullPath)
      }
    });
  return res;
};
var toProcess=walk(src);
if(!fs.existsSync(dest)) fs.mkdirSync(dest);
dirs.forEach(function(dir){
  let outDir = path.join(dest, dir);
  if(!fs.existsSync(outDir)) fs.mkdirSync(outDir);
  toProcess.forEach(function(file){
    let toAdd=file.substr(0, file.length-3)+"."+dir+".add";
    let outFile=path.join(dest, dir, path.basename(file));
    
    if(fs.existsSync(toAdd)){
      let input = extract(fs.readFileSync(file, 'utf8'));
      fs.writeFileSync(outFile, 
          fs.readFileSync(toAdd, 'utf8').replace("///{}", input));
    }
    else{
      fs.writeFileSync(outFile, 
          fs.readFileSync(file));
    }
  })
});

if(!fs.existsSync(fdest)) fs.mkdirSync(fdest);
for(let i=0; i<dirs.length; i++)
{
  let config = 'tsc -p tsconfig.'+dirs[i]+'.json';
  let fOutDir = path.join(fdest, dirs[i]);
  if(!fs.existsSync(fOutDir)) fs.mkdirSync(fOutDir);
  console.log("start "+dirs[i]);
  exec(config, function(error, stdout, stderr) {
    console.log(stdout);
    console.error(stderr);
    if(dirs[i] != 'es6') {
      let files = walk(fOutDir, ".js");
      files.forEach(function(file){
        let baseName=file.substr(0, file.length-3);
        if(baseName.match(".min$")) return;
        let inMap = file+".map";
        if(!fs.existsSync(inMap)) inMap=undefined;
        let outFile = baseName+".min.js";
        let outMap = baseName+".min.js.map";
        let res=UglifyJS.minify(file, {
          outSourceMap: path.basename(outMap),
          outFileName: path.basename(outFile),
          inSourceMap: inMap,
          except:except
        });
        fs.writeFileSync(outFile, res.code);
        fs.writeFileSync(outMap, res.map);
      });
    }
    console.log("finished "+dirs[i]);
  });
}


