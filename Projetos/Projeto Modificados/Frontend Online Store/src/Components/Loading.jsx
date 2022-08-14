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

  preloaderTrybe = () => {
    const { verify } = this.state;
    if (verify) {
      setTimeout(() => {
        const { preloader } = this.state;
        console.log(preloader)
        switch (preloader) {
        case 0:
          this.setState({
            preloader: 1,
            img: trybe0,
          });
          break;
        case 1:
          this.setState({
            preloader: 2,
            img: trybe1,
          });
          break;
        case 2:
          this.setState({
            preloader: 3,
            img: trybe2,
          });
          break;
        case 3:
          this.setState({
            preloader: 0,
            img: trybe3,
          });
          break;
        default:
          console.log('ERRO');
        }
      }, 550);
    }
  }

  render() {
    const { img } = this.state;
    return (
      <div>
        { this.preloaderTrybe()}
        <img src={ img } alt="Preloader" />
      </div>
    );
  }
}
