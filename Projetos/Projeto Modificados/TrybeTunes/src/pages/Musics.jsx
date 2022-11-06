import React, { Component } from 'react';
import '../styles/musics.css';
import { BsHeart } from 'react-icons/bs';
import musicsApi from '../services/musicsAPI';
import ButtonUpgrade from '../components/ButtonUpgrade';

export default class Musics extends Component {
  state ={
    idAlbum: '',
    loading: true,
    resultSearch: '',
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    const { id } = params;
    this.searchAlbum(id);
  }

  searchAlbum = async (idAlbum) => {
    try {
      const musics = await musicsApi(idAlbum);
      this.setState({
        resultSearch: musics,
        loading: false,
      }, () => {
        const { resultSearch } = this.state;
        console.log(resultSearch);
        this.selectColor();
      });
    } catch (err) {
      console.error(`Erro ao consultar API: ${err.message}`);
    }
  };

randomNumber = () => {
  const NUMBER_QUANT = 5; // gera um número aleatoria de 0 a 4
  return Math.floor(Math.random() * NUMBER_QUANT);
};

selectColor = () => {
  const backgroundMusics = document.querySelector('.container-musics-album-artist');

  const arrayColor = [
    'linear-gradient(to bottom, rgb(74, 60, 83), rgb(25, 25, 25))',
    'linear-gradient(to bottom, rgb(92, 50, 51), rgb(25, 25, 25))',
    'linear-gradient(to bottom, rgb(102, 77, 55),rgb(25, 25, 25))',
    'linear-gradient(to bottom, rgb(57, 79, 92), rgb(25, 25, 25))',
    'linear-gradient(to bottom, rgb(74, 98, 85), rgb(25, 25, 25))'];

  backgroundMusics.style.background = arrayColor[this.randomNumber()];
}

render() {
  // const { match: {params} } = this.props;
  // const { id } = params;
  const { resultSearch, loading } = this.state;

  const newAudio = ({ target }) => {
    console.log(target);
    this.setState((prevState) => ({
      isPlay: !prevState.isPlay,
    }), () => {
      const { isPlay } = this.state;
      if (isPlay) {
        const audio = new Audio();
        audio.src = `${target.value}`;
        audio.play();
        this.setState({
          isMusic: audio,
        });
        target.textContent = 'II  ';
      } else {
        const { isMusic } = this.state;
        isMusic.pause();
        target.textContent = '\u25BA';
        // https://www.evotech.net/articles/testjsentities.html
        // tabela que converte os caracteres para uso em java script
        // &#9658; -> HTML , \u25BA -> javaScript = Play
        // &#9208; -> HTML , \u23F8' -> javaScritp = Pause
      }
    });
  };

  return (
    <section className="container-musics-main">
      <ButtonUpgrade />
      {loading ? (
        <p>Carregando</p>
      ) : (
        <div className="container-global-main-musics">
          <div className="container-musics-album-artist">
            <img src={ resultSearch[0].artworkUrl100 } alt="Imagem Album" />
            <div className="container-img-title-musics">
              <p>Album</p>
              <h2>{resultSearch[0].collectionName}</h2>
              <p>{`${resultSearch[0].artistName} - ${resultSearch.length} songs`}</p>
            </div>
          </div>
          <div className="container-musics-player">
            <div
              className="container-button-play-music"
            >
              <button
                type="button"
                // value={ previewUrl }
                onClick={ newAudio }
              >
                &#9658;
                {' '}
                {/* Foi utilizado caracter unicode para o simbolo de play e de pause */}
              </button>
            </div>
            <button
              type="button"
              className="button-icon-add-heart"
            >
              <BsHeart className="icon-heart-favorite" />
            </button>
            <p>...</p>
          </div>
          <div className="container-musics-songs-list" />
        </div>
      ) }
    </section>
  );
}
}
