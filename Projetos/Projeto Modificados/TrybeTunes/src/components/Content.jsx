import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import '../styles/header.css';
import '../styles/buttonUpgrade.css';
// import Login from '../pages/Login';
// import Album from '../pages/Album';
// import Favorites from '../pages/Favorites';
// import NotFound from '../pages/NotFound';
// import Profile from '../pages/Profile';
// import ProfileEdit from '../pages/ProfileEdit';
// import Search from '../pages/Search';
import SearchBar from '../pages/SearchBar';
import ButtonUpgrade from './ButtonUpgrade';

export default class Content extends Component {
  render() {
    return (
      <div>
        <div className="container-header">
          <Header />
        </div>
        <p>Content</p>
        <Switch>
          <Route exact path="/" component={ ButtonUpgrade } />
          <Route exact path="/search" component={ SearchBar } />
          {/* <Route exact path="/" component={ Login } />
        <Route exact path="/search" component={ Search } />
        <Route exact path="/album/:id" component={ Album } />
        <Route exact path="/favorites" component={ Favorites } />
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/profile/edit" component={ ProfileEdit } />
        <Route exact component={ NotFound } /> */}
        </Switch>
      </div>

    );
  }
}