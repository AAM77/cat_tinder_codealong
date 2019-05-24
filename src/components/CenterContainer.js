import React, { Component } from 'react';
import Cats from './Cats';
import DisplayCat from './DisplayCat';
import NextUpCats from './NextUpCats';

class CenterContainer extends Component {

  render() {
    return(
      <div className="CenterContainer">
        <DisplayCat cat={this.props.cats[0]} />
        <NextUpCats cats={this.props.cats.slice(1,4)} />
      </div>
    )
  }
}

export default CenterContainer;
