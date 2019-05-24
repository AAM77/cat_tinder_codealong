import React from 'react';
import CatCard from './CatCard';

const DisplayCat = ({ cat, handleClick }) => {

  const style = {
    borderStyle:"solid",
    borderColor:"blue",
    borderWidth:"1px"
  }

  return (
    <div height="100px" width="100px"style={style} className="DisplayCat">
      <CatCard cat={cat} />
      <button id={ cat ? cat.id : "no-cat" } value="liked" onClick={handleClick}>Like</button>
      <button id={ cat ? cat.id : "no-cat" } value="disliked" onClick={handleClick}>Dislike</button>
    </div>
  )
}

export default DisplayCat;
