import React, { Component } from 'react';
import '../styles/searchBar.css';

export default class SearchBar extends Component {
  render() {
    const arrayArtists = ['Pearl Jam', 'Queen', 'The Beatles', 'Guns N" Roses',
      'Pink Floyd', 'Nirvana', 'Led Zeppelin', 'AC/DC', 'Metallica',
      'Red Hot Chilli Peppers ', 'Iron Maiden', 'The Rolling Stones', 'Bon Jovi',
      'Black Sabbath', 'Scorpions', 'Kiss', 'Linkin Park', 'Aerosmith'];
    return (
      <section className="container-searchBar-principal">
        <section className="container-change-search">
          <input
            type="text"
            name="searchText"
            onChange={ this.changeSearch }
            placeholder="LUPA | Artists, songs, or pc"
          />
        </section>
        <section className="container-searchBar-albuns">
          {arrayArtists.map((artist, index) => (
            <div className="container-searchBar-artist" key={ artist }>
              <h4>{artist}</h4>
              <div className="container-img-searchBar">
                <img src={ `../images/image_${index}.jpg` } alt="Imagem" />
              </div>
            </div>
          ))}
        </section>
      </section>

    );
  }
}
