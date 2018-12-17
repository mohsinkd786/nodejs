// import express module
const express = require('express');
const userService = require('./user-service');
// initialise express server object
const app= express();

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
// Get data via post
app.post('/user',(req,res)=>{
    //res.send(JSON.stringify('Welcome to the end user'));
    res.send('Welcome to the end user');
});
// fetch all users
app.get('/users',(req,res)=>{
    const users = userService.fetchAllUsers();
    res.send(JSON.stringify(users));
});
// assign port 
app.listen(4200,()=>{
    console.log('Server Started');
});