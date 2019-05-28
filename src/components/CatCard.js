import React from 'react';
import { connect } from 'react-redux';
import { changeOfHeart } from '../actions/cats';

const CatCard = ({ cat, changeOfHeart }) => {

  let returnVal;

  if (cat) {
    returnVal = <div className="CatCard">
                  <img
                    src={cat.image_url}
                    alt={cat.name}
                    onClick={() => changeOfHeart(cat)}
                  />
                  <br />
                  <span>{cat.name}</span>
                  <br />
                  <br />
                </div>
  } else {
    returnVal = <div>
                  EMPTY OR LOADING...
                </div>
  }

  return(
    returnVal
  )
}

export default connect(null, { changeOfHeart })(CatCard);
