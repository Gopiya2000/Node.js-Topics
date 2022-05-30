// let crypto = require('crypto')

// console.log(crypto.getHashes())
// const secret = 'secret key'
// let result = crypto.createHmac('sha256',secret).update('password').digest('hex')
// console.log(result)
const { scryptSync,createHash ,randomBytes} = require('crypto');
const { use } = require('express/lib/application');

// function hash(str) {
//     return createHash('sha256').update(str).digest('hex');
// }

// let password = '2902';
// const hash1 = hash(password);
// console.log(hash1)

password = '2902';
// const hash2 = hash(password);
// console.log(hash2)
// const match = hash1 === hash2;

// console.log(match ? 'good password' : 'password does not match');
email = 'ed@mail.com'
const salt = randomBytes(10).toString('hex');
console.log("salt : ",salt)
const hashedPassword = scryptSync(password, salt, 10).toString('hex');
console.log("hashed pass : ",hashedPassword)
const user = {email, password: `${salt}:${hashedPassword}` }
console.log(user)
// const  users = []
// users.push(user)
// temail = 'ed@mail.com'
// const res = users.find(ob => ob.email === temail)
// console.log(res)