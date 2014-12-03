var http = require('http');
var makeRequest = function(msg){
var options = {
	host: 'localhost',port: 8080 , path: '/', method: 'POST'
}

var request = http.request(options,function(response){
response.on('data',function(data){
console.log(data);
});
});
request.write(msg); //begins the request
request.end()l //finishes
};

exports = makeRequest;