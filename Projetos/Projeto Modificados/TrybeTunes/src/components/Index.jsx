import React, { Component } from 'react';
// import Header from './Header';
import SideBar from './SideBar';
import FriendActivity from './FriendActivity';
import Content from './Content';
import '../styles/index.css';
import Header from './Header';
import '../styles/header.css';

export default class Index extends Component {
  state = {
    positionScrool: false,
  }

  componentDidUpdate() {
    useScrollBar = () => {
      if (window.scrollY > 0) {
        this.setState({ positionScrool: true });
      } else {
        this.setState({ positionScrool: false });
      }
    };
  }

  render() {
    const { positionScrool } = this.state;
    return (
      <main className="container-index">
        <div className="container-sideBar">
          <SideBar />
        </div>
        <div className="container-header-content">
          <div className={ positionScrool ? 'black-header' : 'container-header' }>
            <Header />
          </div>
          <Content />
        </div>
        <div className="container-friendActivity">
          <FriendActivity />
        </div>

      </main>
    );
  }
}
