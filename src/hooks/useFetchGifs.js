//
// CUSTOM HOOK

import { useState, useEffect } from 'react';
import { HL01_GetFetchGifs } from '../helpers/HL01_GetFetchGifs';

// HOOK
export const useFetchGifs = (category) => {
  //
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  //
  useEffect(() => {
    //
    HL01_GetFetchGifs(category).then((xImgs) => {
      //
      setTimeout(() => {
        //
        setState({
          data: xImgs,
          loading: false,
        });
      }, 2000);
    });
    //
  }, [category]);

  //

  //
  return state; // retorna: data & loading
};
