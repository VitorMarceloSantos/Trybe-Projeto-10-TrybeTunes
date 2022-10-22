import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../components/SideBar';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from '../components/Loading';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchArtist: '',
      buttonValidation: true,
      isLoading: false,
      arraySearch: [],
      validation: false,
      artist: '',
    };
  }

  handleSearchArtist = ({ target: { value } }) => {
    this.setState({ searchArtist: value }, () => {
      const { searchArtist } = this.state;
      const minLength = 2;
      if (searchArtist.length >= minLength) { // Verificação do tamanho do nome
        this.setState({ buttonValidation: false });
      } else {
        this.setState({ buttonValidation: true });
      }
    });
  }

  resultSearch = () => {
    const { searchArtist } = this.state;
    this.setState({
      isLoading: true,
    }, async () => {
      const resultSearch = await searchAlbumsAPI(searchArtist); // batendo na API
      // console.log(resultSearch);
      if (resultSearch.length !== 0) {
        this.setState({
          validation: false,
          arraySearch: resultSearch });
      } else {
        this.setState({ validation: true });
      }
      // resultSearch.length !== 0 ? this.setState({ validation: true }) : this.setState({ validation: false })
      this.setState({
        artist: searchArtist,
        searchArtist: '',
        isLoading: false,
      });
    });
  }

  render() {
    const {
      searchArtist,
      buttonValidation,
      isLoading,
      arraySearch,
      artist,
      validation } = this.state;
    return (
      <div data-testid="page-search">
        <SideBar />
        { isLoading ? <Loading /> : (
          <form>
            <input
              data-testid="search-artist-input"
              type="text"
              name="artist-input"
              id="artist-input"
              value={ searchArtist }
              onChange={ this.handleSearchArtist }
            />
            <input
              type="button"
              value="Pesquisar"
              data-testid="search-artist-button"
              disabled={ buttonValidation }
              onClick={ this.resultSearch }
            />
          </form>)}
        { arraySearch.length !== 0 ? (
          <section>
            <h2>
              {`Resultado de álbuns de: ${artist}`}
            </h2>
            {arraySearch.map((element) => (
              <Link
                data-testid={ `link-to-album-${element.collectionId}` }
                to={ `/album/${element.collectionId}` }
                key={ element.collectionId }
              >
                {/* Informações do artista */}
                <h3>{element.artistName}</h3>
                <h4>{element.collectionName}</h4>
                <img src={ element.artworkUrl100 } alt={ element.collectionId } />

              </Link>
            ))}
          </section>) : validation && <p>Nenhum álbum foi encontrado</p> }
      </div>
    );
  }
}

export default Search;
