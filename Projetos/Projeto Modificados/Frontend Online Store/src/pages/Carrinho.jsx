import React from 'react';
import PropTypes, { shape } from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/CartCss.css';

class Carrinho extends React.Component {
  componentDidMount() {
    if (localStorage.length > 0) {
      const { cartItemsStateUpdate } = this.props;
      cartItemsStateUpdate();
    }
  }

  handleOnChange = ({ target: { value, name } }) => {
    const { handleClickAmoutCart } = this.props;
    handleClickAmoutCart(value, name);
  }

  render() {
    const { CartItemsList } = this.props;
    const verification = CartItemsList.length > 0;
    return (
      <div>
        {
          verification ? (
            <div>
              {
                CartItemsList.map((item, i) => (
                  <section key={ `${item.title}${i}` }>
                    <div className="container-line-product">
                      <img
                        src={ item.thumbnail }
                        alt={ item.title }
                      />
                      <h1 data-testid="shopping-cart-product-name">{ item.title }</h1>
                      <h2>
                        {`R$ ${item.price.toLocaleString('pt-BR',
                          { minimumFractionDigits: 2 })}` }
                      </h2>
                    </div>
                    <div className="container-amount">
                      <button
                        data-testid="product-decrease-quantity"
                        type="button"
                        name={ item.id }
                        value="decrease"
                        onClick={ this.handleOnChange }
                      >
                        -
                      </button>
                      <p
                        data-testid="shopping-cart-product-quantity"
                      >
                        { item.quantidade }
                      </p>
                      <button
                        data-testid="product-increase-quantity"
                        type="button"
                        name={ item.id }
                        value="increase"
                        onClick={ this.handleOnChange }
                      >
                        +
                      </button>
                    </div>
                    <div className="button-delete">
                      <button
                        data-testid="remove-product"
                        type="button"
                        name={ item.id }
                        value="remove"
                        onClick={ this.handleOnChange }
                      >
                        Excluir
                      </button>
                    </div>
                  </section>))
              }
            </div>
          )
            : <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        }
        <Link
          data-testid="checkout-products"
          to="/Checkout"
        >
          <button
            type="button"
          >
            Finalizar Compra
          </button>
        </Link>
      </div>
    );
  }
}

Carrinho.propTypes = {
  CartItemsList: PropTypes.arrayOf(shape()).isRequired,
  handleClickAmoutCart: PropTypes.func.isRequired,
  cartItemsStateUpdate: PropTypes.func.isRequired,
};

export default Carrinho;
