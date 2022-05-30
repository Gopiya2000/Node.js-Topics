var fs = require("fs");
var domain=require("domain").create();
domain.run(function(){
    fs.readFile("data.txt","UTF-8",function(error,data){
        //change file name and check for uncaught exception
        if(error){
            throw error;
        }
        console.log(data);
    });
});
domain.on("error",function(error){
    console.log("The exception was caught")
});
