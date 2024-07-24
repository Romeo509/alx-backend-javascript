// Import the built-in http module
const http = require('http');

// Define the port and host for the server
const PORT = 1245;
const HOST = 'localhost';

// Create an HTTP server instance
const app = http.createServer();

// Set up an event listener for incoming requests
app.on('request', (_, res) => {
  // Define the response text
  const responseText = 'Hello Holberton School!';

  // Set the Content-Type header to 'text/plain'
  res.setHeader('Content-Type', 'text/plain');

  // Set the Content-Length header based on the response text length
  res.setHeader('Content-Length', responseText.length);

  // Set the HTTP status code to 200 (OK)
  res.statusCode = 200;

  // Write the response text to the response body
  res.write(Buffer.from(responseText));
});

// Make the server listen on the specified port and host
app.listen(PORT, HOST, () => {
  // Log a message to the console once the server starts listening
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

// Export the app instance for potential use elsewhere
module.exports = app;
