import React, { Component } from 'react';
import { getUser } from '../services/userAPI';
import Loading from './Loading';
import trybefi from '../images/trybefi.png';

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
      <div>

        <header>
          {isLoading ? <Loading /> : (
            <section className="container-user">
              <img src={ trybefi } alt="Logo Trybefi" />
              {/* <p>{console.log(nameUser)}</p> */}
              <h2>{nameUser.name}</h2>
            </section>
          )}
          <section className="container-upgrade">
            <button type="button">Upgrade</button>
          </section>
        </header>

      </div>
    );
  }
}
