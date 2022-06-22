// Exercicio 01

const functNomeEmail = (nome) => {
  const email = nome.split(' ').join('_').toLowerCase();
  return {nome, email:`${email}@trybe.com`}
};

const newEmployees = (functNome) => {
  const employees = {
    id1: functNome('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: functNome('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: functNome('Carla Painva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};
console.log(newEmployees(functNomeEmail));
