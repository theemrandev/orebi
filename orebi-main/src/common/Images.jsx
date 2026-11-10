import React from 'react';

const Images = ({ imgSrc, imgAlt = 'Image', className = '', ...props }) => {
  return (
    <img src={imgSrc} alt={imgAlt} className={className} {...props} />
  );
};

export default Images;
