import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ProductCard extends Component {
//   constructor(props) {
//     super(props);
//   }

  render() {
    const { product } = this.props;
    const { price, title, thumbnail, id } = product;
    return (
      // <section data-testid="product">
      //   <h2>{title}</h2>
      //   <img src={ thumbnail } alt={ title } />
      //   <p>{ price }</p>
      // </section>
      <Link
        data-testid="product-detail-link"
        to={ `/Detalhes/${id}` }
      >
        <div data-testid="product">
          <h2>{title}</h2>
          <img src={ thumbnail } alt={ title } />
          <p>{ price }</p>
        </div>
      </Link>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    price: PropTypes.number,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};
