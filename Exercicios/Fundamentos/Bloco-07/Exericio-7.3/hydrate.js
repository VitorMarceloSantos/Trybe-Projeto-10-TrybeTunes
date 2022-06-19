// Exericio - 06

function hydrate(string) {
  let soma = 0;
  let numeros = [];
  let array = string.split('');
  for (let i = 0; i < array.length; i += 1) {
    switch (array[i]) {
      case '1':
      numeros.push(array[i]);
      break;
      case '2':
      numeros.push(array[i]);
      break;
      case '3':
      numeros.push(array[i]);
      break;
      case '4':
      numeros.push(array[i]);
      break;
      case '5':
      numeros.push(array[i]);
      break;
      case '6':
      numeros.push(array[i]);
      break;
      case '7':
      numeros.push(array[i]);
      break;
      case '8':
      numeros.push(array[i]);
      break;
      case '9':
      numeros.push(array[i]);
      break;
    }
  }
  for (let i = 0; i < numeros.length; i += 1){
    soma += Number(numeros[i]);
  }
  if (soma === 1) {
    return `${soma} copo de água`;
  }
  return `${soma} copos de água`;
}

module.exports = hydrate;