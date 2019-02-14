const http = require('http')

const server = http.createServer((req,res)=>{
    //console.log('Hello Server')
    if(req.url == '/status' && req.method =='GET'){
        res.end('Welcome to nodejs')
    }
    if(req.url =='/users' && req.method=='POST'){
        res.end(JSON.stringify({id:1,name:'BOB'}))
    }
})
server.listen(1200,()=>{
    console.log('Server is Started')
})