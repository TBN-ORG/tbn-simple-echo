var http = require('http');
http.createServer(function(request,response){
    response.writeHead(200);
    response.write("echo: ");
    request.pipe(response);
}).listen(8080);
