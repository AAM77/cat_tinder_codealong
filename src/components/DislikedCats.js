import React from 'react';
import CatCard from './CatCard';

const DislikedCats = ({ cats, handleChangeOfHeart }) => {
  const catCards = cats.map(cat => (
    <CatCard
      key={cat.id}
      cat={cat}
      handleChangeOfHeart={handleChangeOfHeart}
    />
  )
);

  return (
    <div className="DislikedCats">
      <h2>Disliked Cats</h2>
      { catCards }
    </div>
  )
}

export default DislikedCats;
