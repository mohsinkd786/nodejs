const http = require('http');
const server = http.createServer((request,response)=>{
    console.log('Server Connection');
    if(request.url === '/'){
        response.write('Hello world');
        response.end();
    }
    if(request.url === '/status'){
        response.write(JSON.stringify("Server is up"));
        response.end();
    }
});
const port = 3000;
server.listen(port);
//console.log(`Server Started on ${port}`);
