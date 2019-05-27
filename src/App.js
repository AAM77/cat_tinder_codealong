import React, { Component } from 'react';
import Cats from './components/Cats';
import CenterContainer from './components/CenterContainer';
import { connect } from 'react-redux';
import { getCats } from './actions/cats'
import './App.css';


class App extends Component {

  constructor() {
    super()
    this.state = {
      cats: []
    }
  }

  // cats = [
  //   {status: "undecided", image_url: "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", name: "Fluffy"},
  //   {status: "undecided", image_url: "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", name: "Peaches"},
  //   {status: "liked", image_url: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", name: "Spike"}
  // ]

  // fetch request
  componentDidMount() {
    this.props.getCats();




    // fetch("www.mycats.com")
    // .then( response => response.json())
    // ,.then(cats => this.setState({cats: cats}) )
    // this.setState({
    //   cats: cats
    // })
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
        <Cats
          disliked={false}
          handleChangeOfHeart={this.handleClick}
          cats={this.state.cats.filter( cat => cat.status === "liked")}
        />

        <CenterContainer
          handleClick={this.handleClick}
          cats={this.state.cats.filter( cat => cat.status === "undecided")}
        />

        <Cats
          disliked={true}
          handleChangeOfHeart={this.handleClick}
          cats={this.state.cats.filter( cat => cat.status === "disliked")}
        />
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getCats: () => dispatch(getCats)
//   }
// }

export default connect(null, { getCats }) (App);


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
