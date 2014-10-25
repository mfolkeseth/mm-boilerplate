var connect = require('connect');
var serveStatic = require('serve-static');

console.log('starting webserver on http://localhost:8080, loading client/build/index.html');

connect().use(serveStatic(__dirname + '/../client/build')).listen(8080);
