import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as Auth from './services/Auth';
import LoginPage from './connectors/Login';
import MainPage from './connectors/Main';

class App extends Component {
  componentDidMount() {
    console.log('update');
    window.addEventListener('storage', this.handleStorageChange, false);  
  }
  componentWillUnmount() {
    window.removeEventListener(this.handleStorageChange);
  }

  handleStorageChange = (ev) => {
    console.log('update');
    this.forceUpdate();
  }
  render() {
    if (! Auth.isLoggedin()) {
      return (
        <LoginPage/>
      )
    }
    return (
      <MainPage/>
    );
  }
}

export default App;
