import React, { Component } from 'react';
import logo from './logo.svg';
import Calendars from './Calendars';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Slim Pickens</h2>
        </div>
        <Calendars />
      </div>
    );
  }
}

export default App;
