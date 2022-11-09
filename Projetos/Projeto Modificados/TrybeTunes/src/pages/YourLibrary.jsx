import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/yourLibrary.css';
// import CardMusics from '../components/CardMusics';
import AlbumSaved from '../components/AlbumSaved';
import NotFoundPlaylist from '../components/NotFoundPlaylist';

export default class YourLibrary extends Component {
  state = {
    albumSaved: [],
    separateArtistsName: [],
  }

  componentDidMount() {
    this.verifyFavoriteSongs();
  }

  verifyFavoriteSongs = () => {
    const favoriteAlbumSaved = JSON.parse(localStorage.getItem('favorite_album'));
    this.setState({
      albumSaved: favoriteAlbumSaved,
    }, () => {
      const { albumSaved } = this.state;
      if (albumSaved !== null) this.separateAlbum();
    });
  };

  separateAlbum = () => {
    const { albumSaved } = this.state;
    let newArray = [];
    const arrayAlbums = [];
    albumSaved.forEach(({ artistName }) => {
      // console.log('entrouaqui')
      if (newArray.length === 0 && arrayAlbums.length === 0) {
        newArray = albumSaved.filter(({ artistName: name }) => name === artistName);
        arrayAlbums.push(newArray); // adicionando os albuns iguais
        newArray = albumSaved
          .filter(({ artistName: name }) => name !== newArray[0].artistName);
      } else if (newArray.length !== 0 && artistName === newArray[0].artistName) {
        console.log('nome', newArray[0].artistName);
        const arrayNew = newArray
          .filter(({ artistName: name }) => name === newArray[0].artistName);
        arrayAlbums.push(arrayNew); // adicionando os albuns iguais
        newArray = newArray
          .filter(({ artistName: name }) => name !== newArray[0].artistName);
      }
    });
    // console.log('newArreay', newArray);
    // console.log('arrayAlbum', arrayAlbums);
    this.setState({ separateArtistsName: arrayAlbums }, () => {
      const { separateArtistsName } = this.state;
      console.log('estado', separateArtistsName);
    });
  }

  render() {
    const { separateArtistsName } = this.state;
    const { history } = this.props;
    return (
      <div className="container-main-your-library">
        <nav className="container-nav-yourLibrary">
          <ul>
            <li>
              <button type="button">Playlists</button>
            </li>
            <li>
              <button type="button">Podcasts</button>
            </li>
            <li>
              <button type="button">Artists</button>
            </li>
            <li>
              <button type="button">Albums</button>
            </li>
          </ul>
        </nav>
        <section className="container-your-library-album">
          {/* <p className="text-library">Library</p> */}
          {separateArtistsName.length !== 0 ? (
            separateArtistsName.map((album) => (
              <AlbumSaved
                key={ album.collectionId }
                albumSaved={ album }
              />
            ))
          )
            : (
              <div className="container-not-selected-your-library">
                <NotFoundPlaylist
                  history={ history }
                />
              </div>
            )}
        </section>
      </div>

    );
  }
}

YourLibrary.propTypes = {
  history: PropTypes.func.isRequired,
};
