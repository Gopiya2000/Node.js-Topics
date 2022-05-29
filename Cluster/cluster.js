let express = require('express')
let cluster = require('cluster')
let os = require('os')
let cpu = os.cpus().length
// express.get('/',(req,res)=>{
//     for ( let i=0;i<1e8;i++){
//         //some long running task
//     }
//     res.send(`ok....${process.pid}`);
//     cluster.worker.kill()
// });
if(cluster.isMaster){
    console.log(`Main thread process id :${process.pid}`)
    for(var i = 0; i < cpu; i++)
    cluster.fork()
}
else{
    express.get('/',(req,res)=>{
        res.send("hi")
    })
    express.listen(4060,()=>{
        console.log("Listening")
    })
    
}
cluster.on('listening',(worker)=>{
console.log("New Worker : ",worker.process.pid)
})
cluster.on('exit',(worker)=>{
    console.log("Worker thread killed",worker.process.pid)
    cluster.fork()
})
