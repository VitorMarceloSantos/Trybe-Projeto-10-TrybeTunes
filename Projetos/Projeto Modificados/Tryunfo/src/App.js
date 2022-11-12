import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Deck from './components/Deck';
import Filters from './components/Filters';
import './styles/main.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      arraySave: [],
      filterValue: '',
      arrayFilter: [], // todos os filtros vão ser salvos neste array(para que possa utilizar um filtro sobre o outro)
      rareValue: 'todas', // valor inicial
      trunfoValue: false,
      trunfoisDisable: false,
    };
    this.fileInput = React.createRef();
  }

  onInputChange = ({ target: { name, value, type, checked } }) => { // destruturação event.target
    const verify = type === 'checkbox' ? checked : value; // se o tipo for checkbox vai receber o checked(true or false), caso não seja vai receber o value
    if ((type === 'checkbox') && (checked === true)) { // verifica se o checkbox está checkado
      this.setState({ cardTrunfo: true });
    } else this.setState({ cardTrunfo: false });
    this.setState({ [name]: verify }, () => { // após realizar a alteração do valor irá realizar a função(assincrono)
      const {
        cardName,
        cardDescription,
        cardImage,
        cardAttr1,
        cardAttr2,
        cardAttr3 } = this.state;
      const num1 = parseInt(cardAttr1, 10); // convertendo para Number
      const num2 = parseInt(cardAttr2, 10); // convertendo para Number
      const num3 = parseInt(cardAttr3, 10); // convertendo para Number
      const numberMax = 210; // valor máximo da soma dos atributos attr1, attr2, attr3
      const attrMax = 90;
      if (
        cardName.length > 0
        && cardDescription.length > 0
        && cardImage.length > 0
        && num1 >= 0
        && num2 >= 0
        && num3 >= 0
        && ((num1 + num2 + num3) <= numberMax)
        && (num1 <= attrMax)
        && (num2 <= attrMax)
        && (num3 <= attrMax)) {
        this.setState({ isSaveButtonDisabled: false });
      } else this.setState({ isSaveButtonDisabled: true });
    });
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const { cardTrunfo } = this.state;
    if (cardTrunfo === true) this.setState({ hasTrunfo: true }); // altera o estado de hasTrunfo
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare } = this.state;
    const objAray = {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
    };
    this.setState((prev) => ({
      arraySave: [...prev.arraySave, objAray], // realizando o salvamento no arrayObjeto
      cardName: '', // reset das informações
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'Normal',
    }));
  }

  deleteButton = (event) => {
    const { arraySave } = this.state;
    arraySave.forEach((card, index) => {
      if (card.cardTrunfo === true) this.setState({ hasTrunfo: false }); // caso o card removido seja o SuperTrunfo, o hasTrunfo vai receber falso
      this.setState({ arraySave: arraySave.splice(index, 1) });
    });
    const arrayFilter = arraySave.filter((card) => event.target.id !== card.cardName); // vai filtrar todos os elementos exceto o event.target.id
    this.setState({ arraySave: arrayFilter }); // alterando o estado do arraySave
  }

  handleChangeFilter = ({ target: { value, name, type, checked } }) => {
    const verify = type === 'checkbox' ? checked : value; // se o tipo for checkbox vai receber o checked(true or false), caso não seja vai receber o value
    this.setState({ [name]: verify }, () => {
      const {
        filterValue,
        rareValue,
        arraySave,
        trunfoValue } = this.state; // fazer o destructuring apos realizar o setState
      if (trunfoValue) {
        const arrayTemporario = arraySave.filter((card) => (card.cardTrunfo === true)); // caso o filterValue não esteja vazio vai ser executado
        return this.setState({
          arrayFilter: arrayTemporario,
          trunfoisDisable: true });
      }
      this.setState({ trunfoisDisable: false }); // caso o trunfoValue seja false (checkbox desmarcado)
      const arrayTemporario = arraySave
        .filter((card) => (filterValue.length !== 0
          ? card.cardName.includes(filterValue) : true)) // caso o filterValue não esteja vazio vai ser executado
        .filter((card) => (rareValue !== 'todas'
          ? card.cardRare === rareValue : true)); // caso o rareValue seja diferente de 'todas' vai ser executado
      this.setState({ arrayFilter: arrayTemporario });
    });
  }

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
      arraySave,
      filterValue,
      rareValue,
      arrayFilter,
      trunfoValue,
      trunfoisDisable } = this.state;
    return (
      <main>
        <div className="img-title">
          <img src="https://raw.githubusercontent.com/VitorMarceloSantos/Trybe-Projeto-09-Tryunfo/main/images/Yu-Gi-Oh!_(Logo).jpg" alt="Logo" className="logo-yugioh" />
        </div>
        <div className="container-index">
          <div className="img-1">
            <img src="https://raw.githubusercontent.com/VitorMarceloSantos/Trybe-Projeto-09-Tryunfo/main/images/YugiIndex.png" alt="YugiOh" className="img-index" />
          </div>
          <div className="container-create">
            <section className="container-form">
              <Form
                cardName={ cardName }
                cardDescription={ cardDescription }
                cardAttr1={ cardAttr1 }
                cardAttr2={ cardAttr2 }
                cardAttr3={ cardAttr3 }
                cardImage={ cardImage }
                cardRare={ cardRare }
                cardTrunfo={ cardTrunfo }
                hasTrunfo={ hasTrunfo }
                isSaveButtonDisabled={ isSaveButtonDisabled }
                onInputChange={ this.onInputChange }
                onSaveButtonClick={ this.onSaveButtonClick }
              />
            </section>
            <section className="container-card">
              <Card
                cardName={ cardName }
                cardDescription={ cardDescription }
                cardAttr1={ cardAttr1 }
                cardAttr2={ cardAttr2 }
                cardAttr3={ cardAttr3 }
                cardImage={ cardImage }
                cardRare={ cardRare }
                cardTrunfo={ cardTrunfo }
                hasTrunfo={ hasTrunfo }
              />
            </section>
          </div>
          <div className="img-2">
            <img src="https://raw.githubusercontent.com/VitorMarceloSantos/Trybe-Projeto-09-Tryunfo/main/images/darkMagician.jpg" alt="DarkMagician" className="img-index" />
          </div>
        </div>
        <section className="container-filters">
          <Filters
            filterValue={ filterValue }
            handleChangeFilter={ this.handleChangeFilter }
            rareValue={ rareValue }
            trunfoValue={ trunfoValue }
            trunfoisDisable={ trunfoisDisable }
          />
        </section>
        <div>
          <section>
            { arraySave.length !== 0 ? <Deck
              arraySave={ arraySave }
              arrayFilter={ arrayFilter }
              deleteButton={ this.deleteButton }
              filterValue={ filterValue }
              rareValue={ rareValue }
              trunfoValue={ trunfoValue }
              trunfoisDisable={ trunfoisDisable }
            /> : ''}
          </section>
        </div>
      </main>
    );
  }
}

export default App;
