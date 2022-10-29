const fs = require('fs').promises;

async function main() {
  try {
    const data = await fs.readFile('./simpson.json', 'utf-8'); // data recebe o conteúdo em json
    const arraySimpsons = JSON.parse(data); // convertando o conteúdo em array
    const simpsonsMap = arraySimpsons.map(({id, name}) => `${id} - ${name}`); // retorna um array com o id e o nome em cada posição
    console.log(simpsonsMap)
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  }
}

main()
