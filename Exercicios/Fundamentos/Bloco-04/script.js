//Exercício 01

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
console.log(`Bem vinda, ${info["personagem"]}.`);

//Exercício 02

info["recorrente"] = "Sim"; //Inserindo uma nova chave e valor

console.log(info);

//Exercício 03

for(keys in info){  //for in: tem como referência os indices(Keys)
  console.log(keys);
}

//Exercício 04

for(keys in info){  //for in: tem como referência os indices(Keys)
  console.log(info[keys]);
}

//Exercício 05

let infoUsuario = { //Criando o Objeto
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: "Sim"
};

let arrayKeys = [];
for(let keys in info){
  arrayKeys.push(keys); //Vai armazenar todas as keys
}

for(let i = 0; i < Object.keys(info).length; i +=1){ //Para saber o tamanho de um objeto, deve utilizar o seguinte código: Object.keys(aqui vai o nome do objeto).length
  if((info[arrayKeys[i]]) === (infoUsuario[arrayKeys[i]])){
    console.log("Ambos recorrentes");
  }else{
    console.log(`${info[arrayKeys[i]]} e ${infoUsuario[arrayKeys[i]]}`);
  }
} 

//Exercicio 06

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

console.log(`O livro favorito de ${leitor["nome"]} ${leitor["sobrenome"]} se chama '${leitor["livrosFavoritos"][0]["titulo"]}'.`); 


//Exercício 07

leitor["livrosFavoritos"][1] = {titulo: "Harry Potter e o Prisioneiro de Azkaban", autor: "JK Rowling", editora: "Rocco"};


//Exercício 08

console.log(`${leitor["nome"]} tem ${leitor["livrosFavoritos"].length} livros favoritos.`); // ${leitor["livrosFavoritos"].length}  -> acessando o array e utilizando o metodo .length para saber o tamanho do array

//Exercicios Funções
//Exercicio 01

function verificarPalindromo(palavra){
  let palavraMinuscula = palavra.toLowerCase(); //todas as letras ficaram em minusculo, caso contrario pode ocorrer erro(case sensitive)
  let palavraArray = palavraMinuscula.split(""); //converte a string em um array
  let reverse = palavraArray.reverse(); // inverte os valores do array
  let palavraReverse = reverse.join(""); // converte o array em string

  if(palavraMinuscula === palavraReverse){ 
    return true;
  }
  return false;
}

if(verificarPalindromo("Arara") === true){
  console.log("As palavras são palindromos.");
}else{
  console.log("As palavras NÃO são palindromos.");
};

//Exercicio 02

let arrayNumeros = [2, 3, 6, 7, 10, 1];

function arrayIndice(array){
  let maior = array[0];
  for(let i = 0; i < array.length; i+=1){
    if(array[i] > maior){
      maior = array[i];
    }
  }
  return array.indexOf(maior); //vair retornar o indice do maior número
}
console.log(`O indice do maior valor é: ${arrayIndice(arrayNumeros)}`); //chamando a função e passando como parâmentro o arrayNumeros

//Exercicio 03

let arrayEx03 = [2, 4, 6, 7, 10, 0, -3];

function arrayIndiceMenor(array){
  let menor = array[0];
  for(let i = 0; i < array.length; i+=1){
    if(array[i] < menor){
      menor = array[i];
    }
  }
  return array.indexOf(menor); //vair retornar o indice do menor número
}
console.log(`O indice do menor valor é: ${arrayIndiceMenor(arrayEx03)}`); //chamando a função e passando como parâmentro o arrayNumeros

//Exercício 04

let arrayNomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function arrayCaracteres(array){
  let maior = array[0];
  for(let i = 0; i < array.length; i+=1){
    if(array[i].length > maior.length){
      maior = array[i];
    }
  }
  return maior; //vair retornar o maior nome
}
console.log(`O nome com maior caracteres é: ${arrayCaracteres(arrayNomes)}`); //chamando a função e passando como parâmentro o arrayNumeros