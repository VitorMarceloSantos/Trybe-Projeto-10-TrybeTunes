// Exemplo de funções HOF

const cumprimentarPessoas = (callback, nome) => {
  return callback(nome);
}

const cumpNormal = (nome) => {
  return `Bom dia, ${nome}.`;
}
const cumpFeliz = (nome) => {
  return `Oiiiêê, tenha um excelente dia, ${nome}.`;
}
const cumpMalHumor= (nome) => {
  return `Oi, ${nome}.`;
}

console.log(cumprimentarPessoas(cumpNormal,'Vitor'));
console.log(cumprimentarPessoas(cumpFeliz,'Vitor'));
console.log(cumprimentarPessoas(cumpMalHumor,'Vitor'));

// Exemplo de funções HOF

const resultado = (num1, num2, callback) => {
  return callback(num1, num2);
}

const soma = (num1, num2) => {
  return num1 + num2;
}
const sub = (num1, num2) => {
  return num1 - num2;
}
const mult = (num1, num2) => {
  return num1 * num2;
}
const div = (num1, num2) => {
  return num1 / num2;
}

console.log(resultado(10, 5, soma));
console.log(resultado(10, 5, sub));
console.log(resultado(10, 5, mult));
console.log(resultado(10, 5, div));


// Exercicio 01

const functNomeEmail = (nome) => {
  const email = nome.replace(' ', '.').toLowerCase();
  return {nome, email:`${email}@trybe.com`}
};

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Painva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};
console.log(newEmployees(functNomeEmail));

// Exercicio 02

