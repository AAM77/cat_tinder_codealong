import React from 'react';
import DisplayCat from './DisplayCat';
import NextUpCats from './NextUpCats';
import UploadCatForm from './UploadCatForm';

const CenterContainer = ({ cats, handleClick }) => {
    return(
      <div className="CenterContainer">
        <DisplayCat
          handleClick={handleClick}
        />

        <NextUpCats />

        <UploadCatForm />
      </div>
    )
}


//
export default CenterContainer;
