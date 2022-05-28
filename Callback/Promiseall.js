let pr1 = new Promise((resolve,reject)=>{
    resolve("1ST pro")
})
let pr2 = new Promise((resolve,reject)=>{
    resolve("2ND pro")
})
let pr3 = new Promise((resolve,reject)=>{
    resolve("3RD pro")
})
Promise.all([pr1,pr2,pr3]).then((msg)=>console.log(msg))