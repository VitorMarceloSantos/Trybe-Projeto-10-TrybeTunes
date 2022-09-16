import React, { Component } from 'react'
import informationUser from './dataContext'

class dataContexProvider extends Component {
  constructor(){
    super();
    this.state = {
      name: 'Vitor Marcelo',
      age: '31',
      profission: 'programmer',
    }
  }

  render() {
    const { name, age, profission } = this.state;
    const valueContext = {
      name:name, 
      age: age,
      profission: profission
    }; // passando os estado destruturado
    return (
      <informationUser.Provider value={ valueContext }>
         <div>
        </div>
      </informationUser.Provider>
    )
  }
}

export default dataContexProvider