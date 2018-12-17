const http = require('http');
const url = require('url');

http.createServer(((request,response)=>{
    if(request.url==='/status'){
        response.write('Server is running \n');
        response.end();
    }
    if(request.url === '/message' && request.method === 'POST'){
        response.writeHead(200,{ 'CONTENT-TYPE': 'text/html' });
        response.write('Hello world \n');
        response.end(); 
    }
    /*else{
        let url1 = url.parse(request.url).query;
        let fName= url1.fname;
        let lName= url1.lname;
        response.write('First Name is '+fName);
        response.write('\n');
        response.write('Last Name is '+lName);
        response.write('\n');
        response.end();
    } */
})).listen(1235);

//http:localhost:1235/hello

