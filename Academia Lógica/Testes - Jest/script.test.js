// Exericios da Academia de Lógica - Testes

const { createState, finalSpeed, isEven, isNumber, welcomeUser} = require('./script');

describe('Crie o nome, sigla, capital e população do seu Estado', () => {
  it('Retorne a string `Bem-vindo ao estado Caduverso-CV, nossa capital Caduversolandia possui 137921852 pessoas` quando passamos `Caduverso`, `CV`, `Caduversolandia` e `137921852`', () => {
    expect(createState(`Caduverso`, `CV`, `Caduversolandia`, `137921852`)).toBe(`Bem-vindo ao estado Caduverso-CV, nossa capital Caduversolandia possui 137921852 pessoas`);
  });
  it('Retorne `Preencha todos os campos para criar sua cidade!` caso algum parâmetro não seja passado para a função', () => {
    expect(() => { createState() }).toThrow();
  });
});

describe('Testando a funçao finalSpeed', () => {
  test('Retorna 49 caso a função seja chamanda com o argumento 5finalSpeed(5)', () => {
    expect(finalSpeed(5)).toBe(49);
  });
  test('Retorna 0 caso o parâmetro seja algum tipo diferente de number', () => {
    expect(finalSpeed('5')).toBe(0);
  });
  test('Retorna 0 caso não seja passado parâmetros', () => {
    expect(finalSpeed()).toBe(0);
  });
});

describe('A função recebe um array de números por parâmetro e faz a soma de todos os números pares', () => {
  test('Escreva um teste se quando a função é chamada isEven(2), retorna a string "esse valor é par"', () => {
    expect(isEven(2)).toBe('esse valor é par');
  });
  test('Escreva um teste se quando a função é chamada isEven(3), retorna a string "esse valor é ímpar"', () => {
    expect(isEven(3)).toBe('esse valor é ímpar');
  });
});

describe('A função recebe um parâmetro como argumento e faz uma validação se seu tipo de dado é ou não um número', () => {
  test('Retorna true se passar um número como parâmetro da função', () => {
    expect(isNumber(6)).toBe(true);
  });
  test('Retorna false se passar uma string como parâmetro da função;', () => {
    expect(isNumber('trybe')).toBe(false);
  });
  test('Retorna false se passar uma array como parâmetro da função;', () => {
    expect(isNumber([1, 2, 3])).toBe(false);
  });
  test('Retorna false se passar um objeto como parâmetro da função;', () => {
    expect(isNumber({nome: 'Trybe'})).toBe(false);
  });
});

describe('A função recebe uma string com o nome de uma pessoa usuária e retorna uma nova string desejando boas-vindas.', () => {
  test('Boas-vindas, Gabriel! caso Gabriel seja o nome passado como parâmetro;', () => {
    expect(welcomeUser('Gabriel')).toBe('Boas-vindas, Gabriel!');
  });
  test('O parâmetro username deve conter pelo menos um caracter! caso a quantidade de caracteres for menor que 1;', () => {
    expect(welcomeUser('')).toBe('O parâmetro username deve conter pelo menos um caracter!');
  });
});