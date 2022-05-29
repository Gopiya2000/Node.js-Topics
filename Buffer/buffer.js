//import {Buffer} from "buffer"
let a = "divya"
let buf = Buffer.from(a)
buf.write("Gopiya")
let slice = buf.slice(0,5)
console.log(slice.toString())
buf[0] = 72
console.log(slice.toString())