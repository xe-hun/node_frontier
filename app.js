const http = require('http')
const {readFileSync} = require('fs')

//get all files
const homePage = readFileSync('./index.html')

http.createServer((req, res)=>{
    if(req.url === '/'){

        res.writeHead(200, {'content-type' : 'text/html'})
        res.write(homePage)
        res.end()
    }
 
}).listen(5001)

// http.createServer((req, res)=>{
//     // const file = fs.readFileSync('./big.txt', 'ascii')
//     // res.end(file)
//     const fileStream = fs.createReadStream('./big.txt', 'ascii')
//     fileStream.on('open', ()=>{
//         fileStream.pipe(res)
//     })
//     fileStream.on('error', (err)=>{

//     })
// }).listen(5001)

// const {createReadStream} = require('fs')

// const stream = createReadStream('./big.txt', {highWaterMark: 90000, encoding: 'ascii'})

// stream.on('data', (result)=>{
//     console.log(result)
// })

// stream.on('error', (err)=>{
//     console.log(err)
// })



// const {writeFileSync} = require('fs')

// for(let i = 0; i < 10000; i++){
//     writeFileSync('./big.txt', `hello world ${i}\n`, {flag: 'a'})
// }






// const EventEmitter = require('events')

// const customEmitter = new EventEmitter()

// customEmitter.on('response', (name, id)=>{
//     console.log(`data recieved user ${name} with ${id}`)
// })


// customEmitter.emit('response', 'john', 34)

// const http = require('http')

// const server = http.createServer()

// server.on('request', (req, res)=>{
//     res.end('welcome')
// })

// server.listen(5000, ()=>{
//     console.log('server started!')
// })