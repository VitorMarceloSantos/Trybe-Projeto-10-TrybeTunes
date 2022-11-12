window.onload = function() { // Somente após carregar todas as funções será iniciado

  btnEntrar.addEventListener('click', verificaLogin);

  alterarFoto.addEventListener('change', atualizarFoto);

  verificaCheckbox.addEventListener('click', atualizaCheckbox);

  exibirSenha.addEventListener('click', funcExibirSenha);

  checkbox.addEventListener('click', verificaTermos);

  textarea.addEventListener('keyup', atualizaContador);

  btnAvancar.addEventListener('click', objCadastro);

  btnCadastre.addEventListener('click', apresentaFormulario);

  btnCadastreModal.addEventListener('click', apresentaFormulario);

  voltarTela.addEventListener('click', voltarTelaInicial);

  btnLogout.addEventListener('click', sairHeader);

  btnFinalizar.addEventListener('click', voltarTelaInicial);

  navInicio.addEventListener('click', voltarTelaInicial);

  navMembro.addEventListener('click', apresentaFormulario);

  navEscritora.addEventListener('click', apresentaEscritora);

  navDesenvolvedor.addEventListener('click', apresentaDesenvolvedor);

}

const btnEntrar = document.querySelector('#btn-submit');
const verificaCheckbox = document.querySelector('#content0');
const checkbox = document.querySelector('#agreement');
const textarea = document.querySelector('#textarea');
const btnAvancar = document.querySelector('#btn-avancar');
const btnCadastre = document.querySelector('#cadastre-se'); //Header
const btnCadastreModal = document.querySelector('#btn-cadastre-se'); // Modal
const voltarTela = document.querySelector('#titulo');
const exibirSenha = document.querySelector('#exibir-senha'); // Checkbox ExibirSenha
const alterarFoto = document.querySelector('#foto-usuario'); // Alterar Foto Perfil
const btnLogout = document.querySelector('#logout'); // Sair Header
const btnFinalizar = document.querySelector('#btn-finalizar');
const navInicio = document.querySelector('#nav-inicio'); // Navegacao Lateral
const navMembro = document.querySelector('#nav-membro'); // Navegacao Lateral
const navEscritora = document.querySelector('#nav-escritora'); // Navegacao Lateral
const navDesenvolvedor = document.querySelector('#nav-desenvolvedor'); // Navegacao Lateral

//Verificar se usuário está apto a realizar o Login
function verificaLogin(e) {
  e.preventDefault(); // Impedir o envio do formulário(interrompe o evento)

  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  const myModal = new bootstrap.Modal(document.getElementById('myModal'));
  const myModalUsuario = new bootstrap.Modal(document.getElementById('myModalUsuario'));
  const saudacao = document.querySelector('#saudacao');
  const nomeUsuario = document.querySelector('#nome-usuario');

  if (arrayFormulario.length !== 0) { //arrayFormulario vai armazenar os dados do usuário apos o cadastramento
    if ((email === '') || (password === '')) {
      myModal.show(); // usuario e senha estão incorretos
    } else {
      for (let i = 0; i < arrayFormulario.length; i += 1){
        if (email === arrayFormulario[i]['Email']) {
          if (password === arrayFormulario[i]['Senha']) {
            const displayLoginSucesso = document.querySelector('#container-login-sucesso');
            const displayLogin = document.querySelector('#login-trybewarts');
            const fotoMiniatura = document.querySelector('#foto-usuario-miniatura');
      
            displayLogin.style.display = 'none'; // esconder a tela de realizar login
            displayLoginSucesso.style.display = 'flex'; //apresentar a tela de login efetuado
            fotoMiniatura.setAttribute('src',arrayFormulario[i]['Foto']); // adicionando o endereço da foto escolhida pelo usuario
  
            if (arrayFormulario[i]['Genero'] === 'Masculino') { // Genero Masculino
              saudacao.textContent = 'Seja Bem-Vindo'
              nomeUsuario.textContent = (arrayFormulario[i]['Nome']).toUpperCase();
              break;
            
            } else if (arrayFormulario[i]['Genero'] === 'Feminino') { // Genero Feminino
              saudacao.textContent = 'Seja Bem-Vinda'
              nomeUsuario.textContent = (arrayFormulario[i]['Nome']).toUpperCase();
              break;
              
            } else { // Nenhuma opção marcada(Genero não declarado)
              nomeUsuario.textContent = (arrayFormulario[i]['Nome']).toUpperCase();
              break;
            }
          } else {
            myModal.show(); // usuario e senha estão incorretos
          }
        } else if (i === (arrayFormulario.length - 1)){ //somente na ultima execuçaó do for que irá apresenta o modal
          myModal.show(); // usuario e senha estão incorretos
        }
      }
    }
  } else {
    myModalUsuario.show(); // aparece na tela(pois seu display padrão é none)
  }
}

