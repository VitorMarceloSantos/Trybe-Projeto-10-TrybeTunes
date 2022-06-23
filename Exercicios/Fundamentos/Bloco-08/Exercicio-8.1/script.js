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

const sorteio = (numero) => {
  if ((Math.floor(Math.random() * 5) + 1) === numero) { // gerando um número aleatorio entre 1 e 5)
    return 'Parabéns você ganhou.';
  } 
  return 'Tente novamente.';
}

const functSorteio = (numero, callback) => {
  return callback(numero);
}

console.log(functSorteio(5,sorteio));

// Exercicio 03

const functCorrecao = (estudante, gabarito) => {
  let resultado = 0;
  for (let i = 0; i < estudante.length; i += 1) {
    if (estudante[i] === gabarito[i]) {
      resultado += 1;
    } else if ((estudante[i] !== gabarito[i]) && (gabarito[i] !== 'N.A')) {
      resultado -= 0.5;
    }
    
  }
  return `Total de Pontos: ${resultado}`;
}

const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];

const correcaoQuestoes = (estudante, gabarito, calllback) => {
  return calllback(estudante, gabarito);
}

console.log(correcaoQuestoes(STUDENT_ANSWERS, RIGHT_ANSWERS, functCorrecao));