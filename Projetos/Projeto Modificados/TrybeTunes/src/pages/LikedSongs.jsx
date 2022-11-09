import React, { Component } from 'react';
import SongsLiked from '../components/SongsLiked';
import separateAlbum from '../functions/separeteAlbum';

export default class LikedSongs extends Component {
  state = {
    albumSaved: [],
    separateArtistsName: [],
    isPlay: false,
  }
  // previewUrl, trackName, artistName, trackId

  componentDidMount() {
    this.verifyFavoriteSongs();
  }

  verifyFavoriteSongs = () => {
    const favoriteAlbumSaved = JSON.parse(localStorage.getItem('likedSongs'));
    this.setState({
      albumSaved: favoriteAlbumSaved,
    }, () => {
      const { albumSaved } = this.state;
      if (albumSaved !== null) this.separateAlbum();
    });
  };

  separateAlbum = () => {
    const { albumSaved } = this.state;
    const arrayAlbums = separateAlbum(albumSaved);
    this.setState({ separateArtistsName: arrayAlbums }, () => {
      const { separateArtistsName } = this.state;
      console.log('estado', separateArtistsName);
    });
  }

  render() {
    const { separateArtistsName } = this.state;

    const newAudio = ({ target }) => {
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

      <div className="container-result-musics-api">
        {separateArtistsName.map((artist) => (
          <div key={ artist.trackId }>
            <h2>
              {artist[0].artistName}
            </h2>
            <SongsLiked
              separateArtistsName={ artist }
              newAudio={ newAudio }
            />
          </div>
        ))}
      </div>
    );
  }
}
