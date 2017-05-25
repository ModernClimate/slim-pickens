import React, { Component } from 'react';
import logo from './logo.svg';
import { SlimPickens } from '@ackmann-dickenson/slim-pickens';
import './App.css';

class App extends Component {
  state = {
    selected: new Date('4/20/2017')
  }

  select = selected => this.setState({ selected })

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <SlimPickens onPick={this.select} selected={this.state.selected} />
      </div>
    );
  }
}

export default App;
