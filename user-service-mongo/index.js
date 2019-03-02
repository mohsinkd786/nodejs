const express = require('express')
const app = express()
const cors = require('cors')
const parser = require('body-parser')
const userService = require('./services/userService');

app.use(parser.json())

// enable CORS 
app.use(cors())

app.get('/status',(req,res) => {
    res.json('System is up');
})
app.listen(4101,()=>{
    console.log('Server Started 4101')
});

// fetch all users
app.get('/users',(req,res) => {
    res.setHeader('Content-Type','application/json')
    userService.fetchAll((data)=>{
        res.end(JSON.stringify(data))
    })
});

//fetch users by name
app.get('/users/findByName/:name',(req,res) => {
    res.setHeader('Content-Type','application/json')
    let uname = req.params.name
    userService.fetchByName(uname,(results) =>{
        res.json(JSON.stringify(results))
    })
});
// add a new user
app.post('/user/add',(req,res)=>{
    let userObj = req.body
    res.setHeader('Content-Type','application/json')
    userService.addUser(userObj,(err)=>{
        if(err) res.statusCode(400).end('User Couldnt be Added,please try again later')
        else res.json('User Added Successfully')
    })
})
// update an existing user
app.put('/user/edit',(req,res)=>{
    let userObj = req.body
    res.setHeader('Content-Type','application/json')
    userService.editUser(userObj,(err,result)=>{
        if(err) res.statusCode(400).json('User Couldnt be Added,please try again later')
        else{
                res.json(JSON.stringify({ message:'User Modified' ,response : result }))
                //res.redirect('/users')
        }
    })
})

app.get('/user/find/id/max',(rq,rs)=>{
    userService.getLastId((id,err)=>{
        if(err) rs.statusCode(400).json('Unable to process your request,please try again later')
        else{
                rs.json({maxId:id})
        }
    })
})

module.exports={
    app
}
