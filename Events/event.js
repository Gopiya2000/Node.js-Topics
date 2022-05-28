const events = require('events')
const fs = require('fs')
const eventOb = new events()
eventOb.on('myEvent', () => {
    console.log("File read")
})
eventOb.on('close', () => {
    console.log("File closed")
})
fs.readFile('hello.js', 'utf8', () => {
    eventOb.emit('myEvent')
    eventOb.emit('close')
})