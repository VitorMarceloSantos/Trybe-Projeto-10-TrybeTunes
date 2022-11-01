const fs = require('fs').promises;

const readFile = async () => {
  const data = await fs.readFile('./movies.json', 'utf-8');
  const arrayMovies = JSON.parse(data);
  console.log(arrayMovies);

  // if (arrayMovies.length === 0) {
  //   throw new Error('Filme não encontrado.');
  // }
  // return arrayMovies;
};

// const readMovies = async () => {
//   const read = await readFile();
//   // console.log(read);
// };

// readMovies();
readFile();