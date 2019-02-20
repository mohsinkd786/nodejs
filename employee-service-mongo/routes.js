const express = require('express')
const routes = express.Router()
const dao = require('./db/dao')

// get all employees
routes.get('/employees',(rq,rs)=>{
    dao._all((err,data)=>{
        if(err){
            rs.status(500).send({
                error: "Unable to load data"
            })
        }else{
            rs.status(200).send(data)
        }
    })
})

// add a new employee
routes.post('/employees/add',(rq,rs)=>{
    dao._add(rq.body,(err,data)=>{
        if(err){
            rs.status(500).send({
                error: "Unable to process the request"
            })
        }else{
            rs.status(201).send(data)
        }
    })
})

// edit an employee by id
routes.put('/employees/edit',(rq,rs)=>{
    dao._updateById(rq.body,(err,data)=>{
        if(err){
            rs.status(500).send({
                error: "Unable to process the request"
            })
        }else{
            rs.status(200).send(data)
        }
    })
})

// delete an employee
routes.delete('/employees/delete/:id',(rq,rs)=>{
    dao._delById(parseInt(rq.params.id),(err)=>{
        if(err){
            rs.status(500).send({
                error: "Unable to process the request"
            })
        }else{
            rs.status(200).send({
                message : "Employee Deleted"
            })
        }
    })
})

// find all employees for a project
routes.post('/employees/find/project/:id',(rq,rs)=>{

})
module.exports={
    routes
}