//Função Alterar Foto Perfil
function atualizarFoto(e) {
  const imagemPerfil = document.querySelector('#imagem-perfil');
  const fotoMiniatura = document.querySelector('#foto-usuario-miniatura');

  imagemPerfil.setAttribute('src', URL.createObjectURL(e.target.files[0]));
  fotoMiniatura.setAttribute('src', URL.createObjectURL(e.target.files[0]));
  // o input file retorna uma lista(files[])
  // https://developer.mozilla.org/pt-BR/docs/Web/API/URL/createObjectURl
  // https://developer.mozilla.org/pt-BR/docs/Web/API/File
}

//Alterar Foto Perfil
function fotoPadrao() {
  const imagemPerfil = document.querySelector('#imagem-perfil');
  const fotoMiniatura = document.querySelector('#foto-usuario-miniatura');
  const btnGenero = document.getElementsByName('genero');

  if (btnGenero[0].checked) {
    imagemPerfil.setAttribute('src','./images/avatarMasculino.jpg');
    fotoMiniatura.setAttribute('src','./images/avatarMasculino.jpg');
  }
  if (btnGenero[1].checked) {
    imagemPerfil.setAttribute('src','./images/avatarFeminino.jpg');
    fotoMiniatura.setAttribute('src','./images/avatarFeminino.jpg');
  } 
  // Caso nao esteja marcada a opção a foto utilizada será a neutra
}

const btnGenero = document.getElementsByName('genero');
for (let i = 0; i < btnGenero.length; i += 1) {
  btnGenero[i].addEventListener('click', fotoPadrao);
}

//Função Assinalar todos os Checkbox
function atualizaCheckbox() {
  const checkbox = document.getElementsByName('content'); // Seleciona todos os inputs chekbox

  if (verificaCheckbox.checked) {
    for (let i = 0; i < checkbox.length; i += 1) {
      checkbox[i].checked = true;
    }
  } else {
    for (let i = 0; i < checkbox.length; i += 1) {
      checkbox[i].checked = false;
    }
  }
}

//Função Exibir Senha
function funcExibirSenha() {
  const senha1 = document.querySelector('#pass-1');
  const senha2 = document.querySelector('#pass-2');

  if (exibirSenha.checked) {
    senha1.type = 'text';
    senha2.type = 'text';
  } else {
    senha1.type = 'password';
    senha2.type = 'password';
  }
}

//Verificar checkbox Consentimento no Termo
function verificaTermos() {
  if (checkbox.checked) {
    btnAvancar.disabled = false; // disable - desabilitar o input
  } else {
    btnAvancar.disabled = true;
  }
}

//Função Quantidade de Caracteres
function atualizaContador(e) {
  let contador = 0;
  const contadorLog = document.querySelector('#counter');
  const quantCaracteres = Number(e.target.value.length);

  contador = 500 - quantCaracteres; // contador vai armazenar a quantidade de caracteres restantes
  contadorLog.textContent = `Caracteres restantes: ${contador}`; // 
}

function apresentaNomeCompleto() {
  const primeiroNome = document.querySelector('#input-name').value;
  const ultimoNome = document.querySelector('#input-lastname').value;
  const nomeCompleto = `${primeiroNome} ${ultimoNome}`;

  return nomeCompleto;
}

function apresentaEmail() {
  const email = document.querySelector('#input-email').value;

  return email;
}

function apresentaGenero() {
  const genero = document.getElementsByName('genero');

  if (genero[0].checked) {
    return genero[0].value;
  }
  return genero[1].value;
}

function apresentaSenha() {
  const senha1 = document.querySelector('#pass-1').value;

  return senha1;
}

function apresentaCasa() {
  const casa = document.getElementById('house').value;

  return casa;
}

function apresentaFamilia() {
  const familia = document.getElementsByName('family');

  // Analisa os radio buttons e mostra o resultado
  for (let i = 0; i < familia.length; i += 1) {
    if (familia[i].checked) {
      return familia[i].value;
    }
  }
}

function apresentaMaterias() {
  const materias = document.getElementsByName('content');
  const arrayMaterias = [];
  let stringMaterias = '';

  for (let i = 0; i < materias.length; i += 1) { // Analisa os checkbox buttons
    if (materias[i].checked) {
      arrayMaterias.push(materias[i].value);
    }
  }
  for (let i = 0; i < arrayMaterias.length; i += 1) { // Cria uma string utilizando os valores do array
    if (i !== arrayMaterias.length - 1) {
      stringMaterias += `${arrayMaterias[i]}, `;
    } else {
      stringMaterias += `${arrayMaterias[i]}`;
    }
  }

  return stringMaterias;
}

