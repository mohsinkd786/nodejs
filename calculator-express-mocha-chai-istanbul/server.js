const express = require('express')
const server = express()
const add = require('./calculator.service')._add
const diff = require('./calculator.service')._diff
const mul = require('./calculator.service')._mul
const div = require('./calculator.service')._div

//
server.get('/status',(rq,rs)=>{
    rs.send('Server Started')
})
//
server.get('/message/:message',(rq,rs)=>{
    rs.send({ message :rq.params.message})
})
//
server.get('/calculate/add/:a/:b',(rq,rs)=>{
    rs.send({
        result : add(parseInt(rq.params.a),parseInt(rq.params.b)).toString()
    })
})
//
server.get('/calculate/diff/:a/:b',(rq,rs)=>{
    rs.send({
        result : diff(parseInt(rq.params.a),parseInt(rq.params.b)).toString()
    })
})
//
server.get('/calculate/mul/:a/:b',(rq,rs)=>{
    rs.send({
        result : mul(parseInt(rq.params.a),parseInt(rq.params.b)).toString()
    })
})
//
server.get('/calculate/div/:a/:b',(rq,rs)=>{
    rs.send({
        result : div(parseInt(rq.params.a),parseInt(rq.params.b)).toString()
    })
})


server.listen(4201)

// for testing
module.exports={
    server
}