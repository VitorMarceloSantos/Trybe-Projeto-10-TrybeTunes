/* eslint-disable react/jsx-max-depth */
import React, { Component } from 'react';
import PropTypes, { shape } from 'prop-types';
import '../styles/Checkout.css';

export default class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      CPF: '',
      CEP: '',
      Nome: '',
      Email: '',
      payment: '',
      Telefone: '',
      verify: false,
    };
  }

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,

    });
  }

  validacao=() => {
    const {
      CPF,
      CEP,
      Nome,
      Email,
      Telefone,
      payment,
    } = this.state;

    const string = [
      CPF,
      CEP,
      Nome,
      Email,
      Telefone,
      payment,
    ].some((input) => input === '');

    return this.setState({ verify: string }, () => {
      const { verify } = this.state;
      if (verify === false) {
        const { clearItemsCart } = this.props;
        const { history } = this.props;
        clearItemsCart();
        history.push('/');
      }
    });
  }

  submited=(event) => {
    event.preventDefault();
    this.validacao();
  }

  reduceTitle = (title) => {
    const lengthTilte = 5;
    const arrayTemp = (title).split(' ');
    const arrayFinal = arrayTemp.reduce((acc, curr, index) => {
      if (index < lengthTilte) {
        return `${acc} ${curr}`;
      }
      return acc;
    }, '');
    return arrayFinal;
  }

  render() {
    const { verify } = this.state;
    const { CartItemsList } = this.props;
    return (
      <div className="container-checkout">
        <h2 className="finalization">Finalização de Compra</h2>
        <form className="checkout-form">
          <div className="container-inputs-checkout">
            <div className="container-primary-information">
              <label
                htmlFor="Nome"
              >
                Nome Completo:
                <input
                  data-testid="checkout-fullname"
                  name="Nome"
                  onChange={ this.onInputChange }
                  type="text"
                />
              </label>
              <label
                htmlFor="Email"
              >
                Email:
                <input
                  data-testid="checkout-email"
                  name="Email"
                  onChange={ this.onInputChange }
                  type="text"
                />
              </label>
              <label
                htmlFor="CPF"
              >
                CPF:
                <input
                  data-testid="checkout-cpf"
                  name="CPF"
                  onChange={ this.onInputChange }
                  type="text"
                />
              </label>
            </div>
            <div className="second-information">
              <label
                htmlFor="Telefone"
              >
                Telefone:
                <input
                  data-testid="checkout-phone"
                  name="Telefone"
                  onChange={ this.onInputChange }
                  type="text"
                />
              </label>
              <label
                htmlFor="CEP"
              >
                CEP:
                <input
                  data-testid="checkout-cep"
                  name="CEP"
                  onChange={ this.onInputChange }
                  type="text"
                />
              </label>
              <label
                htmlFor="Endereco"
              >
                Endereço:
                <input
                  data-testid="checkout-address"
                  name="Endereco"
                  onChange={ this.onInputChange }
                  type="text"
                />
              </label>
            </div>
          </div>
          <div className="form-pgto">
            <p>Forma de Pagamento:</p>
            <label
              htmlFor="Boleto"
            >
              <input
                data-testid="ticket-payment"
                name="payment"
                onChange={ this.onInputChange }
                type="radio"
                value="Boleto"
                id="Boleto"
              />
              Boleto
            </label>
            <label
              htmlFor="Visa"
            >
              <input
                data-testid="visa-payment"
                name="payment"
                onChange={ this.onInputChange }
                type="radio"
                value="Visa"
                id="Visa"
              />
              Visa
            </label>
            <label
              htmlFor="MasterCard"
            >
              <input
                data-testid="master-payment"
                name="payment"
                onChange={ this.onInputChange }
                type="radio"
                value="MasterCard"
                id="MasterCard"
              />
              MasterCard
            </label>
            <label
              htmlFor="Elo"
            >
              <input
                data-testid="elo-payment"
                name="payment"
                onChange={ this.onInputChange }
                type="radio"
                value="Elo"
                id="Elo"
              />
              Elo
            </label>
          </div>
          <button
            data-testid="checkout-btn"
            type="submit"
            onClick={ this.submited }
          >
            Salvar
          </button>
        </form>

        <section className="checkout-error-msg">
          {verify && <span data-testid="error-msg"> Campos inválidos </span>}
        </section>
        <section className="container-items-checkout">
          <p>Resumo do Pedido</p>
          <ul className="checkout-items-ul">
            {CartItemsList.map((product, index) => (
              <li key={ index } className="items">
                {/* <img src={ product.thumbnail } alt={ product.title } /> */}
                <p>{`#0${index + 1}`}</p>
                <h2 className="itemsTitle">{this.reduceTitle(product.title)}</h2>
                <p>
                  {`R$ ${(product.price).toLocaleString('pt-BR',
                    { maximunFractionDigits: 2 })}`}
                </p>
              </li>))}
          </ul>
        </section>
      </div>

    );
  }
}
Checkout.propTypes = {
  CartItemsList: PropTypes.arrayOf(shape()).isRequired,
  clearItemsCart: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
