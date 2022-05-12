//Exercício 01
console.log("Exercício 01");

const a = 6;
const b = 2;

//Adição
const soma = a + b;
console.log(`A soma entre ${a} + ${b} = ${soma}`);

//Subtração
const subtracao = a - b;
console.log(`A subtração entre ${a} - ${b} = ${subtracao}`);

//Multiplicação 
const multiplicacao = a * b;
console.log(`A multiplicação entre ${a} * ${b} = ${multiplicacao}`);

//Divisão
const divisao = a / b;
console.log(`A divisão entre ${a} / ${b} = ${divisao}`);

//Exponenciação
const exponenciacao = a ** b;
console.log(`A exponenciação entre ${a} ** ${b} = ${exponenciacao}`);

//Módulo
const modulo = a % b;

/*Exercício 02: Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.*/
console.log("Exercício 02");

const num1 = 3;
const num2 = 7;

if(num1 > num2){
  console.log(`O número ${num1} é o maior.`);
}else{
  console.log(`O número ${num2} é o maior.`);
}

/*Exercício 03: Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.*/
console.log("Exercício 03");

const n1 = 4;
const n2 = 6;
const n3 = 2;
let temp = 0; //Vai armazenar o maior valor

if(n1 > n2){
  temp = n1;
}else{
  temp = n2;
} 
if(temp < n3){
  temp = n3;
}
console.log(`O maior dentre os números ${n1}, ${n2}, ${n3} é: ${temp}`);

/*Exercício 04: Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário. */
console.log("Exercício 04");

const v1 = -7;

if(v1 > 0){
  console.log(`O valor ${v1} é Positive.`);
}else if((v1 == 0)|| (v1 == -0)){
  console.log(`O valor ${v1} é Zero.`);
}else{
  console.log(`O valor ${v1} é Negative.`);
}

/*Exercício 5: Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
 - Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
 - Um ângulo será considerado inválido se não tiver um valor positivo. */
console.log("Exercício 05");

const a1 = 70;
const a2 = 80;
const a3 = 30;
let angulo = a1 + a2 + a3;

if(((a1 < 0) || (a2 < 0) || (a3 < 0)) == true){
  console.log("Os valores devem ser maior ou igual a 0.");
}else if(angulo == 180){
  console.log(true);
}else{
  console.log(false);
}

/*Exercício 6: Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
 - Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
 - Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
 - Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
 - Exemplo: bishop (bispo) -> diagonals (diagonais)*/
console.log("Exercício 06");

/* king(Movimenta apenas uma casa por vez, independente da direção.) - queen(Pode se movimentar na diagona e em linha reta, não possui limite de casas.) - bishop(Movimentaapenas nas diagonais, não possui limite de casas.)- knight(Movimenta em formato de L - sendo duas casas para frente e uma para o lado.) - rook(Movimenta apenas em linhas retas, não possui limite de casas.) - pawn(Movem somente para frente, uma casa por vez. Exceção: primeiro movimeto pode se mover duas casas.) */
let nomePeca = "Rook";
let pecaUpper = nomePeca.toUpperCase(); //transforma todas as letras em maísculas

switch(pecaUpper){
  case "KING":
    console.log("KING - Movimenta apenas uma casa por vez, independente da direção.");
    break;
  case "QUEEN":
    console.log("QUEEN - Pode se movimentar na diagona e em linha reta, não possui limite de casas.");
    break;
  case "BISHOP":
    console.log("BISHOP - Movimenta apenas nas diagonais, não possui limite de casas.");
    break;
  case "KNIGHT":
    console.log("KNIGHT - Movimenta em formato de L - sendo duas casas para frente e uma para o lado.");
    break;
  case "ROOK":
    console.log("ROOK - Movimenta apenas em linhas retas, não possui limite de casas.");
    break;
  case "PAWN":
    console.log("PAWN - Movem somente para frente, uma casa por vez. Exceção: primeiro movimeto pode se mover duas casas.");
    break;
  default:
    console.log("[ERRO] - Nome incorreto.");
 }

/*Exercício 07: Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
  - Porcentagem >= 90 -> A
  - Porcentagem >= 80 -> B
  - Porcentagem >= 70 -> C
  - Porcentagem >= 60 -> D
  - Porcentagem >= 50 -> E
  - Porcentagem < 50 -> F
  - O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100. */
console.log("Exercício 07");

let nota = 88;

if((nota < 0) || (nota > 100)){
  console.log("[ERRO] - Nota Inválida.");
}else{
    if(nota >= 90){
      console.log("Conceito : A");
    }else if((nota >= 80) && (nota < 90)){
      console.log("Conceito : B");
    }else if((nota >= 70) && (nota < 80)){
      console.log("Conceito : C");
    }else if((nota >= 60) && (nota < 70)){
      console.log("Conceito : D");
    }else if((nota >= 50) && (nota < 60)){
      console.log("Conceito : E");
    }else{
      console.log("Conceito : F");
    }      
  }
    
/*Exercício 08: Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.
 - Bonus: use somente um if. */
console.log("Exercício 08");

const x1 = 43;
const x2 = 32;
const x3 = 11;

if(((x1 % 2) == 0) || ((x2 % 2) == 0) || ((x3 % 2) == 0)){
  console.log(true);
}else{
  console.log(false);
}
/*Exercício 09: Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.
 - Bonus: use somente um if.
 */
console.log("Exercício 09");

const y1 = 48;
const y2 = 32;
const y3 = 15;
 
if(((y1 % 2) != 0) || ((y2 % 2) != 0) || ((y3 % 2) != 0)){
  console.log(true);
}else{
  console.log(false);
}

/*Exercício 10: Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
 - Atente que, sobre o custo do produto, incide um imposto de 20%.
 - Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
 - O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
 - valorCustoTotal = valorCusto + impostoSobreOCusto
 - lucro = valorVenda - valorCustoTotal (lucro de um produto)*/
console.log("Exercício 10");

const valorVenda = 275;
const custo = 150;
let impostoVenda = custo * 0.2; // 20% do custo
let lucroLiquido = valorVenda - (custo + impostoVenda); 
let quantidadeVenda = 1000;

if((custo < 0) || (valorVenda < 0) || (quantidadeVenda < 0)){
  console.log("[ERRO] - Valores Inválidos.");
}else{
  console.log(`Lucro Produto: R$`,lucroLiquido);
  console.log(`Custo Total: R$`,(custo + impostoVenda)* quantidadeVenda);
  console.log(`Lucro Líquido: R$`,lucroLiquido * quantidadeVenda);
}

/*Exercício 11: Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto calcule o líquido a ser recebido.
A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
 - INSS (Instituto Nacional do Seguro Social)
 - Salário bruto até R$ 1.556,94: alíquota de 8%
 - Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
 - Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
 - Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
 - IR (Imposto de Renda)
 - Até R$ 1.903,98: isento de imposto de renda
 - De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
 - De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
 - De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
 - Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
 */