function apresentaAvaliacao() {
  const avaliacao = document.getElementsByName('rate');

  for (let i = 0; i < avaliacao.length; i += 1) { // analisar os buttons radio
    if (avaliacao[i].checked) {
      return avaliacao[i].value;
    }
  }
}

function apresentaObservacoes() {
  const observacoes = document.querySelector('#textarea').value;

  return observacoes;
}

//Apagando a Tela - Display: none em todas as sections
function ocultarFomulario() {
  const telaInicial = document.querySelector('#container-inicial');
  const formulario = document.querySelector('#container-formulario');
  const resultadoFormulario = document.querySelector('#container-finalizar-formulario');
  const agradecimento = document.querySelector('#container-agradecimento');
  const escritoraTxt = document.querySelector('#container-escritora');
  const desenvolvedorTxt = document.querySelector('#container-desenvolvedor');

  telaInicial.style.display = 'none';
  formulario.style.display = 'none';
  resultadoFormulario.style.display = 'none';
  agradecimento.style.display = 'none';
  escritoraTxt.style.display = 'none';
  desenvolvedorTxt.style.display = 'none';
}

const arrayFormulario = []; // armazenar todos os formulários - Variável com escopo Global
//Array Armazena todos os Formulários
function arrayInformacoes(formulario) {

  arrayFormulario.push(formulario);
}

//Editar Cadastro(Formulário)
function editarCadastro() {
  const formulario = document.querySelector('#container-formulario');

  ocultarFomulario(); // ocultar todas as sections
  formulario.style.display = 'block';
}

//Enviar Formulário
function enviarFormulario(e) {

  // e.preventDefault(); // utilizado para impedir o funcionamento do evento(não vai enviar o formulário)
  const agradecimento = document.querySelector('#container-agradecimento');

  arrayInformacoes(objCadastro()); // vair passar o formulario como parâmetro

  ocultarFomulario();
  agradecimento.style.display = 'flex';
  
  document.querySelector('#evaluation-form').reset(); //limpando formulario
  
  const imagemPerfil = document.querySelector('#imagem-perfil'); // atualizar foto formulario
  imagemPerfil.setAttribute('src', './images/avatarNeutro.jpg');
}

//Imprimir Tabela
function imprimirTabela(cadastro) {
  const formularioTela = document.querySelector('#form-data');
  const mostrarResultado = document.querySelector('#container-finalizar-formulario');
  const fotoInformacao = document.querySelector('#imagem-informacao');
  const tabela = document.createElement('table');

  fotoInformacao.setAttribute('src', cadastro['Foto']); // vai passar a URL 

  if (formularioTela.childElementCount === 1) { // Caso a tabela já tenha sido preenchida, deverá ser apagada para a nota tabela(novos valores) se mostrada na tela
    formularioTela.children[0].remove(); // remove a tabela com as informações do formulario
  }
  for (keys in cadastro) { // keys vai receber o valor da chave do objeto{chave : valor} em cada posição
    const linha = document.createElement('tr'); // criando uma linha para a tabela
    const dados = document.createElement('td'); // criando um dado para a tabela

    if (keys === 'Senha') { // ocultar senha
      let temp = '';
      for (let i = 0; i < cadastro[keys].length; i += 1) {
        temp += 'x';
      }
      dados.textContent = `${keys}: ${temp}`;
    } else if (cadastro[keys] === undefined){
      dados.textContent =  `${keys}: Não foi selecionado nehuma opção`;
    } else if (keys === 'Foto'){
      dados.textContent = ''; // não vai aparecer a URL na lista
    } else {
      dados.textContent = `${keys}: ${cadastro[keys]}`;
    }
    linha.appendChild(dados);
    tabela.appendChild(linha);
  }
  formularioTela.appendChild(tabela);

  ocultarFomulario();
  mostrarResultado.style.display = 'flex'; // torna os botões visíveis

  const btnEditar = document.querySelector('#btn-editar');
  btnEditar.addEventListener('click', editarCadastro);

  const btnEnviar = document.querySelector('#btn-concluir');
  btnEnviar.addEventListener('click', enviarFormulario);
}

