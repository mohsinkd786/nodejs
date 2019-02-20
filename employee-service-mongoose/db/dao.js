// Step 1: load mongoose client
const mongoose = require('mongoose')
// Step 2 : connect to mongo server
mongoose.connect('mongodb://localhost:27017/mongoose')
//const Schema = mongoose.Schema
// Step 3 : Define Schema for Employee
const EmployeeSchema = new mongoose.Schema({
    _id: mongoose.SchemaTypes.Number,
    name: mongoose.SchemaTypes.String,
    salary : mongoose.SchemaTypes.Number,
    emails: [ mongoose.SchemaTypes.String ]
})
// Step 4: build Employee Model
const Employee = mongoose.model('employee',EmployeeSchema)

// fetch all employees
const getEmployees = (callback)=>{
    Employee.find({},{__v:0},(err,data)=>{
        callback(err,data)
    })
}
// add a new employee
const addEmployee = (data,callback)=>{
   const emp = new Employee({
        _id: data.id,
        name : data.name,
        emails: data.emails
    })
    Employee.create(emp,(err)=>{
        callback(err,{
            message : "Employee Added successfully"
        })
    })
}
// modify an employee
const updateEmployee = (emp,callback)=>{
    Employee.updateOne({_id: emp.id},{
        name: emp.name,
        emails : emp.emails
    },(err,data)=>{
        callback(err,{
            message: "Employee Modified successfully"
        })
    })
}

// delete an employee by id
const removeEmployee = (eId,callback)=>{
    Employee.deleteOne({_id:eId},(err)=>{
        callback(err)
    })
}
module.exports={
    _all : getEmployees,
    _add : addEmployee,
    _updateById: updateEmployee,
    _delById: removeEmployee
}