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

  handleClick = (event) => {
    console.log(event.target)

    let newStatus = () => {
      if (event.target.className === 'like-button') {
        return 'liked'
      } else if (event.target.className === 'dislike-button') {
        return 'disliked'
      } else {
        return 'undecided'
      }
    }

    const cats = this.state.cats.map( cat => {
      if (cat.id === parseInt(event.target.id)) {
        const newCat = Object.assign({}, cat);
        newCat.status = newStatus();
        return newCat;
      } else {
        return cat;
      }
    })

    this.setState({
      cats: cats
    })
  }


  render() {
    return (
      <div className="App">
        <LikedCats
          handleChangeOfHeart={this.handleClick}
          cats={this.state.cats.filter( cat => cat.status === "liked")}
        />

        <CenterContainer
          handleClick={this.handleClick}
          cats={this.state.cats.filter( cat => cat.status === "undecided")}
        />

        <DislikedCats
          handleChangeOfHeart={this.handleClick}
          cats={this.state.cats.filter( cat => cat.status === "disliked")}
        />
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
