import React, { Component } from 'react';
import PropTypes, { shape } from 'prop-types';
import { getProductsDetailsId } from '../services/api';
import ProductCardDetails from '../Components/ProductCardDetails';
import ButtonCart from '../Components/ButtonCart';
import AddItemCartButton from '../Components/AddItemCartButton';
import ReviewSection from '../Components/ReviewSection';
import '../styles/detalhes.css';

class Detalhes extends Component {
  constructor() {
    super();
    this.state = {
      product: [],
      productDetails: [],
    };
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const details = await getProductsDetailsId(id);
    // const { attributes, price, thumbnail, title } = details;
    const { attributes } = details;

    this.setState({
      product: details,
      productDetails: attributes,
    });
  }

  render() {
    const { match: { path } } = this.props;
    const { product, productDetails } = this.state;
    // const [price, thumbnail, title] = product;
    const { match: { params: { id } } } = this.props;
    const { handleClickAddCart, CartItemsList } = this.props;
    return (
      <div className="container-detalhes">
        Detalhes
        <ButtonCart
          CartItemsList={ CartItemsList }
        />
        <div className="container-details">
          <ProductCardDetails
            product={ product }
            productDetails={ productDetails }
            id={ id }
          />
          <div className="button-container">
            <AddItemCartButton
              path={ path }
              handleClickAddCart={ handleClickAddCart }
              product={ product }
              // price={ price }
              // title={ title }
              // thumbnail={ thumbnail }
              // id={ id }
            />
          </div>
          <ReviewSection id={ id } />
        </div>
      </div>
    );
  }
}

Detalhes.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
    path: PropTypes.string.isRequired,
  }).isRequired,
  handleClickAddCart: PropTypes.func.isRequired,
};
Detalhes.propTypes = {
  CartItemsList: PropTypes.arrayOf(shape()).isRequired,
};
export default Detalhes;
