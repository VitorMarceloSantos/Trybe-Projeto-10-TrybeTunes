import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardMusics from './CardMusics';

export default class AlbumSaved extends Component {
  render() {
    const { albumSaved } = this.props;
    return (
      <div>
        <p className="text-library">Library</p>
        {albumSaved.map((album) => (
          <CardMusics
            key={ `${album.collectionId}-${album.artistName}` }
            arraySearch={ [album] }
            nameArtist={ album.artistName }
          />
        ))}
      </div>
    );
  }
}

AlbumSaved.propTypes = {
  albumSaved: PropTypes.arrayOf.isRequired,
};
