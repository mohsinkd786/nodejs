const http = require('http');

http.createServer(((request,response)=>{
    let content = 'Hello This is our first web service in node '+request.url;
    response.write(content);
    response.end();
})).listen(1234);

//http:localhost:1234/hello

