/* eslint-disable react/jsx-max-depth */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import AddItemCartButton from '../Components/AddItemCartButton';
import '../styles/CardsBoot.css';

export default class CardsProducts extends Component {
  render() {
    const {
      handleClickAddCart,
      path,
      product } = this.props;
    const { price, title, thumbnail, id, shipping } = product;
    const division = 12;
    return (
      <div>
        <Card className="container-card">
          <Card.Body>
            <Card.Title className="titleCard">{title}</Card.Title>
            <Card.Img
              variant="bottom"
              src={ thumbnail }
              alt={ title }
              className="imageCard"
            />
            <Card.Text className="priceTotal">
              {`R$ ${price.toLocaleString('pt-BR',
                { minimumFractionDigits: 2 })}`}
            </Card.Text>
            <Card.Text className="priceDivision">
              {`12 x R$ ${Math.floor(price / division).toLocaleString('pt-BR',
                { minimumFractionDigits: 2 })} sem juros`}
            </Card.Text>
            <Card.Text className="shipping">
              {shipping.free_shipping && (
                'Frete Grátis'
              )}
            </Card.Text>
            <div className="container-buttons">
              <Button variant="primary">
                <Link
                  data-testid="product-detail-link"
                  to={ `/Detalhes/${id}` }
                >
                  Detalhes
                </Link>
              </Button>
              <Button variant="primary">
                <AddItemCartButton
                  handleClickAddCart={ handleClickAddCart }
                  path={ path }
                  product={ product }
                />
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

CardsProducts.propTypes = {
  product: PropTypes.shape({
    price: PropTypes.number,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    id: PropTypes.string,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool.isRequired,
    }).isRequired,
  }).isRequired,
  handleClickAddCart: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
};
