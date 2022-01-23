const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  // apiKey Store in header like X-Api-Key is better
  const apiKey = req.query.apiKey;

  res.send({ data: 'nah, here\' your wheather data.'})
});

app.listen(8080, ()=>console.log('alive on http://localhost:8080'));