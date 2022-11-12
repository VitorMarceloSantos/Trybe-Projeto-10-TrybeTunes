const express = require('express');
require('express-async-errors'); // não precisa definir uma variável
const app = express();
const apiCredentials = require('./middlewares/apiCredentials');

// app.use só afeta as rotas que vem abaixo da sua definição. Ou seja, todas as rotas da API abaixo dela vão passar pela app.use(), caso não queira que passe, deve colocar a rota acima do do app.use().  -> Middleware global

// tratando erros assincronos - Basta instalar com npm install express-async-errors@3.1, importar ele no arquivo app.js antes de criar o objeto app

let nextId = 3;
const teams = [
  { id: 1, nome: 'São Paulo Futebol Clube', sigla: 'SPF' },
  { id: 2, nome: 'Sociedade Esportiva Palmeiras', sigla: 'PAL' },
];

app.use(express.json());

// Usando middleware

const existingId = (req, res, next) => {
  const idParams = Number(req.params.id);

  if(teams.some(({id}) => id === idParams)) {
    next(); // chama o proximo middleware
  }
  else {
    res.sendStatus(400);
  }
}

app.use(apiCredentials); // todas as requisições vão passar por apiCredentials

app.get('/teams', (req, res) => res.json(teams));

// a função callback é um middleware -> (req, res) => {}

app.get('/teams/:id', existingId, (req, res) => { // chamando o metodo existingId, caso seja positivo irá chamar o próximo middleware
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  if (team) {
    res.json(team);
  } else {
    res.sendStatus(404);
  }
});

app.post('/teams', (req, res) => {
  const requiredProperties = ['nome', 'sigla'];
  if (requiredProperties.every((property) => property in req.body)) {
    const team = { id: nextId, ...req.body };
    teams.push(team);
    nextId += 1;
    res.status(201).json(team);
  } else {
    res.sendStatus(400);
  }
});

app.put('/teams/:id', existingId, (req, res) => { // chamando o metodo existingId, caso seja positivo irá chamar o próximo middleware
  const id = Number(req.params.id);
  const requiredProperties = ['nome', 'sigla'];
  const team = teams.find(t => t.id === id);
  if (team && requiredProperties.every((property) => property in req.body)) {
    const index = teams.indexOf(team);
    const updated = { id, ...req.body };
    teams.splice(index, 1, updated);
    res.status(201).json(updated);
  } else {
    res.sendStatus(400);
  }
});

app.delete('/teams/:id', existingId, (req, res) => { // chamando o metodo existingId, caso seja positivo irá chamar o próximo middleware
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  if (team) {
    const index = teams.indexOf(team);
    teams.splice(index, 1);
  }
  res.sendStatus(204);
});



module.exports = app;