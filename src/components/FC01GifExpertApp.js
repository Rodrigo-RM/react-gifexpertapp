// MAIN. GIF EXPERT APP

import React, { useState } from 'react';
//
import { FC02CategoryADD } from './FC02CategoryAdd';
import { FC03GifGrid } from './FC03GifGrid';
//
export const FC01GifExpertApp = () => {
  //

  const [categories, setCategories] = useState(['XFiles']);
  //
  return (
    <>
      <h2>GIF EXPERT APP</h2>
      <FC02CategoryADD setCategorias={setCategories} />
      <hr></hr>
      <ol>
        {categories.map((xCateg) => (
          <FC03GifGrid key={xCateg} category={xCateg} />
        ))}
      </ol>
    </>
  );
};

// Agrega Categorias 3 formas
// const fn01_HandleAdd = () => {
// 1 setCategories(['XFiles', ...categories]);
// 2  setCategories((xCat) => [...categories, 'XFiles']);
// };
// 3 Crear Componente
//
//
/* return <li key={xCateg}> {xCateg}</li>; */
