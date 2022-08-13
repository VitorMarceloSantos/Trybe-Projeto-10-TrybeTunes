import React, { Component } from 'react';
import '../styles/IndexCategoryCss.css';

export default class IndexCategory extends Component {
  render() {
    return (
      <section className="container-category">
        <div className="container-figures">
          <div className="container-figures-1">
            <div className="div-figure select-all games">
              <i className="fa-solid fa-gamepad select-all games" />
              <p className="select-all games">Games</p>
            </div>
            <div className="div-figure select-all informatica">
              <i className="fa-solid fa-computer select-all informatica" />
              <p className="select-all informatica">Informática</p>
            </div>
            <div className="div-figure select-all veiculos">
              <i className="fa-solid fa-car select-all veiculos" />
              <p className="select-all veiculos">Carros, Motos e Outros</p>
            </div>
            <div className="div-figure select-all roupas">
              <i className="fa-solid fa-shirt select-all roupas" />
              <p className="select-all roupas">Roupas e Calçados</p>
            </div>
            <div className="div-figure select-all celulares">
              <i className="fa-solid fa-mobile-screen-button select-all celulares" />
              <p className="select-all celulares">Celulars e Telefones</p>
            </div>
          </div>
          <div className="container-figures-2">
            <div className="div-figure select-all eletronicos">
              <i className="fa-solid fa-microphone select-all eletronicos" />
              <p className="select-all eletronicos">Eletrônicos e Áudio</p>
            </div>
            <div className="div-figure select-all ferramentas">
              <i className="fa-solid fa-screwdriver-wrench select-all ferramentas" />
              <p className="select-all ferramentas">Ferramentas</p>
            </div>
            <div className="div-figure select-all petshop">
              <i className="fa-solid fa-cat select-all petshop" />
              <p className="select-all petshop">Animais e Shop</p>
            </div>
            <div className="div-figure select-all mobilia">
              <i className="fa-solid fa-house select-all mobilia" />
              <p className="select-all mobilia">Casa, Móveis e Decoração</p>
            </div>
            <div className="div-figure select-all esportes">
              <i className="fa-solid fa-person-biking select-all esportes" />
              <p className="select-all esportes">Esporte e Fitness</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
