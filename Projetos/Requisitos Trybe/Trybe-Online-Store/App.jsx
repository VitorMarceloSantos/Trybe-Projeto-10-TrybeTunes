import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import ProductCard from './Components/ProductCard';
// import { getProductsByName } from './services/api';
// import CategoryContainer from './Components/CategoryContainer';
import Home from './pages/Home';
import Carrinho from './pages/Carrinho';
import Detalhes from './pages/Detalhes';

// comentario

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      CartItemsList: [],
    };
  }

  handleClickAddCart= (price, title, thumbnail, id) => {
    const obj = {
      price,
      title,
      thumbnail,
      quantidade: 1,
      id,
    };
    this.setState((prevState) => ({
      CartItemsList: [...prevState.CartItemsList, obj],
    }));
  }

  handleClickAmoutCart = (value, id) => {
    const { CartItemsList } = this.state;
    if (value === 'remove') { // seleciona todos os arrays que tem o id diferente do produto que terá a quantidade alterada
      const objTemporario = CartItemsList.filter((product) => (
        product.id !== id
      ));
      return this.setState({ CartItemsList: objTemporario });
    }
    CartItemsList.forEach((product, index) => {
      if (product.quantidade >= 1) {
        let objTemporario = {};
        if (product.id === id) {
          objTemporario = CartItemsList[index];
          if (value === 'increase') { // adicionando a quantidade correta no produto
            objTemporario.quantidade = Number(objTemporario.quantidade) + 1;
          } else if (product.quantidade > 1) { // só vai diminuir se for maior que 1
            objTemporario.quantidade = Number(objTemporario.quantidade) - 1;
          }
          CartItemsList[index] = objTemporario; // replace do objeto correto(atualizado a quantidade)
          this.setState({ CartItemsList }, () => { // atualizando o estado do elemento
            // console.log(this.state.CartItemsList)
          });
        }
      }
    });
  }

  render() {
    const { CartItemsList } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ (props) => (<Home
              { ...props }
              handleClickAddCart={ this.handleClickAddCart }
            />) }
          />
          <Route
            exact
            path="/Carrinho"
            render={ (props) => (<Carrinho
              { ...props }
              CartItemsList={ CartItemsList }
              handleClickAmoutCart={ this.handleClickAmoutCart }
            />) }
          />
          <Route
            exact
            path="/Detalhes/:id"
            render={ (props) => (<Detalhes
              { ...props }
              handleClickAddCart={ this.handleClickAddCart }
            />) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
