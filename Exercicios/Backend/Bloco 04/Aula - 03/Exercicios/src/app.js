const express = require('express');
const app = express();

app.use(express.json()); // midlleware jason

app.get('/', (req, res) => {
  console.log('Funcionou');
})

module.exports = app;