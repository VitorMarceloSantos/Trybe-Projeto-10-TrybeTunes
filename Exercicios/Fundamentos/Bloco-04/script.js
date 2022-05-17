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
