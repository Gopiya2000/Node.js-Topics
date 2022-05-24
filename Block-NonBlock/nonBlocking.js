const fs = require('fs');
fs.readFile('blocking.js','utf-8',(error,success)=>{
    if(error)
    throw error
    console.log(success)
});
function nextWork(){
    console.log("Rest of tasks to be completed")
}
nextWork(); 
// console.log(__filename)