const express = require('express');
const app = express();
const routers = require('./routers');

app.use(express.json()); // midlleware jason
app.use(routers); // importando as rotas do arquivo index.js





module.exports = app;