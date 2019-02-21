const express = require('express')
const server = express()
const hello = require('./hello')

server.get('/message',(rq,rs)=>{
    rs.send(hello.message())
})

server.listen(26172,()=>{
    console.log(`Server Started at 26172`)
})