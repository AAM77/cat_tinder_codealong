import React, { Component } from 'react';
import CatCard from './CatCard';
import cats from '../cats-data';


export default class Cats extends Component {

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

    const catCards = this.state.cats.map( cat => <CatCard key={cat.name} cat={cat} />)

    return (
      <div>
        { catCards }
      </div>
    );
  };
}
