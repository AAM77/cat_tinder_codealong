import React, { Component } from 'react';
import Cats from './components/Cats';
import DisplayCat from './components/DisplayCat';
import LikedCats from './components/LikedCats';
import DislikedCats from './components/DislikedCats';
import CenterContainer from './components/CenterContainer';

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
        <LikedCats cats={cats.slice(0,2)} />
        <CenterContainer cats={cats.slice(10,13)} />
        <DislikedCats cats={cats.slice(4,8)} />
      </div>
    );
  }
}

export default App;


// {
//   this.state.cats.length > 0
//   ?
//   <>
//     <div className="LikedCats">Liked</div>
//     <DisplayCat cat={this.state.cats[0]} />
//     <Cats cats={this.state.cats} />
//     <div className="DislikedCats">Disliked</div>
//   </>
//   :
//   "Gathering the cats together..."
// }
