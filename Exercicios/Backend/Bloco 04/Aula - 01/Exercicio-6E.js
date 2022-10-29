const fs = require('fs').promises;

const addSimpsons = async () => {
  const data = await fs.readFile('./simpsonFamily.json', 'utf-8');
  const arraySimpsons = JSON.parse(data);
  
  try{
    if(arraySimpsons.length !== 0){
      arraySimpsons.push({id: '5', name: 'Nelson Muntz'});
      return arraySimpsons;
    }
  }
  catch(err){
    console.error(`Erro ao converter nome - ${err.message}`);
  }
}

const writeSimpsons = async () => {
  const arraySimpsons = await addSimpsons();
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(arraySimpsons));
}

const showSimpsons = async () => {
  await writeSimpsons();
}

showSimpsons();
