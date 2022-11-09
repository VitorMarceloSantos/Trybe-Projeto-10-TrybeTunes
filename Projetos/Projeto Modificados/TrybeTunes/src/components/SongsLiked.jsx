import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SongsLiked extends Component {
  render() {
    const { separateArtistsName, newAudio } = this.props;
    return (
      <div>
        {separateArtistsName.map(({ previewUrl, trackName, artistName,
        }) => (
          <div
            className="container-button-play-music-musics"
            key={ trackName }
          >
            <div style={ { display: 'flex' } }>
              <button
                type="button"
                value={ previewUrl }
                onClick={ newAudio }
                className="button-play-musics"
              >
                &#9658;
              </button>
              <div className="container-music-liked-song">
                <h3>{trackName}</h3>
                <h4>{artistName}</h4>
              </div>
            </div>
          </div>
        ))}

      </div>
    );
  }
}

SongsLiked.propTypes = {
  separateArtistsName: PropTypes.arrayOf.isRequired,
  newAudio: PropTypes.func.isRequired,
};