//Verifica entradas do Usuário
function verificarEntradas(e) {

  // e.preventDefault();
  const nome = document.querySelector('#input-name').value;
  const sobrenome = document.querySelector('#input-lastname').value;
  const email = document.querySelector('#input-email').value;
  const senha1 = document.querySelector('#pass-1').value;
  const senha2 = document.querySelector('#pass-2').value;
  const myModalFormulario = new bootstrap.Modal(document.getElementById('myModalFormulario'));
  const myModalSenhas = new bootstrap.Modal(document.getElementById('myModalSenhas'));
  const myModalTamanhoSenha = new bootstrap.Modal(document.getElementById('myModalTamanhoSenha'));
  const containerLista = document.querySelector('#lista-inputs-nao-preenchidos'); // div onde será criada a lista

  if (containerLista.childElementCount > 0) { // removendo elementos da lista, para adicionar novos elementos
    const remover = document.querySelector('#listaCamposBranco');
    containerLista.removeChild(remover)
  }

  //Criando um nova lista de elementos, toda vez que a função é executada será criada um nova lista
  const listaUL = document.createElement('ul');
  listaUL.setAttribute('id', 'listaCamposBranco');

  let verificador = true; // vai verificar se há algum input obrigatório não preenchido
  if (nome === '') {
    const linha = document.createElement('li');
    linha.textContent = 'Nome';
    listaUL.appendChild(linha);
    containerLista.appendChild(listaUL);
    verificador = false;
  }
  if (sobrenome === '') {
    const linha = document.createElement('li');
    linha.textContent = 'Sobrenome';
    listaUL.appendChild(linha);
    containerLista.appendChild(listaUL);
    verificador = false;
  }
  if (email === '') {
    const linha = document.createElement('li');
    linha.textContent = 'Email';
    listaUL.appendChild(linha);
    containerLista.appendChild(listaUL);
    verificador = false;
  }
  if (senha1 === '') {
    const linha = document.createElement('li');
    linha.textContent = 'Senha';
    listaUL.appendChild(linha);
    containerLista.appendChild(listaUL);
    verificador = false;
  }

  //Verifica se a senha tem no minimo 6 e maximo 10 caracteres
  const quantCaracteres = parseInt(senha1.length) // convertendo para Number
  if ((quantCaracteres < 6) || (quantCaracteres > 10)) {
    myModalTamanhoSenha.show();
    return false; //quando um return é executado, a função é encerrada(ou seja, a execução da função é encerrada)
  }

  //Verifica se as duas senhas são iguais
  if (senha1 !== senha2) {
    myModalSenhas.show();
    return false;  //quando um return é executado, a função é encerrada(ou seja, a execução da função é encerrada)
  }

  if (verificador === false) {
    myModalFormulario.show();
    return false;
  }
  return true;
}

//Armazenar endereço foto
function urlFoto() {
  const fotoPerfil = document.querySelector('#imagem-perfil')

  return fotoPerfil.getAttribute('src');
}

//Objeto vai armazenar os valores dos inputs
function objCadastro(e) {
  const cadastro = new Object(); // criando o objeto

  //Verificar Entradas Usuário
  if (verificarEntradas(e)) {

    //Criando os elementos do Objeto cadastro
    cadastro['Nome'] = apresentaNomeCompleto();
    cadastro['Email'] = apresentaEmail();
    cadastro['Genero'] = apresentaGenero();
    cadastro['Senha'] = apresentaSenha();
    cadastro['Casa'] = apresentaCasa();
    cadastro['Familia'] = apresentaFamilia();
    cadastro['Materias'] = apresentaMaterias();
    cadastro['Avaliacao'] = apresentaAvaliacao();
    cadastro['Observacoes'] = apresentaObservacoes();
    cadastro['Foto'] = urlFoto(); // não irá aparecer na lista(Formulario final)

    imprimirTabela(cadastro); // Função Imprimir, passa o objeto como parâmetro

  }
  return cadastro;
}

//Função Aprensentar Formulario
function apresentaFormulario() {
  const formulario = document.querySelector('#container-formulario');

  ocultarFomulario();
  formulario.style.display = 'block';
}

//Função Voltar a Tela Incial
function voltarTelaInicial() {
  const telaInicial = document.querySelector('#container-inicial');
  
  ocultarFomulario();
  telaInicial.style.display = 'flex';
}

//Função sair Header
function sairHeader() {
  const loginSucesso = document.querySelector('#container-login-sucesso');
  const loginTrybewarts= document.querySelector('#login-trybewarts');
  document.querySelector('#email').value = ''; // apagando o valor do input
  document.querySelector('#password').value = ''; // apagando o valor do input

  loginSucesso.style.display = 'none';
  loginTrybewarts.style.display = 'flex';
}

//Função Apresentar Informações da Escritora
function apresentaEscritora() {
  const containerEscritora = document.querySelector('#container-escritora');

  ocultarFomulario();
  containerEscritora.style.display = 'flex';
}

//Função Apresentar Informações do Desenvolvedor
function apresentaDesenvolvedor() {
  const containerDesenvolvedor = document.querySelector('#container-desenvolvedor');

  ocultarFomulario();
  containerDesenvolvedor.style.display = 'flex';
}
