const express = require('express')
const apis = express.Router()
const dao = require('../db/dao')

// get all
apis.get('/',(rq,rs)=>{
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
// add a project
apis.post('/add',(rq,rs)=>{
    dao._add(rq.body,(err)=>{
        if(err){
            rs.status(500).send({
                error: "Unable to load data",
                trace: err
            })
        }else{
            rs.status(200).json("Project added successfully")
        }
    })
})
// get employees by id
apis.get('/:id/employees',(rq,rs)=>{
    dao._allProjectEmployees(parseInt(rq.params.id),(err,data)=>{
        if(err){
            rs.status(500).send({
                error: "Unable to load data"
            })
        }else{
            rs.status(200).send(data)
        }
    })
})
// add a new employee to an existing project
apis.put('/add/employees',(rq,rs)=>{
    dao._addEmpToProject(rq.body,(err,data)=>{
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

// delete emp in a project by project id & employee id
apis.delete('/delete/employees',(rq,rs)=>{
    dao._delEmpFromProject(rq.body,(err)=>{
        if(err){
            rs.status(500).send({
                error: "Unable to process the request ",
                trace: err
            })
        }else{
            rs.status(201).send({
                message : "Employee has been Deleted"
            })
        }
    })
})
module.exports={
    routes: apis
}