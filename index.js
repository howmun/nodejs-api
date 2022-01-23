const express = require('express');
const app = express();

const stripe = require('stripe')('sk_test_51KL5zGIpVBORLBeN5WMZXOUGUPc4LeqNmF8bdV9AlCNP4xBabkXQwV1M7IpbuBXwvL9e1WdtA41oZzK9ZA45xY25009CTzYFUt');

// the serving api endpoint
app.get('/api', (req, res) => {
  // apiKey Store in header like X-Api-Key is better
  const apiKey = req.query.apiKey;

  res.send({ data: 'nah, here\' your wheather data.'})
});

// subscribing endpoint
app.post('/checkout', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: [
      {
        price: 'price_1KL61aIpVBORLBeNhUe69X1W',
      },
    ],
    // {CHECKOUT_SESSION_ID} is a string literal; do not change it!
    // the actual Session ID is returned in the query parameter when your customer
    // is redirected to the success page.
    success_url: 'http://localhost:5000/success?session_id={CHECKOUT_SESSION_ID}',
    cancel_url: 'http://localhost:5000/error',
  });

  res.send(session);
});


app.listen(8080, ()=>console.log('alive on http://localhost:8080'));