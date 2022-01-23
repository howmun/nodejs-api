const express = require('express');
const app = express();

const stripe = require('stripe')('sk_test_51KL5zGIpVBORLBeN5WMZXOUGUPc4LeqNmF8bdV9AlCNP4xBabkXQwV1M7IpbuBXwvL9e1WdtA41oZzK9ZA45xY25009CTzYFUt');

app.get('/api', (req, res) => {
  // apiKey Store in header like X-Api-Key is better
  const apiKey = req.query.apiKey;

  res.send({ data: 'nah, here\' your wheather data.'})
});

app.listen(8080, ()=>console.log('alive on http://localhost:8080'));