import React from 'react';
import CatCard from './CatCard';



const Cats = ({ cats }) => {
  const catCards = cats.map( cat => <CatCard key={cat.name} cat={cat} />)

  return (
    <div>
      { catCards }
    </div>
  );
}

export default Cats;