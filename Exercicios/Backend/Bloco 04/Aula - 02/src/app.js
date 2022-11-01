const readFile = require('./readFile');
const writeFile = require('./writeFile');
const express = require('express');

const app = express();
app.use(express.json()); // defenindo um middiare que fará a conversão do corpo para json

app.get('/', (req, res) => res.status(200).json({ message: 'Olá Mundo!' }));

// Todo dado que vem por params ou por query (ou seja dados enviados pela URL do navegador) são recebidos como STRING. 
// Acessando por query
app.get('/search', (req, res) => {
  const { name, age } = req.query;
  res.status(200).send(`Recebi o nome ${name} e a idade ${age}`);
  // thunderclient: http://localhost:3001/search?name=Vitor&age=30 - sendo que name/age são chaves; ?-idicador de query, & - adicionando chave/valor
});

// Acessando por parâmetro
app.get('/product:id', (req, res) => {
  const { id } = req.params;
  res.status(200).send(`O código do produto é: ${id}`);
  // thunderclient: http://localhost:3001/product:34
});

// Acessando por corpo
app.get('/data', (req, res) => {
  const { name, age } = req.body;
  res.status(200).send(`O nome é ${name} e a idade é: ${age}`);
  // thundercliente:    , deve passar o objeto json no campo body
});

// Array utilizado para o time de futebol
const teams = [
  {
    id: 1,
    name: 'São Paulo Futebol Clube',
    initials: 'SPF',
  },
  {
    id: 2,
    name: 'Clube Atlético Mineiro',
    initials: 'CAM',
  },
];

app.get('/teams', (req, res) => {
  res.status(200).json({ teams });
});

app.post('/teams', (req, res) => {
  const newTeam = { ...req.body };
  teams.push(newTeam);

  res.status(201).json({ teams }); // status 201 - criado com sucesso

// thunderclient: POST - http://localhost:3001/teams
// body- {
//       "id": 3,
//       "name": "Cruzeiro Esport Clube",
//       "initials": "Cruzeiro"
// }
});


// Exercicio 05

app.get('/movies/:id', async (req, res) => {
  const idParams = req.params.id;
  const fileMovies = await readFile();
  const newFile = fileMovies.find(({ id }) => id === Number(idParams))

  res.status(200).json({ newFile });
})

module.exports = app;

// Exercicio 06

app.get('/movies', async (req, res) => {
  const fileMovies = await readFile();
  res.status(200).json({fileMovies});
});

// Exercicio 07

app.post('/movies', async (req, res) => {
  const { movie, price } = req.body;
  const fileMovie = await readFile();
  const newMovie = {
    id: (fileMovie.length) + 1,
    movie,
    price
  }
  const newFile = ([...fileMovie, newMovie]);
  await writeFile(newFile);

  res.status(201).json({ newFile });

});

// Exercicio 08

app.put('/movies/:id', async (req, res) => {
  const idParam = req.params.id;
  const { movie, price } = req.body;
  const fileMovie =  await readFile();

  const position = fileMovie.findIndex(({id}) => id === Number(idParam));
  fileMovie[position] = { id: Number(idParam), movie, price };

  await writeFile(fileMovie);
  res.status(201).json(fileMovie);

});

// Exercicio 09

app.delete('/movies/:id', async (req, res) => {
  const idParam = req.params.id;
  const fileMovie = await readFile();

  const newFile = fileMovie.filter(({ id }) => id !== Number(idParam));
  
  await writeFile(newFile);

  res.status(200).json(newFile);
});

