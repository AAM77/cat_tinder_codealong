import React, { Component } from 'react';
import Cats from './components/Cats';
import './App.css';

class App extends Component {
  render() {
    console.log(React)
    return (
      <div className="App">
        <h1>Welcome to Cat Tinder</h1>
        <Cats />
      </div>
    );
  }
}

export default App;
