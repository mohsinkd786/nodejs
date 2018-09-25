const express = require('express')
const app = express()
const parser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
app.use(parser.json())

const url = `mongodb://localhost:27017/sample_users`


app.get('/status',(req,res) => {
    res.send('System is up');
}).listen(4200);

app.get('/users',(req,res) => {
    res.setHeader('Content-Type','application/json')
    fetchAll((data)=>{
        res.end(JSON.stringify(data))
    })
});

const fetchAll = (callback)=>{
    MongoClient.connect(url, (err, client) => {
        const conn = client.db('sample_users')
            conn.collection('users').find({}).toArray((err,data)=>{
                //console.log('Data Received ',data)
                callback(data)
            })
        client.close()
    })
}