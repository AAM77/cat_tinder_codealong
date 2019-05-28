import React from 'react';
import DisplayCat from './DisplayCat';
import NextUpCats from './NextUpCats';
import UploadCatForm from './UploadCatForm';

const CenterContainer = () => {
    return(
      <div className="CenterContainer">
        <DisplayCat/>
        <NextUpCats />
        <UploadCatForm />
      </div>
    )
}


//
export default CenterContainer;
