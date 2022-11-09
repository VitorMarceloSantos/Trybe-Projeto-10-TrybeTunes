import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SideBar from '../components/SideBar';
import getMusics from '../services/musicsAPI';
import Loading from '../components/Loading';
import MusicCard from '../components/MusicCard';

class Album extends Component {
  constructor() {
    super();
    this.state = {
      searchInfo: [],
      searchMusics: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    this.searchMusic();
  }

  searchMusic = () => { // será executado após o render
    const { match: { params: { id } } } = this.props;
    this.setState({
      isLoading: true,
    }, async () => {
      const resultSearch = await getMusics(id); // batendo na API
      this.setState({
        searchInfo: resultSearch[0], // pegando as informações
        searchMusics: resultSearch.slice(1), // pegando as musicas
      }, () => {
        // console.log(this.state.searchMusics)
        this.setState({ isLoading: false });
      });
    });
  }

  render() {
    const { searchInfo, searchMusics, isLoading } = this.state;
    return (
      <div data-testid="page-album">
        <SideBar />
        Album
        {isLoading ? <Loading /> : (
          <div>
            <section>
              <h3 data-testid="artist-name">{searchInfo.artistName}</h3>
              <h3 data-testid="album-name">{searchInfo.collectionName}</h3>
            </section>
            <section>
              {searchMusics.map((music) => (
                <MusicCard
                  key={ music.trackId }
                  trackName={ music.trackName }
                  previewUrl={ music.previewUrl }
                  trackId={ music.trackId } // props
                  searchMusics={ searchMusics } // objeto completo
                />
              ))}
            </section>
          </div>
        )}
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Album;
