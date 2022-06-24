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

//Utilizando HOF

const functGeral = (array, callback) => {
  return callback(array);
}

// Exercicio - 01
//  Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

const functFind = (livros) => { //HOF
  return livros.find((livro) => { // Callback
    return (livro.author.birthYear === 1947); // retorna o elemento
  }).author.name; // o find irá retornar um elemento, e utiliza o author.name após o find(pega esse elemento retornado pelo find).
}

 console.log(`O primeiro autor que nasceu em 1947 é: ${functGeral(books, functFind)}`);

 // Exercício - 02
 // Retorne o nome do livro de menor nome.

 const funcForEach = (livros) => {
  let menor = livros[0].name; // vair armazenar o nome do menor livro, recebe como comparacao o primeiro livro
   livros.forEach((livro) => {
    if (livro.name.length < menor.length) {
      menor = livro.name;
    }
  });
  return menor;
 }
 console.log(`O menor título é: ${functGeral(books, funcForEach)}`);

 // Exercício - 03
 // Encontre o primeiro livro cujo nome possui 26 caracteres. !!! Utilizando o forEach e encerrando sua execução quando a condição for satisfeita!!!

 const funcForEach26 = (livros) => { // Obs: cada função deverá ter seu retorno
  try{
    livros.forEach((livro) => {
      if (livro.name.length === 26) {
        throw livro.name; // lançando o elemento para o catch
      }
    });
  } 
  catch(e){ // e - vai receber como parametro o que foi lançado por throw
    return e; // retorno da função funcForEach26
  }
}
 console.log(`O título com 26 caracteres é: ${functGeral(books, funcForEach26)}`);

// Exercício - 03
// Encontre o primeiro livro cujo nome possui 26 caracteres.

 const funcFind = (livros) => {
  return livros.find((livro) => {
    return livro.name.length === 26; // retorna um array de 1 elemento
  });
}
 console.log(`O título com 26 caracteres é: ${functGeral(books, funcFind).name}`); // ao retornar o elemento, tem como imprimir suas chaves e valor.

 // Exercicio - 04
 // Ordene os livros por data de lançamento em ordem decrescente.

 const funcSort = (livros) => { // altera a ordem no array principal books.
  return livros.sort((a, b) => a.releaseYear - b.releaseYear); 
  // A lógica é a seguinte: a função recebe, da sort, todos os elementos do array, em pares (elemento1, elemento2), e vai comparando-os. O formato é meuArray.sort((elemento1, elemento2) => /* logica da função */). Ou seja: para o array [1, 2, 3, 4], a função receberá (2, 1), (3, 2), (4, 3) como parâmetros e ordenará o array com base em seu resultado. Se a operação de elemento1 com elemento2 der resultado negativo, elemento1 vai para trás. Caso contrário, vai para frente, para, de forma decrescente, só inverter elemento1 - elemento2 para elemento2 - elemento1.
 }
 console.log(functGeral(books, funcSort));

 // Exercicio - 05
 // Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.

 const functEvery = (livros) => { // seculo XX -> 1901 até 2000
  return livros.every((livro) => { // vai retorna true se todas os elementos satisfazerem o if
    return ((livro.author.birthYear >= 1901) && (livro.author.birthYear <= 2000)); // não necessita do if
  });
 }
console.log(`Todos os escritores nasceram no seculo XX: ${functGeral(books, functEvery)}`);

// Exercicio - 06
// Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.

const functSome = (livros) => {
    return livros.some((livro) => {
      return ((livro.releaseYear >= 1980) && (livro.releaseYear <= 1989));
    });
}
console.log(`Possui um livro da decada de 1980: ${functGeral(books, functSome)}`);

// Exercicio - 07
// Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário. Verifica se possui escritores com a mesma data de nascimento.

const functEveryNome = (livros) => {
  return livros.every((livro1) => {  // testa todos os elementos, se encontrar algum false é encerrado
    !livros.some((livro2) => { // retorna true, e será transformado em false(!)
      return ((livro1.birthYear === livro2.birthYear) && (livro1.author.name !== livro2.author.name)); // Compara livro1 e livro2, sendo que em cada posição do livro1 o livro2 percorre todo o laço. Caso haja um true(as duas condições de some seja satisfeita , o ! antes do livros.some vai transformar em false) sendo false o every será encerrado e o array books contém dois autores com a data de nascimento igual.
    });
  });
}
console.log(`Existe escritores com a mesma data de nascimento: ${functGeral(books, functEveryNome)}`);
