//Exercício - 01
let fat = 10;
let temp = fat;

for(let i = fat; i >= 1; i-=1){
  if(i != 1){
  temp *= (i-1); //O valor vai começar 9 pois a variável temp já armazenar o valor de 10
  }
}
console.log(`O fatorial de ${fat}! é: ${temp}.`);

//Exercício - 02
let palavra = "A turma 23 é a melhor !!.";
let inverso = ""; //Sgring Vazia

for(let i = (palavra.length - 1); i >= 0; i-=1){ //O contador(i) irá receber o tamanho da string palavra - 1, pois os array sempre começam no zero
inverso += palavra[i];
}
console.log(`O iverso da paralavra: ${palavra} Equivale a: ${inverso};`);

//Exercício - 03
let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = [0];
let menor = array[0]; //ambas as variáveis vão receber o valor contido na posição [0];

for (let i = 0; i < array.length; i+=1){
  if (array[i].length > maior.length){ //vai testar o tamanho das strings
  maior = array[i];
  }
  if(array[i].length < menor.length){ //vai testar o tamanho das strings
  menor = array[i];
  }
}

console.log(`A maior string é: ${maior}`);
console.log(`A menor string é: ${menor}`);