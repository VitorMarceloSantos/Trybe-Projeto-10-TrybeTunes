import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import ProductCard from './Components/ProductCard';
// import { getProductsByName } from './services/api';
// import CategoryContainer from './Components/CategoryContainer';
import Home from './pages/Home';
import Carrinho from './pages/Carrinho';
import Detalhes from './pages/Detalhes';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/Carrinho" component={ Carrinho } />
          <Route exact path="/Detalhes/:id" component={ Detalhes } />
        </Switch>
      </BrowserRouter>
    );
  }
}
