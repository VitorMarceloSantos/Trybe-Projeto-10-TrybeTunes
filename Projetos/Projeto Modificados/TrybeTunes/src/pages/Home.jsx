import React, { Component } from 'react';
import ButtonUpgrade from '../components/ButtonUpgrade';
import '../styles/buttonUpgrade.css';
import '../styles/home.css';
import asMaisTocadas from '../images/asMaisTocadas.png';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import CardMusics from '../components/CardMusics';

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
          <CardMusics
            arraySearch={ arraySearch }
          />
        )}
      </section>
    );
  }
}
