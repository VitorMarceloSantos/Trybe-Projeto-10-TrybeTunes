import React from 'react';
import PropTypes, { shape } from 'prop-types';

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
                    <h1 data-testid="shopping-cart-product-name">{ item.title }</h1>
                    <h2>{ item.price }</h2>
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
