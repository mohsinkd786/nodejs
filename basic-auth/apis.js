const express = require('express')
const apis = express.Router()

apis.get('/users',(rq,rs)=>{
    rs.send({
        data: 'Users'
    })
})

module.exports.routes = apis