import React, { Component } from 'react';

class Email extends Component {
  render(){
    const { value, handlerEmail } = this.props;
    return (
      <div>
        <input type="text" name="email" id="email" value={} onClick={(event) => handlerEmail(event)} />
      </div>
    );
  }
}

export default Email;