import React from 'react';
import CatCard from './CatCard';

const DisplayCat = ({ cat }) => {

  const style = { borderStyle:"solid", borderColor:"blue", borderWidth:"1px"}
  return (
    <div style={style} className="DisplayCat">
      <CatCard cat={cat} />
      <button onClick={handleLikeClick}>Like</button>
      <button onClick={handleDislikeClick}>Dislike</button>
    </div>
  )
}

export default DisplayCat;
