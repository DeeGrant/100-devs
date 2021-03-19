const http = require('http')
const fs = require('fs')
const url = require('url')
const querystring = require('querystring')
const figlet = require('figlet')

function getStudentResponseObj(student) {
    return student === 'leon' ?
    {
        name: "leon",
        status: "Boss Man",
        currentOccupation: "Baller"
    }
        :
    {
        name: "unknown",
        status: "unknown",
        currentOccupation: "unknown"
    }
}

const server = http.createServer((req, res) => {
    // constants
    const curl = url.parse(req.url)
    const route = curl.pathname
    const params = querystring.parse(curl.query)
    console.log(route)

    // functions
    function responseCallBack(fileType) {
        return (err, data) => {
            if (err) {
                console.log('Something went wrong...')
                console.dir(err)
                return
            } else {
                res.writeHead(200, {'Content-Type': 'text/' + fileType})
            }
            res.write(data)
            res.end();
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
        case '/otherpage':
        case '/otherotherpage':
        case '/css/style.css':
        case '/js/main.js':
            let filePath = route.substring(1)
            filePath = filePath.includes('.') ? filePath : (filePath + '.html')
            fileSystemResponse(filePath)
            break
        case '/api':
            if ('student' in params) {
                let studentObj = getStudentResponseObj(params['student'])
                apiResponse(studentObj)
            }
            break
        default:
            figlet('404!!', responseCallBack('error'))
            break
    }
})

server.listen(8000)
