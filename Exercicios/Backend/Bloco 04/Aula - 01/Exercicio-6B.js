const fs = require('fs').promises;

async function getSimpsonsId (idPersonagem) {
  const data = await fs.readFile('./simpson.json', 'utf-8');
  const arraySimpsons = JSON.parse(data);
  const chooseSimpson = arraySimpsons.find(({id}) => Number(id) === idPersonagem);

  if(!chooseSimpson) { // caso seja falso
    throw new Error('Personagem não encontrado.');
  }

  return chooseSimpson;
}

async function simpsonId (value) {
  const simpson = await getSimpsonsId(value);
  console.log(simpson);
}

simpsonId(1);