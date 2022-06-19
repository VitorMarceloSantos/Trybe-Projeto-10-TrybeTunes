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

module.exports = {createState, finalSpeed};

