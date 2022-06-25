const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

// Função HOF - Geral

const functGeral = (array, callback) => {
  return callback(array);
}

// Exercicio - 01
// Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA.

// const functMap = (livros) => {
//   return livros.map((livro) => {
//     return `${livro.name} - ${livro.genre} - ${livro.author.name}`;
//   })
// }
// console.log(functGeral(books, functMap));

// Exercicio - 02
//  Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.

// const functMapSort = (livros) => {
//   return livros.map((livro) => {
//     let objModelo = {};
//     objModelo.author = livro.author.name;
//     objModelo.age = (livro.releaseYear - livro.author.birthYear); // idade na data do lançamento do livro
//     return objModelo;
//   }).sort((a,b) => a.age - b.age); // utilizando o sort com a saída do map
// }
// console.log(functGeral(books, functMapSort));

// Exercício - 03
// Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.

// const functFilter = (livros) => {
//   return livros.filter((livro) => { // o metodo filter já tem um if embutido
//     return ((livro.genre === 'Ficção Científica') || (livro.genre === 'Fantasia')); // retorna um novo array
//   });
// }
// console.log(functGeral(books, functFilter));

// Exercicio - 04
//  Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.

const functFilterSort = (livros) => {
  return livros.filter((livro) => {
    return ((2022 - livro.releaseYear) >= 60); // filtra os livros que tem mais de 60 anos de publicação(novo array)
  }).sort((a, b) => a.releaseYear - b.releaseYear); // colocando o array(filter) em ordem crescente
}
console.log(functGeral(books, functFilterSort));