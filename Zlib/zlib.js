const zlib = require('zlib')
console.log(1);
const fs = require('fs')
const gzib = zlib.createGzip()
const read =  fs.createReadStream('sample.txt')
const write = fs.createWriteStream('sample.txt.gz')
read.pipe(gzib).pipe(write);
//node zlib.js
//ls
