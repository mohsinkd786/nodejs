// import express module
const express = require('express');
const userService = require('./user-service');
// initialise express server object
const app = express();
// to access the request body we need
const bodyParser = require('body-parser');
// enable json parser 
// apply json parser in express
app.use(bodyParser.json());

app.get('/',(req,res)=>{
     // send method is used to print & close the statement
     res.send('Server is Running, please point to a valid endpoint \n');
});
// status service || GET METHOD
app.get('/status',(req,res)=>{
    // send method is used to print & close the statement
    res.send('Server is Running \n ');
});
// POST Method
// Get data via get
// :name is the param (:) designate the param

app.get('/user/:name',(req,res)=>{
    //res.send(JSON.stringify('Welcome to the end user'));
    // get value from param
    const name = req.params.name;
    res.send('Welcome Mr/Miss '+name +'\n');
});
// multiple params
app.get('/user/:name/:email',(req,res)=>{
    const name = req.params.name;
    const email = req.params.email;
    res.send(`Hey ${name}, ${email}\n`);

});

// get data from body in POST
// POST MEthod
app.post('/users/addUser',(req,res)=>{
    //get body data from post endpoint
   // let body =
    res.send(req);
    //res.send('User Details '+body+'\n');

});
// fetch all users
app.get('/users',(req,res)=>{
    const users = userService.fetchAllUsers();
    res.send(JSON.stringify(users));
});

// assign port 
app.listen(4200,()=>{
    console.log('Server Started at 4200');
});