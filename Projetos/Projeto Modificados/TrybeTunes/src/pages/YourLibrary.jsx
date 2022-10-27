import React, { Component } from 'react';
import '../styles/yourLibrary.css';

export default class YourLibrary extends Component {
  render() {
    return (
      <section className="container-yourLibrary">
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
      </section>
    );
  }
}
