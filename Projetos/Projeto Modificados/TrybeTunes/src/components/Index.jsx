import React, { Component } from 'react';
// import Header from './Header';
import SideBar from './SideBar';
import FriendActivity from './FriendActivity';
import Content from './Content';
import '../styles/index.css';

export default class Index extends Component {
  render() {
    return (
      <main className="container-index">
        <div className="container-sideBar">
          <SideBar />
        </div>
        <div className="container-header-content">
          <div className="container-content">
            <Content />
          </div>
        </div>
        <div className="container-friendActivity">
          <FriendActivity />
        </div>

      </main>
    );
  }
}
