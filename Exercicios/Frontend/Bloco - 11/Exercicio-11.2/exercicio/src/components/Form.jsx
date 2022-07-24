import React, { Component } from 'react'
import Email from './Email';
import Password from './Password';
// import Submit from './Submit';

class Form extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      submit: true
    }
  }

  handlerGeneric = ({ target: { name, value } }) => {  // destruturacao do event.target

    this.setState({
      [name]: value // deve usar o colchetes para indicar que é uma variável
    })
  }

  handleSubmit = (event) => {
    event.preventDefault(); // não recarregar a página ao enviar o formulário (ao recarregar a página o state é zerado ou seja, volta ao seu estado inicial)
    const { email } = this.state; // destructuring
    alert(`Bem vindo ${ email }`);
  }

  render() {
    const { email, password, submit } = this.state; // utilizando os estados no formulário
    return (
      <form onSubmit={ this.handleSubmit }> {/* Evento para enviar o formulario - utiliza o onSubmit no form e não no button para que ao se teclar o enter o formulário seja enviado*/}
       
        <Email  
          email={ email } // enviado como parâmetro
          handlerGeneric={ this.handlerGeneric } // enviado como parâmetro
        />
        {/* <label htmlFor="email">
          Email
          <input type="text" name="email" id="email" value={email} onChange={(event) => this.handlerGeneric(event)} /> 
        </label> */}
        
        <Password
          password={ password } // enviado como parâmetro
          handlerGeneric={ this.handlerGeneric } // enviado como parâmetro
        />
        
        {/* <label htmlFor="password">
          Password
          <input type="password" name="password" id="password" value={ password } onChange={ this.handlerGeneric } />
        </label> */}
        <button type="submit" name='submit' value={ submit }>Enviar</button> 
        {/* <Email info={ email }/> */}
        {/* <Password />
        <Submit /> */}
      </form>
    )
  }
}

export default Form;