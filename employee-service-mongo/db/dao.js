// load mongo client
const MongoClient = require('mongodb').MongoClient
const _url = 'mongodb://localhost:27017'
const _db = 'organization'

// fetch all employees
const getEmployees = (callback)=>{
    // Step 1: connect to mongo server
    MongoClient.connect(_url,(err,conn)=>{
        console.log('Connected to Mongo Server')
        // Step 2: connect to data base
        // Step 3: fetch all documents from the collections
        conn.db(_db).collection('employees').find({},{fields:{ _id:0}}).toArray((err,emps)=>{
            // callback function to handle async flow 
            callback(err,{
                employees : emps
            })
        })
        // close the connection
        conn.close()
    })
}
// add a new employee
const addEmployee  = (emp,callback)=>{
    MongoClient.connect(_url,(err,conn)=>{
        conn.db(_db).collection('employees').insertOne(emp,(err)=>{
            callback(err,{
                message : 'Employee Added'
            })
        })
        // close the connection
        conn.close()
    })
}
// update an employee
const updateEmployee = (emp,callback)=>{
    const id = emp._id
    delete emp._id
    console.log(emp)
    MongoClient.connect(_url,(err,conn)=>{
        conn.db(_db).collection('employees').updateOne({
            _id: id
        },{
            $set: emp
            
        },(err,data)=>{
            callback(err,{
                message : 'Employee Updated'
            })
        })
        // close the connection
        conn.close()
    })
}
// delete an employee with _id
const deleteById = (eId,callback)=>{
    MongoClient.connect(_url,(err,conn)=>{
        conn.db(_db).collection('employees').deleteOne({ _id: eId},(err)=>{
            callback(err)
        })
        // close the connection
        conn.close()
    })
}
// aggregation of employee names
const getEmployeeNames = (callback)=>{
    MongoClient.connect(_url,(err,conn)=>{
        let employees = conn.db(_db).collection('employees')
        employees.aggregate([
            {
                $match :{}
            },
            {
                $project:{
                    _id: 0,
                    name : 1
                }
            }
        ]).toArray((err,emps)=>{
            callback(err,emps)    
        })
    })
}

module.exports={
    _all : getEmployees,
    _add : addEmployee,
    _updateById : updateEmployee,
    _delById : deleteById,
    _Names : getEmployeeNames
}