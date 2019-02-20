const express = require('express')
const routes = express.Router()
const dao = require('./db/dao')

// get all employees
routes.get('/employees',(rq,rs)=>{
    dao._all((err,emps)=>{
        if(err){
            rs.status(500).send({
                error: "Unable to load data"
            })
        }else{
            rs.status(200).send({
                employees : emps
            })
        }
    })
})

// add a new employee
routes.post('/employees/add',(rq,rs)=>{
    rs.send({
        data: dao._add(rq.body)
    })
})

// edit an employee by id
routes.put('/employees/edit/:id',(rq,rs)=>{

})

// delete an employee
routes.delete('/employees/delete/:id',(rq,rs)=>{

})

// find all employees for a project
routes.post('/employees/find/project/:id',(rq,rs)=>{

})
module.exports={
    routes
}