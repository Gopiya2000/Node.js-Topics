let repl = require('repl')
const local = repl.start()
console.log("repl started")
local.on('exit',()=>{
    console.log("Repl Ended");
    process.exit()
})