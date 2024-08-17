const http = require('http');

const server = http.createServer((req, res) => {
  // Write a response header
  res.writeHead(200, {'Content-Type': 'text/html'});
  // Write a response body with an h1 tag
  res.end('<h1>Welcome Thailand v3!</h1>\n');
});

server.listen(3000, () => {
  // Log a message when the server starts
  console.log('Server running at http://localhost:3000/');
});
