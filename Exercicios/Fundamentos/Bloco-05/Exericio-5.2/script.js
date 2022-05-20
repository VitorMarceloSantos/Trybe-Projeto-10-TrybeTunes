// Buscanco Elementos
// Acesse o elemento elementoOndeVoceEsta.
let elemento = document.querySelector('#elementoOndeVoceEsta');
// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
elemento.parentElement.style.color = 'red';
// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. 
let filhoFilho = document.getElementById('primeiroFilhoDoFilho');
let paragrafo = document.createElement('p');
paragrafo.textContent = `Esse é um paragrafo adicionando dinamicamente.`;
filhoFilho.appendChild(paragrafo);
// Acesse o primeiroFilho a partir de pai.
let pai = document.querySelector('#pai');
let priFilho = pai.firstElementChild;
// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
let irmao = elemento.previousElementSibling;
// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
let texto = elemento.nextSibling; // próximo nó
// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
let terceiroFilho = elemento.nextElementSibling;
// Agora acesse o terceiroFilho a partir de pai.
let penultimoFilho = pai.children[2];

//Criando Elementos
// Crie um irmão para elementoOndeVoceEsta.
let criandoSection = document.createElement('section');
pai.appendChild(criandoSection);
// Crie um filho para elementoOndeVoceEsta.
elemento.appendChild(criandoSection);
// Crie um filho para primeiroFilhoDoFilho.
filhoFilho.appendChild(criandoSection);
//A partir desse filho criado, acesse terceiroFilho.
filhoFilho.firstElementChild.parentNode.parentNode.lastElementChild.previousElementSibling;

//Removendo Elementos
// Remova todos os elementos filhos de paiDoPai exceto pai,
    // elementoOndeVoceEsta e primeiroFilhoDoFilho.

    for (let i = pai.childNodes.length - 1; i >= 0; i -= 1) {
      const quantidade = pai.childNodes[i];
      if (quantidade.id !== 'elementoOndeVoceEsta') {
        quantidade.remove();
      }
    }
    let segundoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
    segundoFilhoDoFilho.remove();
