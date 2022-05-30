let express = require('express')
let cluster = require('cluster')
let os = require('os')
let cpu = os.cpus().length
let eob = express()
if(cluster.isMaster){
    console.log(`Main thread process id :${process.pid}`)
    for(var i = 0; i < cpu; i++)
    cluster.fork()
}
else{
    eob.get('/',(req,res)=>{
        res.send("hi")
    })
    eob.listen(4060,()=>{
        console.log("Listening")
    })
    
}
cluster.on('listening',(worker)=>{
console.log("New Worker : ",worker.process.pid)
})
// cluster.on('exit',(worker)=>{
//     console.log("Worker thread killed",worker.process.pid)
//     cluster.fork()
// })
