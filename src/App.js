import React, { Component } from 'react';
import './App.scss';
import Title from './components/Title.js';
import Button from '@material-ui/core/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Title title="Digibyte File Hasher" />
          <Button variant="outlined"> Sign in </Button>
        </header>
      </div>
    );
  }
}

export default App;
