// Import required modules
const http = require('http');
const countStudents = require('./3-read_file_async');

// Define the port and host for the server
const PORT = 1245;
const HOST = 'localhost';

// Create an HTTP server instance
const app = http.createServer((req, res) => {
  // Handle the '/' route
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/plain');
    res.statusCode = 200;
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') {
    // Respond with plain text
    res.setHeader('Content-Type', 'text/plain');
    res.statusCode = 200;

    // Call the countStudents function with the CSV file
    countStudents('database.csv')
      .then(() => {
        res.end('Done!\n'); // End the response after counting students
      })
      .catch((error) => {
        res.statusCode = 500; // Internal Server Error
        res.end(`Error: ${error.message}\n`);
      });
  } else {
    res.statusCode = 404; // Not Found
    res.end('Not Found\n');
  }
});

// Make the server listen on the specified port and host
app.listen(PORT, HOST, () => {
  console.log(`Server listening at -> http://${HOST}:${PORT}`);
});

// Export the server instance
module.exports = app;
