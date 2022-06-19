// Exericios da Academia de Lógica - Testes

const createState = require('./script');

describe('Crie o nome, sigla, capital e população do seu Estado', () => {
  it('Retorne a string `Bem-vindo ao estado Caduverso-CV, nossa capital Caduversolandia possui 137921852 pessoas` quando passamos `Caduverso`, `CV`, `Caduversolandia` e `137921852`', () => {
    expect(createState(`Caduverso`, `CV`, `Caduversolandia`,`137921852`)).toBe(`Bem-vindo ao estado Caduverso-CV, nossa capital Caduversolandia possui 137921852 pessoas`);
  });
  // it('Retorne `Preencha todos os campos para criar sua cidade!` caso algum parâmetro não seja passado para a função', () => {
  //   fail('Remova essa linha e escreva seu teste aqui');
  // });
});