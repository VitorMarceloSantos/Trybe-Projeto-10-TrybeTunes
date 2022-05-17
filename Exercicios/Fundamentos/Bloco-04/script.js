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
