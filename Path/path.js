var path = require('path')

var Path = 'C:\ Users\ admin\ Documents\ text.txt'
console.log("Done");
console.log(path.basename(Path)) /**returns end path*/
console.log("Done");
console.log(path.dirname(Path)) /**returns whole path before basename*/
console.log("Done");
var join = path.join('user','profile','info') /**joins the strings and returns path */
console.log(join) 
console.log("Done");
var parse = path.parse(Path)
console.log(parse.ext)
console.log("Done");
var normalize = path.normalize('C:\ Users\ admin\ Documents\ text.txt')
console.log(normalize) /** removes redundant */
console.log("Done");
console.log(path.resolve()) /**current dir */
console.log(path.isAbsolute('C:\ Users\ admin\ Documents\ text.txt'))
 /*returns false. It will check whether the given path is absolute or not */