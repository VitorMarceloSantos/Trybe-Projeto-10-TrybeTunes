import React, { Component } from 'react';
import '../styles/musics.css';
import musicsApi from '../services/musicsAPI';

export default class Musics extends Component {
  state ={
    idAlbum: '',
    loading: true,
    resultSearch: '',
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    const { id } = params;
    this.searchAlbum(id);
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
      });
    } catch (err) {
      console.error(`Erro ao consultar API: ${err.message}`);
    }
  };

  render() {
    // const { match: {params} } = this.props;
    // const { id } = params;
    const { resultSearch, loading } = this.state;
    return (
      <section className="container-musics-main">
        {loading ? (
          <p>Carregando</p>
        ) : (
          <div className="container-global-main-musics">
            <div className="container-musics-album-artist">
              <img src={ resultSearch[0].artworkUrl100 } alt="Imagem Album" />
              <p>Album</p>
              <h2>{resultSearch[0].collectionName}</h2>
              <p>{`${resultSearch[0].artistName} - ${resultSearch.length} songs`}</p>
            </div>
            <div className="container-musics-player" />
            <div className="container-musics-songs-list" />
          </div>
        ) }
      </section>
    );
  }
}
