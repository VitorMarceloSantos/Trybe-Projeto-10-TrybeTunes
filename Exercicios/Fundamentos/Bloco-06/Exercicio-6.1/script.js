const enviar = document.querySelector('#submit');

function buscarFormulario(event) {
  const nome = document.querySelector('#name-txt').value;

  event.preventDefault();
  console.log(nome);
}

enviar.addEventListener('click', buscarFormulario)