import React, { Component } from 'react';
import ArturSenna from '../images/ArturSenna.png';
import AnaBeatriz from '../images/AnaBeatriz.png';
import MiguelInacio from '../images/MiguelInacio.png';
import RuhamLeal from '../images/RuhamLeal.png';
import VitorMarcelo from '../images/VitorMarcelo.png';

export default class Desenvolvedores extends Component {
  render() {
    const developersData = [{ image: AnaBeatriz, name: 'Ana Beatriz', linkedin: '', gitHub: 'https://github.com/ana-beatriz-martins-lima' }, { image: ArturSenna, name: 'Artur Senna', linkedin: 'https://www.linkedin.com/in/artur-senna-9a2025206/', gitHub: 'https://github.com/artursennass' }, { image: MiguelInacio, name: 'Miguel Inácio', linkedin: 'https://www.linkedin.com/in/miguel-inacio/', gitHub: 'https://github.com/miguel-inacio' }, { image: RuhamLeal, name: 'Ruham Leal', linkedin: 'https://www.linkedin.com/in/ruham-leal-dos-santos-sutil-38a837243/', gitHub: 'https://github.com/RuhamLeal' }, { image: VitorMarcelo, name: 'Vitor Marcelo', linkedin: 'https://www.linkedin.com/in/vitor-marcelo-santos/', gitHub: 'https://github.com/VitorMarceloSantos' }];
    return (
      <div>Desenvolvedores</div>
    );
  }
}
