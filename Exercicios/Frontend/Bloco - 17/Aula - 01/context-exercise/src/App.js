import React, { Component } from 'react'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'


export class App extends Component {
  render() {
    return (
      <div>
        <HeaderComponent></HeaderComponent>
        <FooterComponent></FooterComponent>
      </div>
    )
  }
}

export default App
