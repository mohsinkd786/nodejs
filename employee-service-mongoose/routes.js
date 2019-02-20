const express = require('express')
const routes = express.Router()
const dao = require('./db/dao')

// get all employees
routes.get('/',(rq,rs)=>{
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
routes.post('/add',(rq,rs)=>{
    dao._add(rq.body,(err,data)=>{
        if(err){
            rs.status(500).send({
                error: "Unable to process the request ",
                trace: err
            })
        }else{
            rs.status(201).send(data)
        }
    })
})

// edit an employee by id
routes.put('/edit',(rq,rs)=>{
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
routes.delete('/delete/:id',(rq,rs)=>{
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
routes.post('/find/project/:id',(rq,rs)=>{

})

routes.get('/names',(rq,rs)=>{
    dao._Names((err,names)=>{
        rs.send({
            names
        })
    })
})
module.exports={
    routes
}