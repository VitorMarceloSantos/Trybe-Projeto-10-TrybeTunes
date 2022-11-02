const fs = require('fs').promises;
const path = require('path');

const filePath = path.resolve(__dirname, './newLocale.json'); 

const writeFile = async (value) => {

  const newFile = JSON.stringify(value);
  
  await fs.writeFile(filePath, newFile);

}

module.exports = writeFile;