// Import the http module
const http = require('http');

// Create a server object
const server = http.createServer((req, res) => {
  // Write a response header
  res.writeHead(200, {'Content-Type': 'text/html'});
  // Write a response body with larger text
  res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome</title>
      <style>
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          font-family: Arial, sans-serif;
        }
        h1 {
          font-size: 5em;
          color: #ff9900; /* Orange color */
        }
      </style>
    </head>
    <body>
      <h1>WELCOME THAILAND</h1>
    </body>
    </html>
  `);
});

// Listen on port 3000
server.listen(3000, () => {
  // Log a message when the server starts
  console.log('Server running at http://localhost:3000/');
});
