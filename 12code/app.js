var http = require('http');
var slugify = require('slugify');
var data = 'Hello code improve';

var slug = slugify(data, '*+++------');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write(slug);
    res.end();
}).listen(8080);
console.log("server running on port 8080")