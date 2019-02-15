// folks import / downloading this project
// need to just run below command
// >> npm install shall 
// shall load all the necessary dependencies
const express = require('express')
const server = express()
const parser = require('body-parser')
const service = require('./user-service')
// get user data
let userData = require('./data').users

// set the parser in the express instance
server.use(parser.json())
// port
const PORT = 12345

// status api
server.get('/status',(rq,rs)=>{
    rs.send({ message: 'Server is Up & Runnning'})
})

// fetch all users
server.get('/users',(rq,rs)=>{
    rs.send({ data: userData })
})

// fetch users by salary in range
server.get('/users/salary/range/:salaryFrom/:salaryTo',(rq,rs)=>{
    rs.send({
        data : service.bySalaryInBetween(userData,parseInt(rq.params.salaryFrom),parseInt(rq.params.salaryTo))
    })
})

// fetch users by salary in range
server.get('/users/salary/greater/:salary',(rq,rs)=>{
    rs.send({
        data : service.bySalaryGreater(userData,parseInt(rq.params.salary))
    })
})
// fetch users by id
server.get('/users/id/:id',(rq,rs)=>{
    rs.send({
        data : service.byId(userData,parseInt(rq.params.id))
    })
})

// add new user
server.post('/users/add',(rq,rs)=>{
    rs.setHeader('content-type','application/json')
    userData = service.add(userData,rq.body)
    rs.status(201).send({
        message: 'User has been added successfully',
        data : userData
    })
})
// edit an existing user
server.put('/users/edit',(rq,rs)=>{
    rs.setHeader('content-type','application/json')
    userData = service.update(userData,rq.body)
    rs.status(202).send({
        message: 'User has been modified successfully',
        data : userData
    })
})
// delete a user by id
server.delete('/users/:id',(rq,rs)=>{
    rs.setHeader('content-type','application/json')
    userData =  service.delete(userData,parseInt(rq.params.id))
    rs.status(200).send({
            message: 'User has been deleted successfully',
            data: userData
        })
})
server.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`)
})