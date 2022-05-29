let array = [1,2,3,4,5,6,7,8]
let buff = Buffer.from(array)
console.log(buff)
let sliceBuf = buff.slice(0,4)
console.log(sliceBuf)
console.log(buff)
var x = Buffer.from('abcdef');
var y = x.slice(2,5);
console.log(y.toString());
console.log(x.toString());