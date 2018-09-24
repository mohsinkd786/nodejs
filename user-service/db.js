const MongoClient = require('mongodb').MongoClient;
const dbName ='mohsin_db'
const url = `mongodb://localhost:27017/mohsin_db`;

class UserDAO {
    
    createCollection() {
            MongoClient.connect(url, (err, db) => {
            if (err) throw err;
            let dbo = db.db(dbName);
            dbo.createCollection("users", (err, res) => {
            if (err) throw err;
            console.log("Collection created!");
            db.close();
            });
        });
    }
    addEmployee(emp){
        MongoClient.connect(url, (err, db) => {
            if (err) throw err;
            let dbo = db.db(dbName);
            dbo.collection("customers").insertOne(emp, function(err, res) {
              if (err) throw err;
              console.log("Employee has been Inserted");
              db.close();
            });
          });
    }
    // find all
    
    // find by name
    findByName(ename){
        let rows
        MongoClient.connect(url, function(err, db) {
            if (err) throw err
            let dbo = db.db(dbName)
            dbo.collection("users").find({name : ename}).toArray(function(err, result) {
              if (err) throw err
              rows = result
              db.close()
            })
          })
          return rows
    }
}
const findAllUsers = (callback) => {
    MongoClient.connect(url, (err, db) => {
        if (err) throw err
        let dbo = db.db(dbName)
        dbo.collection('users').find({}).toArray((err, results)=> {    
            return callback(results)
        })
      })
}
module.exports.UserDAO = UserDAO
module.exports.findAllUsers = findAllUsers