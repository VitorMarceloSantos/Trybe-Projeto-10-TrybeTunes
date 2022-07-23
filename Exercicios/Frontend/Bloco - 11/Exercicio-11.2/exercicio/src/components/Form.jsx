import React, { Component } from 'react'
// import Email from './Email';
// import Password from './Password';
// import Submit from './Submit';

class Form extends Component {
  constructor(){
    super()
    this.state = {
      email: '',
      password: '',
      submit: true
    }
  }
  // handlerOnChange = () => {

  // }
  // arrow function não necessita do bind
  handlerGeneric = ({ target: {name, value} }) => {  // destruturacao do event.target
    this.setState({
      [name]: value // deve usar o colchetes para indicar que é uma variável
      
    })
  }

  render() {
    return (
      <form>
        <input type="text" name="email" id="email" onChange={(event) => this.handlerGeneric(event)} />
        {/* <Email />
        <Password />
        <Submit /> */}
      </form>
    )
  }
}

export default Form;