var io = require('socket.io').listen(8080);

io.sockets.on('connection', function (socket) {
  socket.on('message', function(data) {
    io.sockets.emit('message', data);
  });
});
console.log('socket.io: listen localhost:8080');


// static server
var http = require('http');
var fs = require('fs');
http.createServer(function(req, res) {
  var body = fs.readFileSync(__dirname + '/index.html');
  res.writeHead(200, {
    'Content-Length': body.length,
    'Content-Type': 'text/html'
  });
  res.end(body);
}).listen(8000);
console.log('static server: listen localhost:8000');
