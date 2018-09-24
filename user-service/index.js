const http = require('http')
const db = require('./db')
const dao = new db.UserDAO()


const server = http.createServer((req,res) => {
    if(req.url === '/users'){
        let users;
        db.findAllUsers((data) =>{
                users = data 
                console.log('##### ',data)
                console.log('$$$$$ ',users)
            })
        console.log('^^^^^ ',users)
        res.write('Hello how r u ')
        res.end()
    }
    if(req.url === '/status'){
        res.write('Server is up')
        res.end()
    }
})
server.listen(4200,()=>{
    console.log('Server Started at 4200')
})