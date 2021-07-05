//
import React from 'react';

export const FC03GifGridItem = ({ id, title, url }) => {
  //
  // console.log(id, title, url);
  //
  return (
    <div className='card animate__animated animate__lightSpeedInLeft'>
      <img src={url} alt={title}></img>
      <p>{title}</p>
    </div>
  );
};

// export const FC03GifGridItem = (img) => {
// console.log(img);
