// const enviar = document.querySelector('#submit');

// function buscarFormulario(event) {
//   const nome = document.querySelector('#name-txt').value;

//   event.preventDefault();
//   console.log(nome);
// }

// enviar.addEventListener('click', buscarFormulario)

const btnModal = document.querySelector('#btn-modal');
const myModal = new bootstrap.Modal(document.getElementById('myModal'));

btnModal.addEventListener('click', () => {
  myModal.show(); // aparece na tela(pois seu display padrão é none)
})

