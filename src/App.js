import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Title from './components/Title.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Title title="Digibyte File Hasher" />

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React!
          </a>
        </header>
      </div>
    );
  }
}

export default App;
