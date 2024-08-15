// Import the http module
const http = require('http');

// Create a server object
const server = http.createServer((req, res) => {
  // Write a response header
  res.writeHead(200, {'Content-Type': 'text/html'});
  // Write a response body with an image
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
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          font-family: Arial, sans-serif;
          text-align: center;
          background-color: #f0f0f0;
        }
        h1 {
          font-size: 5em;
          color: #ff9900; /* Orange color */
          margin-bottom: 20px;
        }
        img {
          max-width: 80%;
          height: auto;
          border: 5px solid #ff9900;
          border-radius: 10px;
        }
      </style>
    </head>
    <body>
      <h1>WELCOME to KUBENETES:v7 </h1>
      <img src="https://images.pexels.com/photos/4603873/pexels-photo-4603873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Beautiful Thailand">
    </body>
    </html>
  `);
});

// Listen on port 3000
server.listen(3000, () => {
  // Log a message when the server starts
  console.log('Server running at http://localhost:3000/');
});
