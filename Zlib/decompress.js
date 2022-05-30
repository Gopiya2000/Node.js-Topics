const zlib = require('zlib')
console.log(1);
const fs = require('fs')
const gzib = zlib.createUnzip()
const read =  fs.createReadStream('sample.txt.gz')
const write = fs.createWriteStream('sample2.txt')
read.pipe(gzib).pipe(write);
//node decompose.js
//ls