import React, { Component } from 'react';
import Cats from './components/Cats';
import DisplayCat from './components/DisplayCat';

import cats from './cats-data';
import './App.css';


class App extends Component {

  constructor() {
    super()
    this.state = {
      cats: []
    }
  }

  // mocking a fetch request
  componentDidMount() {
    // fetch("www.mycats.com")
    // .then( response => response.json())
    // ,.then(cats => this.setState({cats: cats}) )
    this.setState({
      cats: cats
    })
  }


  render() {

    return (
      <div className="App">
        <h1>Welcome to Cat Tinder</h1>
        { this.state.cats[0] ? <> <DisplayCat cat={this.state.cats[0]} /> <Cats cats={this.state.cats} /> </> : "Gathering the cats together..." }


      </div>
    );
  }
}

export default App;
