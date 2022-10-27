import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ButtonUpgrade from '../components/ButtonUpgrade';
import '../styles/buttonUpgrade.css';
import '../styles/home.css';
import asMaisTocadas from '../images/asMaisTocadas.png';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

export default class Home extends Component {
  state= {
    loading: true,
    arraySearch: [],
  }

  async componentDidMount() {
    const resultSearch = await searchAlbumsAPI('Guns"n Roses'); // batendo na API
    // console.log(resultSearch);
    if (resultSearch.length !== 0) {
      const NUMBER_SIX = 6;
      this.setState({
        arraySearch: (resultSearch).slice(0, NUMBER_SIX),
        loading: false,
      });
    }
  }

  render() {
    const { loading, arraySearch } = this.state;
    return (
      <section className="container-home">
        <ButtonUpgrade />
        <div className="container-banner-geral">
          <img src={ asMaisTocadas } alt="Imagem Bannner" />
          <div className="container-text-banner">
            <h3 className="banner-padding">Hits Brasil - Melhores Nacionais 2022</h3>
            <p className="banner-padding">
              Já deu aquela olhadadinha hoje?
              Ouças as mais tocadas de 2022.
            </p>
            <div className="container-buttons-banner">
              <button type="button" className="button-banner-play">Play</button>
              <button type="button" className="button-banner-follow">Follow</button>
            </div>
          </div>
        </div>
        {loading ? <p>Carregando</p> : (
          // <p>{console.log(arraySearch)}</p>
          <div className="container-geral-cards">
            <h2 className="title-container-card">Guns N&apos; Roses</h2>
            <div className="container-carousel-musics">
              {arraySearch.map((element) => (
                <div className="container-card-music" key={ element.collectionId }>
                  <Link
                    data-testid={ `link-to-album-${element.collectionId}` }
                    to={ `/album/${element.collectionId}` }
                    key={ element.collectionId }
                  >
                    {/* Informações do artista */}
                    <img src={ element.artworkUrl100 } alt={ element.collectionId } />
                    <h3>{element.artistName}</h3>
                    <h4>{element.collectionName}</h4>
                  </Link>
                </div>
              ))}

            </div>
          </div>

        )}
      </section>
    );
  }
}
