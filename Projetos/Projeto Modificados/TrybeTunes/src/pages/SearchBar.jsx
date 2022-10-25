import React, { Component } from 'react';
import '../styles/searchBar.css';

export default class SearchBar extends Component {
  render() {
    return (
      <section className="container-change-search">
        <input
          type="text"
          name="searchText"
          onChange={ this.changeSearch }
          placeholder={ `LUPA | Artists, songs, or pc` }
        />
      </section>
    );
  }
}
