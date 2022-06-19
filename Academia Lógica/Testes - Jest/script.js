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

const welcomeUser = (username) => {
  if (typeof username !== 'string') {
    return 'O parâmetro username deve ser do tipo texto!';
  } else if (username.length <= 1) {
    return 'O parâmetro username deve conter pelo menos um caracter!';
  }
  return `Boas-vindas, ${username}!`;
};

const shoppingList = (item) => {
  const list = [
    'suco de maracujá',
    'maçã',
    'sacos de lixo',
    'papel toalha',
    'leite',
  ];
  if (!item) return list;
  list.push(item);
  return list;
};

// const repeatLetter = (letter, text) => {
//   let counter = 0;
//   for (let index = 0; index < text.length; index += 1) {
//     const element = text[index];
//     if (letter === element) {
//       counter += 1;
//     }
//   }
//   return counter;
// };

// const longestWord = (array) => {
//   if (!array || array.length === 0) return 'Array inválido!';
//   let word = array[0];
//   for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     if (typeof element !== 'string') return 'Array inválido!';
//     if (element.length > word.length) {
//       word = element;
//     }
//   }
//   return word;
// };

module.exports = {createState, finalSpeed, isEven, isNumber, welcomeUser, shoppingList};

