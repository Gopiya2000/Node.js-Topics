var fs = require("fs");
fs.readFile("data.txt","UTF-8",function(error,data){
    //change file name and check for uncaught exception
    if(error){
        throw error;
    }
    console.log(data);
});
//to handle errors.
process.on("uncaughtException",function(error){
    console.log("The exception was caught")
});
