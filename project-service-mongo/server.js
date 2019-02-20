const express = require('express')
const server = express()
const parser = require('body-parser')
const projectRoutes = require('./routes/project').routes
server.use(parser.json())
server.get('/status',(rq,rs)=>{
    rs.status(200).json(
        "Project Service is up & running"
    )
})
server.use('/projects',projectRoutes)

const PORT = process.argv[2] || 3509
server.listen(PORT,()=>{
    console.log(`Server Started ${PORT}`)
})
