import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardLibrary from './CardLibrary';

export default class AlbumSaved extends Component {
  render() {
    const { albumSaved } = this.props;
    console.log('albumsaved', albumSaved);
    return (
      <div>
        <CardLibrary
          key={ `${albumSaved[0].collectionId}-${albumSaved[0].artistName}` }
          arraySearch={ albumSaved }
          nameArtist={ albumSaved[0].artistName }
        />
      </div>
    );
  }
}

AlbumSaved.propTypes = {
  albumSaved: PropTypes.arrayOf.isRequired,
};
