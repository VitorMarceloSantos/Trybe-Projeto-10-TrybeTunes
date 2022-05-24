const combinacoes =[
  [0,1,2], // linha 1
  [3,4,5], // linha 2
  [6,7,8], // linha 3
  [0,3,6], // coluna 1
  [1,4,7], // coluna 2
  [2,5,8], // coluna 3
  [0,4,8], // diagonal esqueda direita
  [2,4,6] // diagonal direita esquerda
]

let playerX = 0;
let playerO = 0;

//Função Jogar
function jogar(event){
  if(event.target.childNodes[0] === undefined){
    ganhador();
    event.target.textContent = rodada();
  }
}
//Funcao Verificar Rodada
function rodada(){
  const textPlayer = document.querySelector('#player');
  if (playerX === playerO){
    textPlayer.textContent = 'Vez do jogador X'
    playerX += 1;
    return 'X'
  }else{
    textPlayer.textContent = 'Vez do jogador O'
    playerO += 1;
    return 'O';
  }
}

//Verificar Ganhador
function ganhador(){

  const tabelaVericar = document.querySelectorAll('.celula');
  for(let i = 0; i < combinacoes.length; i += 1){ // vai verificar o primeiro array
    let jogadorX = 0;
    let jogadorO = 0;
    for(let j = 0; j < 3; j += 1){ // vai verificar o segundo array
      
      if(tabelaVericar[combinacoes[i][j]].textContent === 'X') {
        jogadorX += 1;
      }else if(tabelaVericar[combinacoes[i][j]].textContent === 'O'){
        jogadorO += 1;
      }
    }
    if(jogadorX === 3){
      alert('Parabens, o jogador X venceu.');
      break;
    }else if(jogadorO === 3){
      alert('Parabens, o jogador O venceu.');
      break;
    }
  }
  if(playerO + playerX === 8){
    alert('Ninguem ganhou.');
  }
  
}
//Funcao Resetar Jogo
function novoJogo(){
  const remover = document.querySelector('.grid');

  for (let i = 0; i <= 9; i += 1){
    remover.children[i].textContent = '';
  }
}
//Iniciando o Jogo
const tabela = document.querySelector('.grid');

for (let i = 0; i < 9; i += 1){
  const divTabela = document.createElement('div');

  divTabela.setAttribute('id',i);
  divTabela.classList.add('celula');
  divTabela.addEventListener('click', jogar);
  tabela.appendChild(divTabela);

}
//Resetar Tabela
const resetar = document.querySelector('#reset');
resetar.addEventListener('click', novoJogo);




