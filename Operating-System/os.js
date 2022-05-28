const os = require('os')
console.log(os.arch()) /**returns 32 or 64bit */
console.log(os.cpus().length) /**4 core unit : no of core unit does cpu has */
console.log(os.homedir())
console.log("Done")
console.log(os.userInfo())
console.log("Done")
console.log(os.totalmem(),os.hostname()) /*returns system mem */
console.log("Done")
process.stdout.write("hello")
console.log("Divi"+os.EOL+"Gopi")
// console.log(`string text line 1 string text line 2`);
// console.log("Divi\nGopi")