import React from 'react';
import CatCard from './CatCard';



const Cats = ({ cats }) => {
  const catCards = cats.map( cat => <CatCard key={cat.id} cat={cat} />)

  return (
    <div className="Cats">
      { catCards }
    </div>
  );
}

export default Cats;
