import React, { Component } from 'react';
import '../styles/loading.css';

class Loading extends Component {
  render() {
    return (
      <div className="spinner">
        <div className="r1" />
        <div className="r2" />
        <div className="r3" />
        <div className="r4" />
        <div className="r5" />
      </div>
    );
  }
}

export default Loading;
