import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';

class MusicCard extends Component {
  constructor() {
    super();
    this.state = {
      check: false,
      isLoading: false,
      listMusics: [],
    };
  }

  componentDidMount() {
    const { trackId } = this.props;
    this.setState({ isLoading: true }, async () => {
      const musics = await getFavoriteSongs();
      this.setState({ listMusics: musics }, () => {
        const { listMusics } = this.state;
        const verify = listMusics.some((music) => music.trackId === trackId); // retorna true or false
        this.setState({
          check: verify,
          isLoading: false });
      });
    });
  }

  verifyCheck = (event, searchMusics) => {
    const { target: { id } } = event;
    this.setState((prevState) => ({ // utilizando o prevState parapegar o valor do check
      isLoading: true,
      check: !prevState.check, // sempre vai receber o inverso de seu valor inicial
    }), async () => {
      const { check } = this.state; // pegando o valor atualizado do check
      if (check) { // se check for verdadira vai salvar a musica nos favoritos
        await addSong(searchMusics.find((music) => (String(music.trackId)) === id)); // vai adicionar o o objeto correspondete, convertendo Number para String
        // localStorage.clear() // apagar o localStorage salvo
      } else {
        const { filterMusic } = this.props;
        filterMusic(id);
        await removeSong(searchMusics.find((music) => (String(music.trackId)) === id)); // removendo musica de favoritas
      }
      this.setState({
        isLoading: false,
      });
    });
  }

  render() {
    const { trackName, previewUrl, trackId, searchMusics } = this.props;
    const { check, isLoading } = this.state;
    return (
      <section>
        { isLoading ? <Loading /> : (
          <div className="container">
            <div>{trackName}</div>
            <audio data-testid="audio-component" src={ previewUrl } controls>
              <track kind="captions" />
              O seu navegador não suporta o elemento
              {''}
              {''}
              <code>audio</code>
              .
            </audio>
            <label htmlFor={ trackId }>
              Favorita
              <input
                type="checkbox"
                name="checkbox-music"
                id={ trackId }
                data-testid={ `checkbox-music-${trackId}` }
                checked={ check }
                onChange={ (event) => this.verifyCheck(event, searchMusics) }
              />
            </label>
          </div>
        )}
      </section>
    );
  }
}

MusicCard.propTypes = {
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
  trackId: PropTypes.number.isRequired,
  searchMusics: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  filterMusic: PropTypes.func,
};

MusicCard.defaultProps = { // caso a função filterMusic não esteja no arquivo, ela retorna false
  filterMusic: () => false,
};

export default MusicCard;
