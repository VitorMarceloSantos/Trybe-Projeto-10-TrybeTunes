// Exericio - 04

function encode(string) {
  let stringArray = string.split(''); // cria um array da string
  for (let i = 0; i < stringArray.length; i += 1) {
    switch (stringArray[i]) { // vair abranger somente as letras minúsculas
    case 'a':
      stringArray[i] = 1;
      break;
    case 'e':
      stringArray[i] = 2;
      break;
    case 'i':
      stringArray[i] = 3;
      break;
    case 'o':
      stringArray[i] = 4;
      break;
    case 'u':
      stringArray[i] = 5;
      break;
    }
  }
  let stringRetorno = stringArray.join('');
  return stringRetorno;
}

function decode(string) {
  let stringArray2 = string.split(''); // cria um array da string
  for (let i = 0; i < stringArray2.length; i += 1) {
    switch (stringArray2[i]) { // vair abranger somente as letras minúsculas
    case '1':
      stringArray2[i] = 'a';
      break;
    case '2':
      stringArray2[i] = 'e';
      break;
    case '3':
      stringArray2[i] = 'i';
      break;
    case '4':
      stringArray2[i] = 'o';
      break;
    case '5':
      stringArray2[i] = 'u';
      break;
    }
  }
  let stringRetorno2 = stringArray2.join('');
  return stringRetorno2;
}

module.exports = {encode, decode};