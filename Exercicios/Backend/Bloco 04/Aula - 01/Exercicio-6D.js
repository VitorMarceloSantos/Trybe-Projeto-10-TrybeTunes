const fs = require('fs').promises;

const selectSimpsons = async () => {
  const data = await fs.readFile('./simpson.json', 'utf-8');
  const arraySimpsons = JSON.parse(data);
  const sliceSimpsons = arraySimpsons.slice(0,4);
  try{
    if(sliceSimpsons.length !== 0) {
      await fs.writeFile('./simpsonFamily.json', JSON.stringify(sliceSimpsons)); // para salvar os dados primeiramente devem converter ele em string(utilizando o stringify), e para utilizar os dados devem converter eles em objeto JavaScript com o JSON.parse();
    }
  }
  catch(err){
    console.error(`Erro ao escrever arquivo. ${err.message}`);
  }
}

const showSimpsons = async () => {
  const showMe = await selectSimpsons();
  // console.log(showMe);
} 

showSimpsons();