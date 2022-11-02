const fs = require('fs').promises;
const path = require('path');

const filePath = path.resolve(__dirname, './newLocale.json'); 

const readFile = async () => {
  const data = await fs.readFile(filePath);
  const file =  JSON.parse(data);

  if (file.length === 0) {
    throw new Error('Não encontrado.');
  }

  return file;

}

module.exports = readFile;