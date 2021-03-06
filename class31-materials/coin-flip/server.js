const http = require('http')
const fs = require('fs')
const url = require('url')
const figlet = require('figlet')

const server = http.createServer((req, res) => {
    // constants
    const curl = url.parse(req.url)
    const route = curl.pathname
    // const params =

    // functions
    function responseCallBack(contentType) {
        return (err, data) => {
            if (err) {
                console.log('Something went wrong...')
                console.dir(err)
                return
            } else {
                res.writeHead(200, {'Content-Type': 'text/' + contentType})
            }
            res.write(data)
            res.end()
        }
    }
    function fileSystemResponse(fileRoute) {
        let fileType = fileRoute.split('.').reverse()[0]
        fileType = fileType === 'js' ? 'javascript' : fileType

        fs.readFile(fileRoute, responseCallBack(fileType))
    }
    function apiResponse(responseObj) {
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(responseObj))
    }

    // logic
    switch (route) {
        case '/':
            fileSystemResponse('index.html')
            break
        case '/css/style.css':
        case '/js/main.js':
            let filePath = route.substring(1)
            filePath = filePath.includes('.') ? filePath : (filePath + '.html')
            fileSystemResponse(filePath)
            break
        case '/api':
            let coinFace = Math.floor(Math.random()*2) ? 'Heads' : 'Tails'
            console.log('face: ', coinFace)
            let coin = {face: coinFace}
            apiResponse(coin)
            break
        default:
            figlet('404!!', responseCallBack())
            break
    }
})

server.listen(8000)