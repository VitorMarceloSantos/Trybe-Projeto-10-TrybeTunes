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

const URL = 'https://api.coincap.io/v2/assets';


async function getCooins() {

  const result = await fetch(URL);
  const object = await result.json();
  const { data } = object;

  const arrayCooins = data.map((cooin) => {
  return `Nome: ${cooin.name} - ${cooin.symbol} - USD: ${Math.round(cooin.priceUsd)}.`;
  });
  console.log(arrayCooins);
}


window.onload = () => getCooins();