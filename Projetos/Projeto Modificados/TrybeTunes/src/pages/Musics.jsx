import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/musics.css';
import { BsHeart } from 'react-icons/bs';
import musicsApi from '../services/musicsAPI';
import ButtonUpgrade from '../components/ButtonUpgrade';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import selectColor from '../functions/selectColor';

export default class Musics extends Component {
  state ={
    loading: true,
    resultSearch: '',
    randomSelectMusic: '',
    isPlay: false,
    favorteSongSaved: [],
    songsDetailsSaved: [{}],
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    const { id } = params;
    this.searchAlbum(id);
    this.verifyFavoriteSongs();
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
        // this.randomMusic(resultSearch);
        selectColor();
      });
    } catch (err) {
      console.error(`Erro ao consultar API: ${err.message}`);
    }
  };

favoriteSong = (trackId, previewUrl, trackName, artistName) => {
  this.setState((prevState) => ({ // utilizando o prevState parapegar o valor do check
    loading: true,
    check: !prevState.check, // sempre vai receber o inverso de seu valor inicial
  }), async () => {
    const favoriteSongs = await getFavoriteSongs();
    if (!favoriteSongs.some((idMusic) => Number(idMusic) === trackId)) {
      // caso o id não se encontre no find, salvará no localStorage
      const { songsDetailsSaved} = this.state;
      console.log('songs', songsDetailsSaved)
      await addSong(trackId);
      localStorage.setItem('likedSongs', JSON
        .stringify([...songsDetailsSaved, { previewUrl, trackName, artistName }]));
      this.setState((prevState) => ({
        favorteSongSaved: [...prevState.favorteSongSaved, trackId],
        songsDetailsSaved: [...prevState.songsDetailsSaved,
          { previewUrl, trackName, artistName }],
        loading: false,
      }));
    } else {
      await removeSong(trackId);

      // Fazer localStorage REMOVER do songsDetalSaved
      this.setState((prevState) => ({
        favorteSongSaved: prevState.favorteSongSaved.filter((id) => id !== trackId),
        loading: false,
      }));
    }
  });
}

verifyFavoriteSongs = async () => {
  const favoriteSongs = await getFavoriteSongs(); // coloar no setState
  const favoriteSongSaved = JSON.parse(localStorage.getItem('likedSongs'));
  console.log('saved', favoriteSongSaved)
  this.setState({
    favorteSongSaved: favoriteSongs,
    songsDetailsSaved: [favoriteSongSaved],
  });
};

render() {
  // const { match: { params } } = this.props;
  // const { id } = params;
  const { resultSearch, loading, randomSelectMusic, favorteSongSaved } = this.state;

  const newAudio = (target) => {
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

  const targetNewAudio = ({ target }) => {
    newAudio(target);
  };

  const randomMusic = ({ target }) => {
    const { isPlay } = this.state;
    console.log('isplay', isPlay);
    if (!isPlay) {
      const randomSelect = resultSearch.slice(1, resultSearch.length);
      const randomMusicFinally = randomSelect[Math
        .floor(Math.random() * randomSelect.length)];
      const value = {
        previewUrl: randomMusicFinally.previewUrl,
        name: randomMusicFinally.trackName,
      };
      this.setState({
        randomSelectMusic: value,
      }, () => {
        newAudio(target);
      });
    } else {
      const { isMusic } = this.state;
      isMusic.pause();
      target.textContent = '\u25BA';
      this.setState({ isPlay: false });
    }
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
              <p>{`${resultSearch[0].artistName} - ${resultSearch.length - 1} songs`}</p>
            </div>
          </div>
          <div className="container-musics-player">
            <div
              className="container-button-play-music-musics"
            >
              <button
                type="button"
                value={ randomSelectMusic.previewUrl }
                onClick={ randomMusic }
                className="button-play-musics"
              >
                &#9658;
              </button>
            </div>
            <button
              type="button"
              className="button-icon-add-heart-musics"
            >
              <BsHeart className="icon-heart-favorite-musics" />
            </button>
            <p>...</p>
            <div className="container-name-music-random">
              <div className="add-sound-gif" />
              {randomSelectMusic.name !== undefined && (
                <p>{`Song: ${randomSelectMusic.name}`}</p>
              )}
            </div>
          </div>
          <div className="container-musics-songs-list">
            <p># TITLE</p>
            {console.log(resultSearch)}
            <div className="line-border" />
            <div className="container-result-musics-api">
              {(resultSearch.slice(1, resultSearch.length))
                .map(({ previewUrl, trackName, artistName, trackId,
                }, index) => (
                  <div
                    className="container-button-play-music-musics"
                    key={ trackName }
                  >
                    <div style={ { display: 'flex' } }>
                      <button
                        type="button"
                        value={ previewUrl }
                        onClick={ targetNewAudio }
                        className="button-play-musics"
                      >
                        &#9658;
                      </button>
                      <div>
                        <h3>{trackName}</h3>
                        <h4>{artistName}</h4>
                      </div>
                    </div>
                    <div className="container-liked-music-api">
                      <button
                        type="button"
                        className="button-icon-add-heart-musics-api"
                        value={ trackId }
                        onClick={ () => {
                          this.favoriteSong(
                            trackId, previewUrl, trackName, artistName,
                          );
                        } }
                      >
                        <BsHeart
                          id={ `iconHeart-${index + 1}` }
                          className={ `icon-heart-favorite-musics-api ${(favorteSongSaved
                            .some((id) => (id === trackId)))
                            && 'icon-heart-favorite-musics-api-selected'}` }
                        />
                      </button>
                      <p>...</p>
                    </div>
                  </div>
                ))}
            </div>

          </div>
        </div>
      ) }
    </section>
  );
}
}

Musics.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
