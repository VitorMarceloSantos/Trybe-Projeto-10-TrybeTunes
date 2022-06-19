// Exericios da Academia de Lógica - Testes

const createState = (state, inicials, capital, population) => {
  // try {
    if (!state || !inicials || !capital || !population) {
      throw new Error('Preencha todos os campos para criar sua cidade!');
    }
    return `Bem-vindo ao estado ${state}-${inicials}, nossa capital ${capital} possui ${population} pessoas`;
  // } catch (error) {
  //   return error.message;
  // }
};

const finalSpeed = (tempo) => {
  if (!tempo || typeof tempo !== 'number') return 0;
  const gravidade = 9.8;
  return tempo * gravidade;
};

const isEven = (number) => {
  if (number % 2 === 0) {
    return 'esse valor é par';
  }
  return 'esse valor é ímpar';
};

const isNumber = (value) => {
  if (typeof value === 'number') {
    return true;
  }
  return false;
};

module.exports = {createState, finalSpeed, isEven, isNumber};

