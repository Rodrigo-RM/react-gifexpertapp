// INPUT CATEGORIAS

import React, { useState } from 'react';
import PropTypes from 'prop-types';
//

// FC-ADD CATEGORY
export function FC02CategoryADD({ setCategorias }) {
  // State
  const [inputValue, setInputValue] = useState('');
  //
  const f00_Submit = (e) => {
    e.preventDefault();
    // console.log('Submit OK');
    //
    if (inputValue.trim().length > 2) {
      setCategorias((xCat) => [inputValue, ...xCat]);
      setInputValue('');
    }
  };

  //
  const f01_InputChange = (e) => {
    // console.log(e.target.value);
    setInputValue(e.target.value);
  };
  //

  //RENDER
  return (
    <form onSubmit={f00_Submit}>
      <input type='text' value={inputValue} onChange={f01_InputChange} />
    </form>
  );
}

FC02CategoryADD.propTypes = {
  setCategorias: PropTypes.func.isRequired,
};
