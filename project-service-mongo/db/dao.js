const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/organization')

const ProjectSchema = new mongoose.Schema({
    _id: mongoose.SchemaTypes.Number,
    name: mongoose.SchemaTypes.String,
    employees:[
        {
            id: mongoose.SchemaTypes.Number,
            name: mongoose.SchemaTypes.String,
            designation: mongoose.SchemaTypes.String,
            salary: mongoose.SchemaTypes.Number
        }
    ]
})

const Project = mongoose.model('project',ProjectSchema)

const getAllProjects = (callback)=>{
    Project.find({},{__v:0},(err,data)=>{
        callback(err,data)
    })
}

const getAllProjectEmployees = (pId,callback)=>{
    Project.find({_id: pId},{__v:0},(err,data)=>{
        callback(err,data)
    })
}
// add a new employee to project
const addEmployeeToProject = (_project,callback)=>{
    Project.updateOne({_id: _project.id },{$addToSet : {employees : _project.emp }},(err,data)=>{
        callback(err,data)
    })
}

// remove an employee from project
const removeEmployeeFromProject = (_project,callback)=>{
    Project.updateOne({_id: _project.pId},{$pull : {employees : {id: _project.empId}}},(err)=>{
        callback(err)
    })
}

module.exports={
    _all : getAllProjects,
    _allProjectEmployees : getAllProjectEmployees,
    _addEmpToProject : addEmployeeToProject,
    _delEmpFromProject : removeEmployeeFromProject
}