// Import the http module
const http = require('http');

// Create a server object
const server = http.createServer((req, res) => {
  try {
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
            color: #FFA500; /* Orange color */
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
        <h1>WELCOME BURIRAM:V50</h1>
        <img src="https://pe-images.s3.amazonaws.com/photo-effects/2021/picture-in-picture/new/photoshop-picture-in-picture-effect.jpg" alt="Beautiful Thailand">
        <h1>THAILAND</h1>
      </body>
      </html>
    `);
  } catch (error) {
    res.writeHead(500, {'Content-Type': 'text/plain'});
    res.end('Internal Server Error');
  }
});

// Listen on port 3000
server.listen(3000, () => {
  // Log a message when the server starts
  console.log('Server running at http://localhost:3000/');
});
