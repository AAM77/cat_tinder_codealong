import React from 'react';
import Cats from './Cats';
import DisplayCat from './DisplayCat';
import NextUpCats from './NextUpCats';

const CenterContainer = ({ cats, handleClick }) => {
    return(
      <div className="CenterContainer">
        <DisplayCat
          cat={cats[0]}
          handleClick={handleClick}
        />

        <NextUpCats cats={cats.slice(1,4)} />
      </div>
    )
}

export default CenterContainer;
