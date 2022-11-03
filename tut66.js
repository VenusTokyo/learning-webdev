const http=require('http')
const fs=require("fs")
const fileContent = fs.readFileSync('fun animation.html')

const server =http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'})
    res.end(fileContent)
})

server.listen(80, '127.0.0.1', ()=>{//port is special because he don't have to explicitly mention that. simply will run on 127.0.0.1
    console.log("listening on port 80")
})