const fs = require('fs');
const input = fs.readFileSync('random.txt','utf-8');
console.log(input);
function nextWork(){
    console.log("Rest of tasks to be completed")
}
nextWork(); 