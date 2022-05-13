let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Exercício 01
console.log("Exercício 01");

for(let i = 0; i < numbers.length; i+=1){
  console.log(`Número: ${numbers[i]}`); 
}
/*
for(let num of numbers){
  console.log(`Número: ${num}`); 
}
*/

//Exercício 02
console.log("Exercício 02");
/*
let soma = 0;
for(let i = 0; i < numbers.length; i+=1){
  soma += numbers[i];
}
console.log(`A soma é: ${soma}`);
*/
let soma = 0;
for(let num of numbers){
  soma += num;
};
console.log(`A soma é: ${soma}`);

//Exercício 03
console.log("Exercício 03");

let media = 0;
for(let i = 0; i < numbers.length; i+=1){
  media += numbers[i];
};
media = (media / numbers.length);
console.log(`A média é: ${media}`);
/*
let media = 0;
for(let num of numbers){
  media += num;
};
media = (media / numbers.length)
console.log(`A media é: ${media}`);
*/ 

//Exercício 04
console.log("Exercício 04");

if(media > 20){
  console.log(`O valor de ${media} é maior que 20.`);
}else{
  console.log(`O valor de ${media} é menor ou igual a 20.`);
}

//Exercício 05
console.log("Exercício 05");
/*
let maior = 0;
for(let i = 0; i < numbers.length; i+=1){
  if(numbers[i] > maior){
    maior = numbers[i];
  }
}
console.log(`O maior número é: ${maior}`);
*/

let maior = 0;
for(let num of numbers){
  if(num > maior){
    maior = num;
  }
};
console.log(`O maior número é: ${maior}`);

//Exercício 06
console.log("Exercício 06");

let impar = [];
for(let i = 0; i < numbers.length; i+=1){
  if((numbers[i] % 2) != 0){
    impar.push(numbers[i]);
  }
}
if(impar.length != 0){
  for(let i = 0; i < impar.length; i+=1){
    console.log(`São números ímpares: ${impar[i]}`);
  }
  console.log(`Total de números ímpares: ${impar.length}`);
}else{
  console.log("Nenhum valor ímpar foi encontrado.");
}

//Exercício 07
console.log("Exercício 07");


let menor = numbers[0];
for(let i = 0; i < numbers.length; i+=1){
  if(numbers[i] < menor){
    menor = numbers[i];
  }
}
console.log(`O menor número é: ${menor}`);

/*
let menor = numbers[0];
for(let num of numbers){
  if(num < menor){
    menor = num;
  }
};
console.log(`O menor número é: ${menor}`);
*/

//Exercício 08
console.log("Exercício 08");

let arrNumeros = []
for(let i = 0; i < 25; i+=1){
  arrNumeros[i] = i + 1;
};
console.log(arrNumeros);

//Exercício 09
console.log("Exercício 09");

for(let i = 0; i < arrNumeros.length; i+=1){
  console.log(`O número ${arrNumeros[i]} / 2 = ${arrNumeros[i] / 2}.`);
}

//Exercícios Bônus - 01
console.log("Exercicio Bônus - 01");

let numbersBonus = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Ordenar em ordem crescente
for(let i = 0; i < numbersBonus.length; i+=1){
  for(let j = i + 1; j < numbersBonus.length; j+=1){//Sempre vai executar o numero seguinte ao [i], pois os valores anteriores sempre serão os menores
    if(numbersBonus[i] > numbersBonus[j]){  //Vai armazenar o menor valor na variável menor, e o menor valor vai ocupar a posição[i]
      let menor = numbersBonus[j];
      numbersBonus[j] = numbersBonus[i];
      numbersBonus[i] = menor;
    }
  }
}
console.log(numbersBonus)

//Exercícios Bônus - 02
console.log("Exercicio Bônus - 02");

//Ordenar em ordem decrescente
for(let i = 0; i < numbersBonus.length; i+=1){
  for(let j = i + 1; j < numbersBonus.length; j+=1){//Sempre vai executar o numero seguinte ao [i], pois os valores anteriores sempre serão os maiores
    if(numbersBonus[i] < numbersBonus[j]){  //Vai armazenar o maior valor na variável maior, e o maior valor vai ocupar a posição[i]
      let maior = numbersBonus[j];
      numbersBonus[j] = numbersBonus[i];
      numbersBonus[i] = maior;
    }
  }
}
console.log(numbersBonus)

//Exercícios Bônus - 03
console.log("Exercicio Bônus - 03");

//Criar um novo array, multiplicado pelo valor do seguinte
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; //Já foi declarada no início dos exercicios bônus.

let arrayMultiplicado = []; //Vai armazenar os valores multiplicados
for(let i = 0; i < numbers.length; i+=1){
  if( i == numbers.length - 1){
    arrayMultiplicado.push(numbers[i] * 2);
  }else{
    for(let j = i + 1; j <= i+1; j+=1){//Sempre vai executar o numero seguinte ao [i], pois os valores anteriores sempre serão os maiores
      arrayMultiplicado.push(numbers[i] * numbers[j]);
    }
  }
}
console.log(arrayMultiplicado);
