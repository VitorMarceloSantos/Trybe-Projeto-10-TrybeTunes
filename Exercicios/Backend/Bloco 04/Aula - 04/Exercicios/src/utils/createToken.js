// Gerando um token aleatorio
// Exemplo saída: 6242e2ba4dc096d6
const crypto = require('crypto');

function generateToken() {
  return crypto.randomBytes(8).toString('hex');
}

module.exports = generateToken;