// index.js
const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello from app1!')
})
app.listen(6000, () => console.log('Server is up and running'));
