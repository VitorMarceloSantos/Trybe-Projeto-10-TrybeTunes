import React, { Component } from 'react';
import PropTypes, { shape } from 'prop-types';

class ProductCardDetails extends Component {
  render() {
    const { saveDetails, productDetails } = this.props;
    const [price, thumbnail, title] = saveDetails;
    return (
      <div className="container-details">
        <section>
          <p data-testid="product-detail-name">{title}</p>
          <p data-testid="product-detail-price">{price}</p>
          <img src={ thumbnail } alt={ title } data-testid="product-detail-image" />
        </section>
        <section>
          <p>Especificações Técnicas</p>
          {productDetails.map((product) => (
            <p key={ product.name }>{`${product.name}: ${product.value_name}`}</p>
          ))}
        </section>
      </div>

    );
  }
}
ProductCardDetails.propTypes = {
  saveDetails: PropTypes.arrayOf({
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  productDetails: PropTypes.arrayOf(shape).isRequired,
};

export default ProductCardDetails;
