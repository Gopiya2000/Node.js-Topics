console.error("error ocurred")
console.log("Group start")
console.group()
console.log("1")
console.log("2")
console.log("2")
console.log("2")
console.log("2")
console.groupEnd()
console.log("Group end")
console.log(new Error("err"))
console.trace()
console.assert("go"=="gopi","Fails") /**return message only when it fails */