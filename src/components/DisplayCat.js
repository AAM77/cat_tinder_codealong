import React from 'react';
import CatCard from './CatCard';
import { connect } from 'react-redux';
import { likeCat, dislikeCat } from '../actions/cats';

const DisplayCat = ({ cat, handleClick, likeCat, dislikeCat }) => {

  const style = {
    borderStyle:"solid",
    borderColor:"blue",
    borderWidth:"1px"
  }

  return (
    <div height="100px" width="100px"style={style} className="DisplayCat">
      <CatCard cat={cat} />
      <button className="like-button" onClick={() => likeCat(cat.id)}>Like</button>
      <button className="dislike-button" onClick={() => dislikeCat(cat.id)}>Dislike</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return(
    {
      cat: state.cats.filter( cat => cat.status === 'undecided')[0]
    }
  )
}

export default connect(mapStateToProps, { likeCat, dislikeCat })(DisplayCat);
