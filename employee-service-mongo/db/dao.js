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
            callback(err,emps)
        })
    })
}
// add a new employee
const addEmployee  = (emp)=>{
    MongoClient.connect(_url,(err,conn)=>{
        conn.db(_db).collection('employees').insertOne(emp,(err)=>{
            console.log('Employee Added')
        })
    })
}

module.exports={
    _all : getEmployees,
    _add : addEmployee
}