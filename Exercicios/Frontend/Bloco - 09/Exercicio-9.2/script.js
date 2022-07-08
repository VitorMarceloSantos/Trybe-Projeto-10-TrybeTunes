// Exercício - 01

// const API_URL = 'https://icanhazdadjoke.com/';

// const fetchJoke = () => {

//   const myObject = { // keys a serem utilizadas
//     method: 'GET',
//     headers: { 'Accept': 'application/json' }
//   };

//   fetch(API_URL, myObject)
//     .then(response => response.json())
//     .then(data =>
//       // console.log(data)
//        document.getElementById('jokeContainer').innerText = data.joke
//     );
// }

// window.onload = () => fetchJoke();

// Exercicio - 02

async function getCooins(quant) {
  const URL = 'https://api.coincap.io/v2/assets'; // endereço da API
  const lista = document.querySelector('#list-cooins');
  const result = await fetch(URL);
  const object = await result.json();
  const { data } = object; // destructuring

 (data.filter((cooin) => cooin.rank <= quant)) // o retorno vai ser um array de objetos
  .forEach((cooin) => {
    let newLine = document.createElement('li'); // criando li para adicionar a lista ordenada
    newLine.textContent = `Nome: ${cooin.name} (${cooin.symbol}): ${Math.round(cooin.priceUsd)} USD.`; // alterando o texto da variável newLine
    lista.appendChild(newLine); // adicionando elemento a lista
  });
}

function searchCrypto() {
  const btnSearch = document.querySelector('#btn-search');

  btnSearch.addEventListener('click', () => {
    const quantCryptos = Number(document.getElementById('quant-crypto').value); // convertando de string para Number
    
    getCooins(quantCryptos);
  });
}

window.onload = () => {
  searchCrypto();
}
