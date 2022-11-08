import React, { Component } from 'react';
import '../styles/yourLibrary.css';
// import CardMusics from '../components/CardMusics';
import AlbumSaved from '../components/AlbumSaved';

export default class YourLibrary extends Component {
  state = {
    albumSaved: [],
  }

  componentDidMount() {
    this.verifyFavoriteSongs();
  }

  verifyFavoriteSongs = async () => {
    const favoriteAlbumSaved = JSON.parse(localStorage.getItem('favorite_album'));
    this.setState({
      albumSaved: favoriteAlbumSaved,
    });
  };

  render() {
    const { albumSaved } = this.state;
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
          {albumSaved !== null ? (
            <AlbumSaved
              albumSaved={ albumSaved }
            />
          )
            : (
              <div className="container-not-selected-your-library">
                <p> Nenhum album encontrado</p>
              </div>
            )}
        </section>
      </div>

    );
  }
}
