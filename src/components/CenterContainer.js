import React from 'react';
import Cats from './Cats';
import DisplayCat from './DisplayCat';
import NextUpCats from './NextUpCats';
import UploadCatForm from './UploadCatForm';

const CenterContainer = ({ cats, handleClick }) => {
    return(
      <div className="CenterContainer">
        <DisplayCat
          cat={cats[0]}
          handleClick={handleClick}
        />

        <NextUpCats cats={cats.slice(1,4)} />

        <UploadCatForm />
      </div>
    )
}

export default CenterContainer;
