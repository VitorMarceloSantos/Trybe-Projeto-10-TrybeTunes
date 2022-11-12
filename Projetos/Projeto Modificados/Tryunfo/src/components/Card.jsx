/* eslint-disable react/jsx-closing-tag-location */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo } = this.props;
    return (
      <div className="container-create-deck">
        <p
          data-testid="name-card"
          value={ cardName }
          className="name-card shadow"
        >
          { cardName.length > 0 ? `${cardName}` : 'Yugi Muto'}
        </p>
        <div className="container-img-rare">
          { cardRare === 'normal' && <img
            src="https://raw.githubusercontent.com/VitorMarceloSantos/Trybe-Projeto-09-Tryunfo/main/images/normal.png"
            alt="Normal"
            className="img-rare"
          /> }
          { cardRare === 'raro' && <img
            src="https://raw.githubusercontent.com/VitorMarceloSantos/Trybe-Projeto-09-Tryunfo/main/images/raro.png"
            alt="Raro"
            className="img-rare"
          /> }
          { cardRare === 'muito raro' && <img
            src="https://raw.githubusercontent.com/VitorMarceloSantos/Trybe-Projeto-09-Tryunfo/main/images/superraro.png"
            alt="Super Raro"
            className="img-rare"
          /> }
        </div>
        { cardImage.length === 0 ? <img src="https://raw.githubusercontent.com/VitorMarceloSantos/Trybe-Projeto-09-Tryunfo/main/images/yugiMuto.jpg" alt="Yugi" className="img-card" /> : <img src={ cardImage } alt={ cardName } className="img-card" />}
        <img src="https://raw.githubusercontent.com/VitorMarceloSantos/Trybe-Projeto-09-Tryunfo/main/images/descricaoCarta.png" alt="Descricao" className="img-description" />
        <div className="card-description">
          <p
            data-testid="description-card"
            value={ cardDescription }
          >
            { `${cardDescription}`}
          </p>
        </div>
        { cardAttr1 !== '0' && <p
          data-testid="attr1-card"
          value={ cardAttr1 }
          className="attr-atk"
        >
          { `${cardAttr1}`}
        </p>}
        { cardAttr2 !== '0' && <p
          data-testid="attr2-card"
          value={ cardAttr2 }
          className="attr-def"
        >
          { `${cardAttr2}`}
        </p>}
        { ((cardAttr3 !== '0') && (cardAttr3.length !== 0)) && <p
          data-testid="attr3-card"
          value={ cardAttr3 }
          className="attr-mag"
        >
          { `MAG/ ${cardAttr3}`}
        </p> }
        {/* <p
          data-testid="rare-card"
          value={ cardRare }
        >
          { `${cardRare}`}
        </p> */}
        { cardTrunfo === true ? <p className="super-trunfo">Super Trunfo</p> : '' }
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
