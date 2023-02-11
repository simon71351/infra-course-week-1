// index.js
const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello from app2!')
})
app.listen(6001, () => console.log('Server is up and running'));
