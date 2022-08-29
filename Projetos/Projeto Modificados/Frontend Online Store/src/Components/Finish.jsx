import React, { Component } from 'react';
// import Header from './Header';
import Obrigado from '../images/Obrigado.png';

export default class Finish extends Component {
  render() {
    return (
      <section className="container-finish">
        {/* <Header /> */}
        <p>Cabeçalho</p>
        <div className="img-thanks">
          <img src={ Obrigado } alt="Obrigado pela compra." />
        </div>
      </section>
    );
  }
}
