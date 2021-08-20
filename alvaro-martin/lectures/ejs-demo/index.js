const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello World');
});

server.listen(4300, () => console.log('serveris running...'));
