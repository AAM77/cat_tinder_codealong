import React from 'react';
import CatCard from './CatCard';



const Cats = ({ cats, disliked }) => {
  const catCards = cats.map( cat =>
    <CatCard
      key={cat.id}
      cat={cat} />)

  return (
    <div className={disliked ? "DislikedCats" : "LikedCats"}>
      <h2>{disliked ? "Disliked Cats" : "Liked Cats"}</h2>

      { catCards }
    </div>
  );
}

export default Cats;
