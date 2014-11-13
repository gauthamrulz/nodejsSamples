var http = require('http');
http.createServer(function(req,res){
res.writeHead(200);
req.on('data',function(chunk){
console.log(chunk.toString());
res.write(chunk);
});
req.on('end',function(){
res.end();
});
}).listen(8080);