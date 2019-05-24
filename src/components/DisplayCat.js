import React from 'react';
import CatCard from './CatCard';

const DisplayCat = ({ cat }) => {
  return (
    <div>
      <CatCard cat={cat} />
      <button>Like</button>
      <button>Dislike</button>
    </div>
  )
}

export default DisplayCat;
