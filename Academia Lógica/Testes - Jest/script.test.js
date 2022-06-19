// Exericios da Academia de Lógica - Testes

const { createState, finalSpeed, isEven } = require('./script');

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

describe('Testando a função isEven', () => {
  test('Escreva um teste se quando a função é chamada isEven(2), retorna a string "esse valor é par"', () => {
    expect(isEven(2)).toBe('esse valor é par');
  });
});