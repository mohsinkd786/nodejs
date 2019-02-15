const express = require('express') // install express >> npm install express --save (shall save the dependency in package.json)
const server = express()

const data = require('./data')  // our data file used in place of a persistence store
const _compute = require('./calculator')._compute
const PORT = 5600

server.get('/status',(req,res)=>{
    res.send('Server is Running')
})

server.post('/messages',(req,res)=>{
    res.setHeader('content-type','application/json')
    res.send(data._messages)
})

server.get('/calculate/:action/:num1/:num2',(req,res)=>{
    res.setHeader('content-type','application/json')
    let result = _compute(
        { 
            action:req.params.action,
            first: parseInt(req.params.num1),
            next:parseInt(req.params.num2)
        })
    res.status(201).send(result)
})

server.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`)
})