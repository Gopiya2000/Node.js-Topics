const url = require('url')
let weburl = 'https://github.com/Gopiya2000/Node.js-Topics/blob/master/exit.js?name=gopiya'
let parse = url.parse(weburl)
console.log(parse.hostname)
console.log(parse.host)
console.log(parse.href)
console.log(parse.path)
console.log(parse.protocol)
console.log(parse.port)
console.log(parse.query)
console.log(parse.search)