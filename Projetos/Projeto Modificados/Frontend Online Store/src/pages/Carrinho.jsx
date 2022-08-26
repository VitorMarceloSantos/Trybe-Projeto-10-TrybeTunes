/* eslint-disable react/jsx-max-depth */
import React from 'react';
import PropTypes, { shape } from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/CartCss.css';

class Carrinho extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     total: '',
  //   };
  // }

  componentDidMount() {
    if (localStorage.length > 0) {
      const { cartItemsStateUpdate } = this.props;
      cartItemsStateUpdate();
    }
  }

  handleOnChange = ({ target: { id, title, value, name } }) => {
    const param1 = id !== undefined ? id : name;
    const param2 = title !== undefined ? title : value;
    const { handleClickAmoutCart } = this.props;
    handleClickAmoutCart(param2, param1);
  }

  render() {
    const { CartItemsList } = this.props;
    const verification = CartItemsList.length > 0;
    const arrayProducts = [];
    return (
      <div className="container-cart-global">
        {
          verification ? (
            <div>
              <div className="container-cart-products">
                {
                  CartItemsList.map((item, i) => (
                    <section key={ `${item.title}${i}` }>
                      <div className="container-line-product">
                        <div className="array-products">
                          {`# 0${arrayProducts.push({
                            price: item.price, quant: item.quantidade })}`}
                        </div>
                        <img
                          src={ item.thumbnail }
                          alt={ item.title }
                        />
                        <div className="container-cart-center">
                          <h1
                            data-testid="shopping-cart-product-name"
                            className="cart-title"
                          >
                            { item.title }
                          </h1>
                          <div className="container-amount">
                            <button
                              data-testid="product-decrease-quantity"
                              type="button"
                              name={ item.id }
                              value="decrease"
                              onClick={ this.handleOnChange }
                            >
                              {/* Utiliza as tags id e title, para passar os paramentros para a função ao clicar no icone(<i>) */}
                              <i
                                className="fa-solid fa-minus"
                                id={ item.id }
                                title="decrease"
                              />
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
                              <i
                                className="fa-solid fa-plus"
                                id={ item.id }
                                title="increase"
                              />
                            </button>
                            <div className="button-delete">
                              <button
                                data-testid="remove-product"
                                type="button"
                                name={ item.id }
                                value="remove"
                                onClick={ this.handleOnChange }
                              >
                                <i
                                  className="fa-solid fa-trash"
                                  id={ item.id }
                                  title="remove"
                                />
                              </button>
                            </div>
                          </div>
                        </div>

                        <h2 className="cart-price">
                          {`R$ ${item.price.toLocaleString('pt-BR',
                            { minimumFractionDigits: 2 })}` }
                        </h2>
                      </div>
                    </section>))
                }
              </div>
              <div className="container-total-products">
                {console.log(arrayProducts)}
              </div>
            </div>
          )
            : <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        }
        <Link
          to="/"
        >
          <button
            type="button"
          >
            Continuar Comprando
          </button>
        </Link>
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
