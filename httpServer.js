var http = require('http');
http.createServer(function(request,response){
response.writeHead(200);
response.write("Hey there! Now you wait\n");
setTimeout(function(){
response.write("Kept you waiting long enough\n");
response.end();},5000);
}).listen(7070);
console.log('Listening on 7070...');
