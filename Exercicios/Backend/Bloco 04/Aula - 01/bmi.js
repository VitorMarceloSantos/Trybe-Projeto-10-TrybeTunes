const readline = require('readline-sync');

const bmi = () => {
  const weight = readline.questionFloat('What’ your weight? ');
  const height = readline.questionFloat('What’ your height? ');
  const result = Number((weight / (Math.pow(height,2))).toFixed(2));
  let imc = 'IMC';

  if (result < 18.5) {
    imc = 'Abaixo do Peso - Magreza';
  } else if (result >= 18.5 && result < 24.9) {
      imc = 'Peso - Normal';
  } else if (result >= 24.9 && result < 29.9) {
    imc = 'Acima do Peso - Sobrepeso';
  } else if (result >= 29.9 && result < 34.9) {
    imc = 'Acima do Peso - Obesidade I';
  } else if (result >= 34.9 && result < 39.9) {
    imc = 'Acima do Peso - Obesidade II';
  } else if (result >= 40) {
    imc = 'Acima do Peso - Obesidade III';
  }
  
  return console.log( `O IMC é de: ${result} - ${imc}`);
}
bmi();