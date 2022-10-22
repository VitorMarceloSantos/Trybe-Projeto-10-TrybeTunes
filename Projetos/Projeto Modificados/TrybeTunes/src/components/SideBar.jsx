import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { getUser } from '../services/userAPI';
// import Loading from './Loading';

class SideBar extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     nameUser: {},
  //     isLoading: false,
  //   };
  // }

  // componentDidMount() { // após renderizar deverá chamar a função com o promise da função getUser
  //   this.setState({ isLoading: true }, async () => { // utiliza o async pois é uma função assincrona
  //     this.setState({ nameUser: await getUser() }, () => { // retorna um objeto
  //       this.setState({ isLoading: false });
  //     }); // espera a conclusão de getUser(Promise), para executar as demais
  //   });
  // }

  render() {
    // const { nameUser, isLoading } = this.state;
    return (
      <nav data-testid="header-component">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/library">Your Library</Link>
          </li>
          <li>
            <Link to="/create">Create Playlist</Link>
          </li>
          <li>
            <Link to="/favorites">Liked Song</Link>
          </li>
        </ul>
      </nav>
      // <header data-testid="header-component">
      //   { isLoading ? <Loading /> : (
      //     <div>
      //       <h2>Cabeçalho</h2>
      //       <h3 data-testid="header-user-name">
      //         {nameUser.name}
      //       </h3>
      //       <ul>
      //         <li>
      //           <Link
      //             data-testid="link-to-search"
      //             to="/search"
      //           >
      //             Pesquisar
      //           </Link>
      //         </li>
      //         <li>
      //           <Link
      //             data-testid="link-to-favorites"
      //             to="/favorites"
      //           >
      //             Favoritos
      //           </Link>
      //         </li>
      //         <li>
      //           <Link
      //             data-testid="link-to-profile"
      //             to="/profile"
      //           >
      //             Perfil
      //           </Link>
      //         </li>
      //       </ul>
      //     </div>) }
      // </header>
    );
  }
}

export default SideBar;
