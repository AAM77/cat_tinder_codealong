import React, { Component } from 'react';
import Cats from './components/Cats';
import CenterContainer from './components/CenterContainer';
import { connect } from 'react-redux';
import { getCats } from './actions/cats'
import './App.css';


class App extends Component {


  // fetch request
  componentDidMount() {
    this.props.getCats();
  }


  // LET'S TURN THIS INTO AND { ACTION } & eliminate as a method of App


  render() {
    return (
      <div className="App">
        <Cats
          disliked={false}
          cats={this.props.cats.filter( cat => cat.status === "liked")}
        />

        <CenterContainer
        />

        <Cats
          disliked={true}
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
export default connect(mapStateToProps, { getCats }) (App);

//cats={this.props.cats.filter( cat => cat.status === "undecided")}
