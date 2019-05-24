import React from 'react';


const CatCard = ({ cat, handleChangeOfHeart }) => {

  let returnVal;

  if (cat) {
    returnVal = <div className="CatCard">
                  <img
                    id={cat.id}
                    src={cat.image_url}
                    alt={cat.name}
                    onClick={handleChangeOfHeart}
                  />
                  <br />
                  <span>{cat.name}</span>
                  <br />
                  <br />
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
