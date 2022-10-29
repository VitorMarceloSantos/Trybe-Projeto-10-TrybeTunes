const fs = require('fs').promises;

async function deleteSimpsons(pos1, pos2) {
  const data = await fs.readFile('./simpson.json', 'utf-8');
  const arraySimpsons = JSON.parse(data);
  const findSimpsons = arraySimpsons.find(({ id }) => Number(id) !== pos1 && Number(id) !== pos2);

  if(!findSimpsons) {
    throw new Error('Nenhum resultado encontrado.');
  }

  return findSimpsons;
}

const simpsonsId = async (id1, id2) => {
  const returnFunction = await deleteSimpsons(id1, id2);
  console.log(returnFunction);
}

simpsonsId(1, 5);