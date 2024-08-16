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
            color: #FFA500; /* สีส้มสด */
          margin-bottom: 20px;
        }
        img {
          max-width: 800px; /* Constrain width to 800 pixels */
          max-height: 700px; /* Constrain height to 700 pixels */
          width: auto;
          height: auto;
          border: 5px solid #ff9900;
          border-radius: 10px;
        }
      </style>
    </head>
    <body>
      <h1>WELCOME THAILAND:V43</h1>
      <img src="https://images.pexels.com/photos/4319885/pexels-photo-4319885.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="Beautiful Thailand">
    </body>
    </html>
  `);
});

// Listen on port 3000
server.listen(3000, () => {
  // Log a message when the server starts
  console.log('Server running at http://localhost:3000/');
});
