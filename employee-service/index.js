const express = require('express');
const app = express();
const parser = require('body-parser');
const employService = require('./service/employService');

// enable json parser for body
app.use(parser.json());

app.get('/status',(req,res) =>{
    res.send('Welcome to our first Node Application')
})
app.get('/employs',(req,res) =>{
    res.send(employService.employs())
})
app.get('/employ/findBySalary/:salary',(req,res) =>{
    res.send(employService.bySalary(req.params.salary))
})
// start server
app.listen(4200,()=>{
    console.log(`Server Started  at 4200`)
})