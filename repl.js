let repl = require('repl')
const local = repl.start()
local.on('exit',()=>{
    console.log("Repl Ended");
    process.exit()
})