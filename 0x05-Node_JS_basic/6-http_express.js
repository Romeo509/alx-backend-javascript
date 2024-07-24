const express = require('express');

const app = express();
const PORT = 1245;

// Middleware to handle root endpoint '/'
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Middleware to handle any other endpoint
app.use((req, res) => {
  res.status(404).send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Error</title>
    </head>
    <body>
      <pre>Cannot GET ${req.originalUrl}</pre>
    </body>
    </html>
  `);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
