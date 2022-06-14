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
//only throws error,doesn't handle it.
domain.on("error",function(error){
    console.log("The exception was caught")
});
