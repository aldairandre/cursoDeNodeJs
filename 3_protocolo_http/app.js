let http = require('http');

http.createServer(function(req,res){
    res.end("Hello World, welcome to my website"); 
}).listen(8080);

console.log("Servidor On");