// import React, { Component } from 'react';
// // import { Link } from 'react-router-dom';
// import SideBar from '../components/SideBar';
// import Loading from '../components/Loading';
// import MusicCard from '../components/MusicCard';
// import { getFavoriteSongs } from '../services/favoriteSongsAPI';

// class Favorites extends Component {
//   constructor() {
//     super();
//     this.state = {
//       // check: false,
//       isLoading: false,
//       listFavorites: [],
//     };
//   }

//   componentDidMount() {
//     this.setState({ isLoading: true }, async () => {
//       const musics = await getFavoriteSongs();
//       this.setState({
//         listFavorites: musics,
//         isLoading: false,
//       });
//     });
//   }

//   filterMusic = (idMusic) => {
//     const { listFavorites } = this.state;
//     this.setState({
//       listFavorites: listFavorites.filter((music) => music.trackId !== Number(idMusic)),
//       // isLoading: false,
//     });
//     //       .filter((music) => music.trackId !== Number(idMusic)),
//     // this.setState({
//     //   isLoading: true,
//     // }, () => {
//     //   const { listFavorites } = this.state;
//     //   this.setState({
//     //     listFavorites: listFavorites
//     //       .filter((music) => music.trackId !== Number(idMusic)),
//     //   });
//     // });
//     // this.setState({
//     //   isLoading: false,
//     // });
//   }

//   render() {
//     const { isLoading, listFavorites } = this.state;
//     return (
//       <div data-testid="page-favorites">
//         <SideBar />
//         Favorites
//         {isLoading ? <Loading /> : (
//           <section>
//             {listFavorites.map((music) => (
//               <div key={ music.trackId }>
//                 <h3 data-testid="artist-name">{music.artistName}</h3>
//                 <h3 data-testid="album-name">{music.collectionName}</h3>
//                 <MusicCard
//                   key={ music.trackId }
//                   trackName={ music.trackName }
//                   previewUrl={ music.previewUrl }
//                   trackId={ music.trackId } // props
//                   searchMusics={ listFavorites } // objeto completo
//                   filterMusic={ this.filterMusic }
//                 />
//               </div>
//             ))}
//           </section>
//         )}
//       </div>
//     );
//   }
// }

// export default Favorites;
