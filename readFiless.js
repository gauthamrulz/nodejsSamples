var fs = require('fs');
var contents = fs.readFileSync('/etc/hosts');
console.log(contents.toString());
contents=fs.readFileSync('/etc/updatedb.conf');
console.log(contents.toString());
console.log('This');

