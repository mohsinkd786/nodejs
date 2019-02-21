const express = require('express')
const services = express()
const server = express.Router()
const calc = require('./calculator')

// status
server.get('/status',(rq,rs)=>{
    rs.send('Hello')
})
// SUM
server.get('/add/:a/:b',(rq,rs)=>{
    rs.send(calc._add(parseInt(rq.params.a),parseInt(rq.params.b)).toString())
})
// DIFF
server.get('/diff/:a/:b',(rq,rs)=>{
    rs.send(calc._diff(parseInt(rq.params.a),parseInt(rq.params.b)).toString())
})
// MUL
server.get('/mul/:a/:b',(rq,rs)=>{
    rs.send(calc._mul(parseInt(rq.params.a),parseInt(rq.params.b)).toString())
})
// DIV
server.get('/div/:a/:b',(rq,rs)=>{
    rs.send(calc._div(parseInt(rq.params.a),parseInt(rq.params.b)).toString())
})

services.use('/calculator',server)
services.listen(6631,()=>{
    console.log(`Server Started at 6631`)
})

module.exports= {
    services
}