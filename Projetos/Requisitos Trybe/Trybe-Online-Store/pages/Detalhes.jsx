import React, { Component } from 'react';
import PropTypes, { shape } from 'prop-types';
import { getProductsDetailsId } from '../services/api';
import ProductCardDetails from '../Components/ProductCardDetails';
import ButtonCart from '../Components/ButtonCart';
import AddItemCartButton from '../Components/AddItemCartButton';

class Detalhes extends Component {
  constructor() {
    super();
    this.state = {
      saveDetails: [],
      productDetails: [],
    };
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const details = await getProductsDetailsId(id);
    const { attributes, price, thumbnail, title } = details;
    this.setState({
      saveDetails: [price, thumbnail, title],
      productDetails: attributes,
    });
  }

  render() {
    const { match: { path } } = this.props;
    const { saveDetails, productDetails } = this.state;
    const [price, thumbnail, title] = saveDetails;
    const { match: { params: { id } } } = this.props;
    const { handleClickAddCart, CartItemsList } = this.props;
    return (
      <div className="container-detalhes">
        Detalhes
        <ButtonCart
          CartItemsList={ CartItemsList }
        />
        <ProductCardDetails
          saveDetails={ saveDetails }
          productDetails={ productDetails }
          id={ id }
        />
        <AddItemCartButton
          path={ path }
          handleClickAddCart={ handleClickAddCart }
          price={ price }
          title={ title }
          thumbnail={ thumbnail }
          id={ id }
        />
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
  saveDetails: PropTypes.shape({
    price: PropTypes.number,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
  }).isRequired,
};
Detalhes.propTypes = {
  CartItemsList: PropTypes.arrayOf(shape()).isRequired,
};
export default Detalhes;
