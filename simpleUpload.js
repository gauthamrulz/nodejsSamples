var fs = require('fs');
var http = require('http');
http.createServer(function(req,res){	
	var nF = fs.createWriteStream("temp.txt");
	var fileBytes = req.headers['content-length'];
	var uploadedBytes=0;
	req.pipe(nF);

	req.on('data',function(chunk){
		uploadedBytes+=chunk.length;
		var progress = (uploadedBytes/fileBytes)*100;
		res.write("Progress: "+ parseInt(progress,10) + "%\n");
	});
	req.on('end',function(){
		res.end('File uploaded');
	});
	
}).listen(8080);