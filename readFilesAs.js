var fs = require('fs');
fs.readFile('/etc/hosts',function(err,contents){
console.log(contents.toString());
});
fs.readFile('/etc/updatedb.conf',function(err,contents){
console.log(contents.toString());
});
console.log('This');
