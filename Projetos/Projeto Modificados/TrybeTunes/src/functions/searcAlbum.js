import musicsApi from '../services/musicsAPI';

const searchAlbum = async (idAlbum) => {
  try {
    const musics = await musicsApi(idAlbum);
    this.setState({
      resultSearch: musics,
      loading: false,
    }, () => {
      const { resultSearch } = this.state;
      console.log(resultSearch);
      // this.randomMusic(resultSearch);
      this.selectColor();
    });
  } catch (err) {
    console.error(`Erro ao consultar API: ${err.message}`);
  }
};

module.exports = searchAlbum;
