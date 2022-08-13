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
    return (
      <Carousel>
        <Carousel.Item>
          <div className="container-brands">
            <div className="brand">
              <img src={ adidas } alt="Adidas" />
              <p>ADIDAS</p>
            </div>
            <div className="brand">
              <img src={ aramis } alt="Aramis" />
              <p>ARAMIS</p>
            </div>
            <div className="brand">
              <img src={ decathlon } alt="Decathlon" />
              <p>DECATHLON</p>
            </div>
            <div className="brand">
              <img src={ garnier } alt="Garnier" />
              <p>GARNIER</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="container-brands">
            <div className="brand">
              <img src={ hering } alt="Hering" />
              <p>HERING</p>
            </div>
            <div className="brand">
              <img src={ mac } alt="Mac" />
              <p>MAC</p>
            </div>
            <div className="brand">
              <img src={ nike } alt="Nike" />
              <p>NIKE</p>
            </div>
            <div className="brand">
              <img src={ democratas } alt="Democratas" />
              <p>DEMOCRATAS</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="container-brands">
            <div className="brand">
              <img src={ marisa } alt="Marisa" />
              <p>MARISA</p>
            </div>
            <div className="brand">
              <img src={ aple } alt="Aple" />
              <p>APLE</p>
            </div>
            <div className="brand">
              <img src={ motorola } alt="Motorola" />
              <p>MOTOROLA</p>
            </div>
            <div className="brand">
              <img src={ samsung } alt="Samsung" />
              <p>SAMSUNG</p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    );
  }
}
