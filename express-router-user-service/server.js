const express = require('express')
const server = express()
const parser = require('body-parser')
const authorize = require('./security').authorize
// import the list of apis
const routes = require('./apis').routes
const PORT = 5601

server.use(parser.json())

// status api
server.get('/status',(rq,rs)=>{
    rs.send({
        message: 'Server is up & Running'
    })
})

// get message
server.get('/message/:message',(rq,rs)=>{
    rs.send({
        message: rq.params.message
    })
})
// restricted access endpoint
server.get('/unauthorize',(rq,rs)=>{
    rs.status(401).send({
        status : 'ERROR',
        errorMessage: 'Please specify valid credentials'
    })
})
// authentication / authorization
server.use('/apis',(rq,rs,next)=>{
    authorize(rq,rs,next)
})
// routes
server.use('/apis',routes)
// listening port
server.listen(PORT,()=>{
    console.log(`Server Started at ${PORT}`)
})
