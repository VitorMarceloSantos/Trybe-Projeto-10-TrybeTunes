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
  const data = await result.json();
  
console.log(data.data[0].name)
}


window.onload = () => getCooins();