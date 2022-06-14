var fs = require('fs')
var readStream = fs.createReadStream('./random.txt','utf-8')
var writeStream = fs.createWriteStream('./newfile.txt')
    readStream.pipe(writeStream)
    console.log("File is written ...")

// var http = require('http')
// var fs = require('fs')
// var myReadStream = fs.createReadStream(__dirname + '/random.txt','utf-8');
// myReadStream.on('data',function(chunk){
//     console.log('new chunk received:');
//     console.log(chunk);
// });