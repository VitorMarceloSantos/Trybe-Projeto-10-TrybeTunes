import React, { Component } from 'react';
import sound from '../images/sound.png';
import '../styles/notFoundPlaylist.css';

export default class NotFoundPlaylist extends Component {
  render() {
    return (
      <div className="container-library-not-found">
        <section className="container-main-not-found">
          <img src={ sound } alt="Imagem Nota Musical" />
          <h2 className="container-title-create">Create your first playlist</h2>
          <h3>It&apos;s easy, we&apos;ll help you.</h3>
          <button type="button">Create playlist</button>
        </section>
      </div>

    );
  }
}
