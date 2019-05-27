import React, { Component } from 'react';
import Cats from './components/Cats';
import CenterContainer from './components/CenterContainer';
import { connect } from 'react-redux';
import { getCats, changeStatus } from './actions/cats'
import './App.css';


class App extends Component {


  // fetch request
  componentDidMount() {
    this.props.getCats();
  }


  // LET'S TURN THIS INTO AND { ACTION } & eliminate as a method of App
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

    const cats = this.props.cats.map( cat => {
      if (cat.id === parseInt(event.target.id)) {
        const newCat = Object.assign({}, cat);
        newCat.status = newStatus();
        return newCat;
      } else {
        return cat;
      }
    })

    this.props.changeStatus(cats);
    // this.setState({
    //   cats: cats
    // })
  }

  render() {
    return (
      <div className="App">
        <Cats
          disliked={false}
          handleChangeOfHeart={this.handleClick}
          cats={this.props.cats.filter( cat => cat.status === "liked")}
        />

        <CenterContainer
          handleClick={this.handleClick}
          cats={this.props.cats.filter( cat => cat.status === "undecided")}
        />

        <Cats
          disliked={true}
          handleChangeOfHeart={this.handleClick}
          cats={this.props.cats.filter( cat => cat.status === "disliked")}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return (
    {
      // the state being passed in, (and, thus, the state in state.cats)
      // is actually the global state that we are getting from redux!
      cats: state.cats
    }
  )
}

// here, we're handing getCats to redux.
// redux sees the getCats as a type of callback function
// and redux knows how to handle passing dispatch correctly to it
export default connect(mapStateToProps, { getCats, changeStatus }) (App);
