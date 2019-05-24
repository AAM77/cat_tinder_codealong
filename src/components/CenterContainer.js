import React from 'react';
import Cats from './Cats';
import DisplayCat from './DisplayCat';
import NextUpCats from './NextUpCats';

const CenterContainer = ({ cats, handleLikeClick, handleDislikeClick }) => {
    return(
      <div className="CenterContainer">
        <DisplayCat
          cat={cats[0]}
          handleLikeClick={handleLikeClick}
          handleDislikeClick={handleDislikeClick}
        />

        <NextUpCats cats={cats.slice(1,4)} />
      </div>
    )
}

export default CenterContainer;
