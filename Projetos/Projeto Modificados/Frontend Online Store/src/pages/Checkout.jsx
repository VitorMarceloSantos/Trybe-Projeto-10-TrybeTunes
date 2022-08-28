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

  render() {
    const { verify } = this.state;
    const { CartItemsList } = this.props;
    return (
      <div className="container-checkout">
        <h2 className="finalization">Finalizacao de compra</h2>
        <form className="checkout-form">
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
        <section>
          <ul className="checkout-items-ul">
            {CartItemsList.map((product, index) => (
              <li key={ index } className="items">
                <h2 className="itemsTitle">{product.title}</h2>
                <img src={ product.thumbnail } alt={ product.title } />
                <p>{product.price}</p>
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
