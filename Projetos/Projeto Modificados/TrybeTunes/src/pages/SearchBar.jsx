import React, { Component } from 'react';
import '../styles/searchBar.css';
import { HiSearch } from 'react-icons/hi';

export default class SearchBar extends Component {
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

    return (
      <section className="container-searchBar-principal">
        <section className="container-change-search">
          <label htmlFor="input-search" className="label-input-search">
            <HiSearch className="icon-search-glass" />
            <input
              type="text"
              name="searchText"
              onChange={ this.changeSearch }
              placeholder="Artists, songs, albuns, ...."
            />
          </label>
        </section>
        <section className="container-searchBar-albuns">
          {arrayArtists.map((artist, index) => (
            <div
              style={ { backgroundColor: arrayColor[randomNumber()] } }
              className="container-searchBar-artist"
              key={ artist }
            >
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
