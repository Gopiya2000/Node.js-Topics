var http = require('http')
var fs = require('fs')
http.createServer((req, res) => {
    // console.log(req.url) this will return the url path extension 
    if (req.url == '/welcome') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        var readStream = fs.createReadStream('./index.html', 'utf-8')
        readStream.pipe(res)
    }
    else if (req.url == '/app') {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        var readStream = fs.createReadStream('./file.json', 'utf-8')
        readStream.pipe(res)
    }
    else {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        var readStream = fs.createReadStream('text.txt', 'utf-8')
        readStream.pipe(res)
    }
}).listen(8000, () => {
    console.log("Server listening ...")
})
