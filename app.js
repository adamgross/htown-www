var http = require('http');
var port = Number(process.env.PORT || 8000);
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<center>healdsburg.me<p><img src=http://s3.amazonaws.com/healdscam/frontcam-latest.jpg></center>');
}).listen(port);
console.log('Server running at http://127.0.0.1:3000/');