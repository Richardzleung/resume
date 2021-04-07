import React from 'react'
import ErrorImage from 'static/images/Error_404_SVG.svg';

const PageNotFound = () => {
  return (
    <img src={ErrorImage} alt='page not found!' style={{ zIndex: 1000 }}></img>
  );
};

export default PageNotFound;