const express = require('express');
const app = express();
const cors = require('cors');

const User = require('./users');
const userObj = new User();
const bodyParser = require('body-parser')

// latest express version doesn't have body parser by default
// npm install body-parser express cors 
// apply the body parser

app.use(bodyParser.json())
app.use(cors())

// route
app.get('/status',(req,res) => {
    res.send('System is up');
});

app.get('/users',(req,res) =>{
    let users = JSON.stringify(userObj.fetchAll());
    res.send(users);
});
// request params
app.get('/user/:id',(req,res) =>{
    let id = req.params.id
    let user = JSON.stringify(userObj.fetchById(id));
    if(!user) return res.status(404).send('The user wasn\'t found');
    else res.send(user);
});
// query params
app.get('/user',(req,res) =>{
    let id = req.query.id
    let user = JSON.stringify(userObj.fetchById(id));
    res.send(user);
});
// adding a new user
app.post('/user/add',(req,res) =>{
    console.log(req.body)
    if(!req.body.name){
        res.status(400).json('Name attribute is expected');
        return;
    }
    const user ={
        id : userObj.fetchAll().length + 1,
        name : req.body.name 
    };
    userObj.addUser(user);
    const users = userObj.fetchAll(); 
    res.json(users);
});

// environment variable
// command line args
let port;
if(!process.argv){
    port = process.argv[2];
}else{
    port = process.env.port || 3010;
}
app.listen(port,()=> console.log(`Listening on port ${port}`));
