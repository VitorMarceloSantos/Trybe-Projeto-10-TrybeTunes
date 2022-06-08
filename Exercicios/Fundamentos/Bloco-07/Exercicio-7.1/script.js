const testingScope = (escopo) => {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  console.log(`${ifScope} o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
}

testingScope(true);

let oddsAndEvens = [13, 3, 4, 10, 7, 2];

  // Colocando em ordem utilizando o for

  // for (let i = 0; i < oddsAndEvens.length; i += 1) {
  //   for (let j = i + 1; j < oddsAndEvens.length; j += 1) {
  //     if (oddsAndEvens[i] > oddsAndEvens[j]) {
  //       temp = oddsAndEvens[j];
  //       oddsAndEvens[j] = oddsAndEvens[i];
  //       oddsAndEvens[i] = temp;
  //     }
  //   }
  // }

  oddsAndEvens.sort((a, b) => a - b); // Utilizando uma arrow function para realizar a ordenação
  
  console.log(`Os números ${oddsAndEvens} estão em ordem crescente.`);