import React, { Component } from 'react';
import '../styles/searchBar.css';
import { HiSearch } from 'react-icons/hi';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import CardMusic from '../components/CardMusic';
import musicsApi from '../services/musicsAPI';

export default class SearchBar extends Component {
  state = {
    inputSearch: '',
    loading: false,
    resultSearch: '',
    resultMusic: '',
  }

    searchAlbum = async (nomeAlbum) => {
      this.setState({
        loading: true,
        inputSearch: nomeAlbum,
      });
      try {
        const result = await searchAlbumsAPI(nomeAlbum); // batendo na API
        this.setState({
          resultSearch: result,
        }, async () => {
          const { resultSearch } = this.state;
          if (resultSearch.length > 0) {
            // console.log('result', resultSearch[0])
            const musics = await musicsApi(resultSearch[0].artistId);
            console.log(musics);
            const NUMBER_FIVE = 5;
            this.setState({
              resultMusic: musics.slice(1, NUMBER_FIVE),
              loading: false,
            });
          }
        });
      } catch (err) {
        console.error(`Erro ao consultar API: ${err.message}`);
      }
    };

    changeSearch = ({ target }) => {
      this.setState({
        inputSearch: target.value,
      }, () => {
        const { inputSearch } = this.state;
        this.searchAlbum(inputSearch);
      });
    };

    resetInputSearch = () => {
      this.setState({
        inputSearch: '',
      });
    }

    render() {
      const arrayArtists = ['Pearl Jam', 'Queen', 'The Beatles', 'Guns N" Roses',
        'Pink Floyd', 'Nirvana', 'Led Zeppelin', 'AC/DC', 'Metallica',
        'Red Hot Chilli Peppers ', 'Iron Maiden', 'The Rolling Stones',
        'Bon Jovi', 'Black Sabbath', 'Scorpions', 'Kiss', 'Linkin Park',
        'Aerosmith', 'Ramones', 'The Doors', 'Coldplay', 'Jimi Hendrix',
        'Creedence Clearwater', 'Van Halen', 'Green Day', 'The Who',
        'Foo Fighters', 'Rush', 'Sepultura', 'Radiohead', 'The Smiths',
        'Lynyrd Skynyrd', 'The Police', 'Eagles', 'Judas Priest', 'The Cure'];

      const arrayColor = ['rgb(39,133,106)', 'rgb(30,50,100)',
        'rgb(141,103,171)', 'rgb(232,17,91)', 'rgb(180,155,200)',
        'rgb(240,55,165)', 'rgb(156,240,225)', 'rgb(215,242,125)',
        'rgb(13,115,236)', 'rgb(245,155,35)', 'rgb(255,70,50)',
        'rgb(20,138,8)'];

      const randomNumber = () => {
        const NUMBER_QUANT = 13; // gera um número aleatoria de 0 a 12
        return Math.floor(Math.random() * NUMBER_QUANT);
      };

      const { inputSearch, loading, resultSearch, resultMusic } = this.state;

      return (
        <section className="container-searchBar-principal">
          <section className="container-change-search">
            <label htmlFor="input-search" className="label-input-search">
              <HiSearch className="icon-search-glass" />
              <input
                type="text"
                name="inputSearch"
                value={ inputSearch }
                onChange={ this.changeSearch }
                placeholder="Artists, songs, albuns, ...."
              />
              {inputSearch.length > 1 && (
                <button
                  type="button"
                  className="button-icon-search-close"
                  onClick={ this.resetInputSearch }
                >
                  X
                </button>
              )}
            </label>
          </section>
          {(inputSearch.length > 1 && loading === false) ? (
            <div className="container-searchBar-music-album">
              <div className="container-searchBar-top-musics">
                <div className="container-searchBar-top-artist">
                  <img
                    src={ resultSearch[0].artworkUrl100 }
                    alt="Artista/Banda"
                  />
                  <h3>{resultSearch[0].artistName}</h3>
                  <h4>Artist</h4>
                </div>
                <div className="container-searchBar-musics-artist">
                  {resultMusic.map(({ previewUrl, amgArtistId }) => (
                    <audio
                      data-testid="audio-component"
                      src={ previewUrl }
                      controls
                      key={ amgArtistId }
                    >
                      <track kind="captions" />
                      O seu navegador não suporta o elemento
                      {''}
                      {''}
                      <code>audio</code>
                      .
                    </audio>
                  ))}
                </div>
              </div>
              <div className="container-searchBar-albuns-artist">
                {resultSearch.map((element) => (
                  <div key={ `${element.artistId}-${element.collectionId}` }>
                    <CardMusic
                      element={ element }
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <section className="container-searchBar-albuns">
              {arrayArtists.map((artist, index) => (
                <button
                  type="button"
                  style={ { backgroundColor: arrayColor[randomNumber()] } }
                  className="container-searchBar-artist"
                  key={ artist }
                  onClick={ () => { this.searchAlbum(artist); } }
                >
                  <h4>{artist}</h4>
                  <div className="container-img-searchBar">
                    <img src={ `../images/image_${index}.jpg` } alt="Imagem" />
                  </div>
                </button>
              ))}
            </section>
          )}
        </section>
      );
    }
}
