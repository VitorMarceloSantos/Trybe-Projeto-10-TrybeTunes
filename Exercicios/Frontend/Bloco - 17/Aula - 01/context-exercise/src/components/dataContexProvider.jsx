import React, { Component } from 'react'
import informationUser from './dataContext'

export class dataContexProvider extends Component {
  constructor(){
    super();
    this.state = {
      name: 'Vitor Marcelo',
      age: '31',
      profission: 'programmer',
    }
  }

  render() {
    const valueContext = { ...this.state }; // passando os estado destruturado
    return (
      <informationUser.Provider value={ valueContext }>
         <div>
        </div>
      </informationUser.Provider>
    )
  }
}

export default dataContexProvider