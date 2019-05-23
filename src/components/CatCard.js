import React from 'react';


const CatCard = ({ cat }) => {
  return(
    <div>
      <img height="100px" width="100px" src={cat.image_url} alt={cat.name} /><br />
      <span>{cat.name}</span>
    </div>
  )
}

export default CatCard;
