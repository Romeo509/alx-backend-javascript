const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 7865;

app.use(bodyParser.json());

app.get('/', (request, response) => {
  response.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (request, response) => {
  const id = request.params.id;
  response.send(`Payment methods for cart ${id}`);
});

app.use('/cart', (request, response) => {
  response.status(404).send('Not Found');
});

// New endpoint for available payments
app.get('/available_payments', (request, response) => {
  response.json({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

// New endpoint for login
app.post('/login', (request, response) => {
  const { userName } = request.body;
  response.send(`Welcome ${userName}`);
});

app.listen(port, () => {
    console.log(`API available on localhost port ${port}`);
});

module.exports = app;
