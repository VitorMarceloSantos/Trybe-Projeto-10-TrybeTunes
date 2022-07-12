const saveCartItems = require("./helpers/saveCartItems");

 const arrayStorage = []; // irá armazenar os itens adicionados
// const storage = () => {

// }

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText, id) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  e.id = id; // adicionando o id ao elemento button
  return e;
};
const cartItemClickListener = (event) => { // Requisito 5
  const cart = document.querySelector('.cart__items'); // selecionando o elemento pai
  const idItem = event.target.classList[1]; // irá armazenar o valor do sku do item
  localStorage.removeItem(idItem); // removendo o item do localStorage
  cart.removeChild(event.target); // removendo o elemento filho clicado
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  const objetcTemp = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.className = 'cart__item';
  li.innerText = objetcTemp;
  li.classList.add(sku); // adicionando uma classe com o id do item, para realizar a exclusão do array Storage;
  li.addEventListener('click', cartItemClickListener);
  saveCartItems(objetcTemp)
  // localStorage.setItem(sku, JSON.stringify(objetcTemp)); // armazenando as informações
  // arrayStorage.push(objetcTemp); // irá armazenar todos os itens adicionados
  return li;
};

const addCart = async (e) => { // Requisito 04
  const items = document.querySelector('.cart__items');
  const objeto = await fetchItem(e.target.id); // e necessário o await, pois primeiro executa a função i
  const { id, title, price } = objeto;
  items.appendChild(createCartItemElement({ sku: id, name: title, salePrice: price }));
};

const addEventBtn = (button) => {
  button.addEventListener('click', addCart);
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  // Foi criada a variável button para que seja adicionado o evento de click
  const button = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!', sku);
  addEventBtn(button);
  section.appendChild(button);
  return section;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const addItems = async () => { // Requisito 02
  const items = document.querySelector('.items');
  const objeto = await fetchProducts('computador'); // e necessário o await, pois primeiro executa a função fetchProducts
  (objeto.results).forEach((elemento) => {
    const { id, title, thumbnail } = elemento;
    items.appendChild(createProductItemElement({ sku: id, name: title, image: thumbnail }));
  });
};

window.onload = () => { 
  addItems();
};
