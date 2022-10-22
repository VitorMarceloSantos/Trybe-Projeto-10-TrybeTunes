import React, { Component } from 'react';
import Header from './Header';
import SideBar from './SideBar';
import FriendActivity from './FriendActivity';
import Content from './Content';

export default class Index extends Component {
  render() {
    return (
      <main>
        <p>TrybeTunes</p>
        <Header />
        <SideBar />
        <FriendActivity />
        <Content />
      </main>
    );
  }
}
