const express = require('express');
const server = express();
const parser = require('body-parser');
const userService = require('./services/userService');

server.use(parser.urlencoded({ extended:false }));
server.use(parser.json());


//GET
//Status service
server.get('/status',(req,res)=>{
    console.log('Status Service Called');
    res.send('Server is up and running');
});
//GET
// Fetch all Users
server.get('/users',(req,res)=>{
    console.log('List all Users called');
    res.send(userService._all());
});
// GET 
// Fetch User by id
server.get('/fetchbyId/:id',(req,res)=>{
    let id = req.params.id;
    console.log('Fetch User by Id called ',id);
    res.send(userService._byId(id));
});
// GET 
// Fetch User by name
server.get('/fetchbyName/:name',(req,res)=>{
    let name = req.params.name;
    console.log('Fetch User by Name called ',name);
    res.send(userService._byName(name));
});

//expose the listener port
const port = 3001;
server.listen(port,()=>{
    console.log(`Server started at ${port}`);
});