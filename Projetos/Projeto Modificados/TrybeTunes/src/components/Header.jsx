import React, { Component } from 'react';
import { getUser } from '../services/userAPI';
import Loading from './Loading';
import trybefi from '../images/trybefi.png';
import '../styles/index.css';

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      nameUser: {},
      isLoading: false,
    };
  }

  componentDidMount() { // após renderizar deverá chamar a função com o promise da função getUser
    this.setState({ isLoading: true }, async () => { // utiliza o async pois é uma função assincrona
      this.setState({ nameUser: await getUser() }, () => { // retorna um objeto
        this.setState({ isLoading: false });
      }); // espera a conclusão de getUser(Promise), para executar as demais
    });
  }

  render() {
    const { nameUser, isLoading } = this.state;
    return (
      <header className="container-header">
        <section className="container-upgrade">
          <button type="button">Upgrade</button>
        </section>
        {isLoading ? <Loading /> : (
          <section className="container-user">
            <div className="container-border">
              <img src={ trybefi } alt="Logo Trybefi" />
              {/* <p>{console.log(nameUser)}</p> */}
              <h2>{nameUser.name}</h2>
            </div>
          </section>
        )}
      </header>
    );
  }
}
