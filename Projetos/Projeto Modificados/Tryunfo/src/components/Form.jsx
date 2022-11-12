import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;
    return (
      <div className="container-create-deck">
        <form className="container-form">
          <label htmlFor="name-input" className="input">
            <input
              className="name-card shadow"
              data-testid="name-input"
              type="text"
              name="cardName"
              id="name-input"
              placeholder="Nome"
              value={ (cardName) }
              onChange={ onInputChange }
              maxLength={ 28 }
            />
          </label>
          <label htmlFor="rare-input" className="input">
            Raridade:
            <select
              className="name-rare shadow"
              name="cardRare"
              data-testid="rare-input"
              type="select"
              placeholder="Placeholder"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
          <label htmlFor="image-input" className="input ">
            Imagem:
            <input
              className="name-img shadow"
              data-testid="image-input"
              type="text"
              name="cardImage"
              id="image-input"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="description-input" className="input">
            <textarea
              className="name-description shadow"
              data-testid="description-input"
              name="cardDescription"
              id="ddescription-input"
              cols="30"
              rows="10"
              placeholder="Descrição da carta ..."
              maxLength={ 200 }
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <div className="container-atributtes">
            <p>Atributos</p>
            <label htmlFor="attr1-input" className="input">
              ATK:
              <input
                className="shadow"
                data-testid="attr1-input"
                type="number"
                name="cardAttr1"
                id="attr1-input"
                value={ cardAttr1 }
                onChange={ onInputChange }
                min="0"
                max="90"
              />
            </label>
            <label htmlFor="attr2-input" className="input">
              DEF:
              <input
                className="shadow"
                data-testid="attr2-input"
                type="number"
                name="cardAttr2"
                id="attr2-input"
                value={ cardAttr2 }
                onChange={ onInputChange }
                min="0"
                max="90"
              />
            </label>
            <label htmlFor="attr3-input" className="input">
              MAG:
              <input
                className="shadow"
                data-testid="attr3-input"
                type="number"
                name="cardAttr3"
                id="attr3-input"
                value={ cardAttr3 }
                onChange={ onInputChange }
                min="0"
                max="90"
              />
            </label>
          </div>
          {/* Verificação condicional do hasTrufo, para verificar se já adicionado a carta Super Trunfo */}
          <label htmlFor="trunfo-input" className="input">
            { hasTrunfo === false ? <input
              value="Super Trybe Trunfo"
              type="checkbox"
              data-testid="trunfo-input"
              name="cardTrunfo"
              id="trunfo-input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            /> : 'Você já tem um Super Trunfo em seu baralho' }
            <span>Super Trybe Trunfo</span>
          </label>
          <label htmlFor="save-button" className="input">
            <input
              className="btn-save shadow"
              type="button"
              data-testid="save-button"
              name="isSaveButtonDisabled"
              value="Salvar"
              disabled={ isSaveButtonDisabled }
              onClick={ onSaveButtonClick }
            />
          </label>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
