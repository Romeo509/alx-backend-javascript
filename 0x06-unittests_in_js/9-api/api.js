const express = require('express');

const app = express();
const port = 7865;

app.get('/', (request, response) => {
  response.send('Welcome to the payment system');
});

// Add a new route for /cart/:id with regex validation
app.get('/cart/:id([0-9]+)', (request, response) => {
  const id = request.params.id;
  response.send(`Payment methods for cart ${id}`);
});

// Handle invalid routes for /cart/:id
app.use('/cart', (request, response) => {
  response.status(404).send('Not Found');
});

app.listen(port, () => {
    console.log("API available on localhost port 7865");
});

module.exports = app;
