import React from 'react';

import useGetImages from '../hooks/useGetImages';

const CardsList = () => {
  const images = useGetImages();
  
  return (
    <div>
      {images && images.length > 0 ? (
        images.map(image => (
          <div key={image.name}>
            <p>Name: {image.name}</p>
            <p>Path: {image.path}</p>
            <img src={image.path} alt="image" style={{ width: 40, height: 40 }} />

          </div>

        ))
      ) : (
        <p>No images found.</p>
      )}
    </div>
  );
};

export default CardsList;