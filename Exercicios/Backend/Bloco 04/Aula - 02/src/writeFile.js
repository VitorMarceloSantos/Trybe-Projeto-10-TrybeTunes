const path = require('path'); // O path.dirname()método retorna o nome do diretório de um path

const moviesPath = path.resolve(__dirname, './movies.json'); // retorna o diretório completo onde está o /movies.json -- /Área de Trabalho/Curso-WebFullStack-Trybe/Exercicios/Backend/Bloco 04/Aula - 02/src/movies.json

const fs = require('fs').promises;

const writeFile = async (value) => {
  
  const data = JSON.stringify(value) // para salvar no arquivo, ao usar a funcao writeFile o arquivo deve ser salvo no formato string, por isso usa o stringify
  await fs.writeFile(moviesPath, data);
};

module.exports = writeFile;