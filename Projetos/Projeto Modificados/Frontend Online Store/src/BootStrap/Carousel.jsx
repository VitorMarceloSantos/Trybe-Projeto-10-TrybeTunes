import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/BrandsCss.css';
import adidas from '../images/adidas.jpg';
import aramis from '../images/aramis.jpg';
import decathlon from '../images/decathlon.jpg';
import garnier from '../images/garnier.jpg';
import hering from '../images/hering.jpg';
import mac from '../images/mac.jpg';
import nike from '../images/nike.jpg';
import democratas from '../images/democratas.jpg';
import aple from '../images/aple.jpg';
import samsung from '../images/samsung.jpg';
import marisa from '../images/marisa.jpg';
import motorola from '../images/motorola.jpg';

export default class CarouselBrands extends Component {
  render() {
    const { handleChangeCategory } = this.props;
    return (
      <Carousel>
        <Carousel.Item>
          <div className="container-brands">
            <button
              className="brand"
              type="button"
              onClick={ handleChangeCategory }
            >
              <img src={ adidas } alt="Adidas" />
              <p>ADIDAS</p>
            </button>
            <button
              className="brand"
              type="button"
              onClick={ handleChangeCategory }
            >
              <img src={ aramis } alt="Aramis" />
              <p>ARAMIS</p>
            </button>
            <button
              className="brand"
              type="button"
              onClick={ handleChangeCategory }
            >
              <img src={ decathlon } alt="Decathlon" />
              <p>DECATHLON</p>
            </button>
            <button
              className="brand"
              type="button"
              onClick={ handleChangeCategory }
            >
              <img src={ garnier } alt="Garnier" />
              <p>GARNIER</p>
            </button>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="container-brands">
            <button
              className="brand"
              type="button"
              onClick={ handleChangeCategory }
            >
              <img src={ hering } alt="Hering" />
              <p>HERING</p>
            </button>
            <button
              className="brand"
              type="button"
              onClick={ handleChangeCategory }
            >
              <img src={ mac } alt="Mac" />
              <p>MAC</p>
            </button>
            <button
              className="brand"
              type="button"
              onClick={ handleChangeCategory }
            >
              <img src={ nike } alt="Nike" />
              <p>NIKE</p>
            </button>
            <button
              className="brand"
              type="button"
              onClick={ handleChangeCategory }
            >
              <img src={ democratas } alt="Democratas" />
              <p>DEMOCRATAS</p>
            </button>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="container-brands">
            <button
              className="brand"
              type="button"
              onClick={ handleChangeCategory }
            >
              <img src={ marisa } alt="Marisa" />
              <p>MARISA</p>
            </button>
            <button
              className="brand"
              type="button"
              onClick={ handleChangeCategory }
            >
              <img src={ aple } alt="Aple" />
              <p>APLE</p>
            </button>
            <button
              className="brand"
              type="button"
              onClick={ handleChangeCategory }
            >
              <img src={ motorola } alt="Motorola" />
              <p>MOTOROLA</p>
            </button>
            <button
              className="brand"
              type="button"
              onClick={ handleChangeCategory }
            >
              <img src={ samsung } alt="Samsung" />
              <p>SAMSUNG</p>
            </button>
          </div>
        </Carousel.Item>
      </Carousel>
    );
  }
}
