import React, { Component } from 'react';
import PropTypes, { shape } from 'prop-types';
import { Link } from 'react-router-dom';
import Obrigado from '../images/Obrigado.png';
import '../styles/FinishCss.css';

export default class Finish extends Component {
  resetCart = () => {
    const { CartItemsList } = this.props;
    CartItemsList = [];
  }

  render() {
    const request = 100000;
    const { CartItemsList } = this.props;
    return (
      <section className="container-finish">
        <div className="resume-cart">
          <p className="title-resume">Pedido Finalizado com Sucesso</p>
          <p>{`Número do Pedido: ${Math.floor(Math.random() * request)}`}</p>
          <p>{`Quantidade de Itens: ${CartItemsList.length}`}</p>
          <p>
            { `Total a pagar: R$ ${((CartItemsList).reduce(
              (acc, current) => acc + (current.price * current.quantidade), 0,
            ).toLocaleString('pt-BR', {
              minimumFractionDigits: 2, style: 'currency', currency: 'BRL' }))}`}
          </p>
          <div className="img-thanks">
            <img src={ Obrigado } alt="Obrigado pela compra." />
          </div>
          <div className="button-finish">
            <Link
              to="/"
            >
              <button
                type="button"
                onClick={ this.resetCart }
              >
                Início
              </button>
            </Link>
          </div>
        </div>
      </section>
    );
  }
}
Finish.propTypes = {
  CartItemsList: PropTypes.arrayOf(shape()).isRequired,
};
