import React, { Component } from 'react';
import '../styles/BrandsCss.css';
import adidas from '../images/adidas.jpg';
import aramis from '../images/aramis.jpg';
import decathlon from '../images/decathlon.jpg';
import garnier from '../images/garnier.jpg';

export default class Brands extends Component {
  render() {
    return (
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
    );
  }
}
