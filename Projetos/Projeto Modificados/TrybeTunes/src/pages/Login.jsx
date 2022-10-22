import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from '../components/Loading';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      nameUser: '',
      buttonValidation: true,
      isLoading: false,
    };
  }

  handleNameUser = ({ target: { value } }) => {
    this.setState({ nameUser: value }, () => {
      const { nameUser } = this.state;
      const regexEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
      if (regexEmail.test(nameUser)) {
        this.setState({ buttonValidation: false });
      } else {
        this.setState({ buttonValidation: true });
      }
    });
  }

  handleSubmit= () => {
    const { nameUser } = this.state;
    // enquanto a função createUser é carregada, utiliza o loading
    this.setState({ isLoading: true }, async () => { // utiliza o async pois é uma função assincrona
      await createUser({ name: nameUser }); // espera a conclusão de createUser(Promise), para executar as demais
      const { history } = this.props;
      this.setState({ isLoading: false }, history.push('/index'));
    });
  }

  render() {
    const { buttonValidation, isLoading } = this.state;
    return (
      <div data-testid="page-login">
        { isLoading ? <Loading /> : (
          <form>
            <label htmlFor="login-name-input">
              <input
                type="text"
                name="login-name-input"
                data-testid="login-name-input"
                onChange={ this.handleNameUser }
              />
            </label>
            <button
              disabled={ buttonValidation }
              type="submit"
              data-testid="login-submit-button"
              onClick={ this.handleSubmit }
            >
              Entrar
            </button>
          </form>)}
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
