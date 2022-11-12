const fs = require('fs/promises');
const path = require('path'); // O path.dirname()método retorna o nome do diretório de um path


const tokenPath = path.resolve(__dirname, './authdata.json');

const apiCredentials = async (req, res, next) => {
   // pega o token do cabeçalho, se houver
   const token = req.header('X-API-TOKEN');
   // lê o conteúdo do `./authdata.json` (relativo à raiz do projeto)
   const authdata = await fs.readFile(tokenPath, { encoding: 'utf-8' });
   // readFile nos deu uma string, agora vamos carregar um objeto a partir dela
   const authorized = JSON.parse(authdata);
 
   if (token in authorized) {
     next(); // pode continuar
   } else {
     res.sendStatus(401); // não autoriza
  }
}


module.exports = apiCredentials;