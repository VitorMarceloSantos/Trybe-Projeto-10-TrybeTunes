const fs = require('fs').promises;
const path = require('path'); // O path.dirname()método retorna o nome do diretório de um path

const moviesPath = path.resolve(__dirname, './movies.json'); // retorna o diretório completo onde está o /movies.json -- /Área de Trabalho/Curso-WebFullStack-Trybe/Exercicios/Backend/Bloco 04/Aula - 02/src/movies.json

const readFile = async () => {
  
  const data = await fs.readFile(moviesPath);
  const arrayMovies = JSON.parse(data);

  if (arrayMovies.length === 0) {
    throw new Error('Filme não encontrado.');
  }
  return arrayMovies;
};

module.exports = readFile;