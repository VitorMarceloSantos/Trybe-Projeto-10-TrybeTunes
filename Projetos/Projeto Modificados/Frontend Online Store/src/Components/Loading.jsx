import React, { Component } from 'react';
import trybe0 from '../images/trybe0.png';
import trybe1 from '../images/trybe1.png';
import trybe2 from '../images/trybe2.png';
import trybe3 from '../images/trybe3.png';

export default class Loading extends Component {
  constructor() {
    super();
    this.state = {
      preloader: 0,
      verify: true,
      img: '',
    };
  }

  componentDidMount() {
    this.preloaderTrybe();
  }

  componentWillUnmount() {
    this.LoaderId.clearInterval();
  }

  preloaderTrybe = () => {
    const { verify } = this.state;
    if (verify) {
      this.LoaderId = setInterval(() => {
        const { preloader } = this.state;
        let loader;
        let imagem;
        switch (preloader) {
        case 0:
          loader = 1;
          imagem = trybe0;
          break;
        case 1:
          loader = 2;
          imagem = trybe1;
          break;
        case 2:
          loader = 3;
          imagem = trybe2;
          break;
        case 3:
          loader = 0;
          imagem = trybe3;
          break;
        default:
          console.log('ERRO');
        }
        this.setState({
          preloader: loader,
          img: imagem,
        });
      }, 250);
    }
  }

  render() {
    const { img } = this.state;
    return (
      <div>
        <img src={ img } alt="Preloader" />
      </div>
    );
  }
}
