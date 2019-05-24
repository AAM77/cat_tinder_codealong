import React from 'react';


const CatCard = ({ cat }) => {

  let returnVal;

  if (cat) {
    returnVal = <div className="CatCard">
                  <img key={cat.id} src={cat.image_url} alt={cat.name} /><br />
                  <span>{cat.name}</span>
                </div>
  } else {
    returnVal = <div>
                  LOADING...
                </div>
  }

  return(
    returnVal
  )
}

export default CatCard;
