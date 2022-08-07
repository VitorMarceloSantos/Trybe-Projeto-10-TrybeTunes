import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductsDetailsId } from '../services/api';
import ProductCardDetails from '../Components/ProductCardDetails';
import ButtonCart from '../Components/ButtonCart';

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
    const { saveDetails, productDetails } = this.state;
    const { match: { params: { id } } } = this.props;
    return (
      <div className="container-detalhes">
        Detalhes
        <ButtonCart />
        <ProductCardDetails
          saveDetails={ saveDetails }
          productDetails={ productDetails }
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
  }).isRequired,
};

export default Detalhes;
