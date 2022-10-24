import React, { Component } from 'react';
import { AiFillHome, AiOutlineSearch, AiFillHeart } from 'react-icons/ai';
import { VscLibrary } from 'react-icons/vsc';
import { SiAddthis } from 'react-icons/si';
import { Link } from 'react-router-dom';
import '../styles/sideBar.css';

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
      <nav data-testid="header-component" className="container-sideBar-style">
        <ul>
          <li>
            <AiFillHome className="icon-sideBar" />
            <Link to="/" className="text-sideBar">Home</Link>
          </li>
          <li>
            <AiOutlineSearch className="icon-sideBar" />
            <Link to="/search" className="text-sideBar">Search</Link>
          </li>
          <li>
            <VscLibrary className="icon-sideBar" />
            <Link to="/library" className="text-sideBar">Your Library</Link>
          </li>
          <li className="icon-list-sup">
            <SiAddthis className="icon-sideBar-add" />
            <Link to="/create" className="text-sideBar">Create Playlist</Link>
          </li>
          <li className="icon-list-inf">
            <div className="container-heart">
              <AiFillHeart className="icon-sideBar-heart" />
            </div>
            <Link to="/favorites" className="text-sideBar">Liked Song</Link>
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
