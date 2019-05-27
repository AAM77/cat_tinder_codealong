import React from 'react';
import CatCard from './CatCard';
import { connect } from 'react-redux';

const DisplayCat = ({ cat, handleClick }) => {

  const style = {
    borderStyle:"solid",
    borderColor:"blue",
    borderWidth:"1px"
  }

  return (
    <div height="100px" width="100px"style={style} className="DisplayCat">
      <CatCard cat={cat} />
      <button id={ cat ? cat.id : "no-cat" } className="like-button" onClick={handleClick}>Like</button>
      <button id={ cat ? cat.id : "no-cat" } className="dislike-button" onClick={handleClick}>Dislike</button>
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

export default connect(mapStateToProps)(DisplayCat);
