let usuarios = []; //cria um array para armazenar as informações dos usuarios
 
class Usuarios{  // Criando um objeto
  constructor(nome, cor){
    this.nome = nome;
    this.cor = cor;
  }
}
 
function novoUsuario(){ //Função para Cadastrar novos Usuários
  let nome = document.querySelector('#textNome').value;
  let cor = document.querySelector('#textCor').value;

  usuarios.push(new Usuarios(nome, cor)); 
  armazenarInformacoes();
}

function armazenarInformacoes(){
  localStorage.setItem('informacoes',JSON.stringify(usuarios)); //Guarda as informações
}

function recuperarInformacoes(){
  const arquivos = JSON.parse(localStorage.getItem('informacoes')); //Recupera as informações
  
  //Mostrar na tela
  let textNome = document.getElementById('nomeUsuario');
  let corTexto = document.getElementById('colorText');

  textNome.textContent = arquivos[0]['nome'];
  corTexto.style.color = arquivos[0]['cor'];
}

function resetarInformacoes(){ //Limpar dados salvos
  localStorage.clear();
  alert('Informações Apagadas.'); 
}

btnEnviar = document.getElementById('btn-enviar');
btnEnviar.addEventListener('click', novoUsuario);

btnRecuperar = document.getElementById('btn-recuperar');
btnRecuperar.addEventListener('click', recuperarInformacoes);

btnReset = document.getElementById('btn-reset');
btnReset.addEventListener('click', resetarInformacoes);
