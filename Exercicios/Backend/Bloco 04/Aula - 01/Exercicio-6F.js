const fs = require('fs').promises;

const verifySimpsons = async () => {
  const data = await fs.readFile('./simpsonFamily.json', 'utf-8');
  const arraySimpsons = JSON.parse(data);
  const index = arraySimpsons.findIndex(({name}) => name === 'Nelson Muntz');
  try{
    if(index.length !== 0) {
      arraySimpsons.splice(index, 1, {id: (index + 1).toString(), name: 'Maggie Simpson' });
      return arraySimpsons;
    }
  }
  catch(err){
    console.error(`Não foi possível adicionar o personagem. - ${(err.messagem)}`);
  }
}

const showSimpsons = async () => {
  const newSimpsons = await verifySimpsons();
  console.log(newSimpsons);
}

showSimpsons();