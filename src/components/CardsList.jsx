// Read this to undestando context:
// https://beta.reactjs.org/learn/passing-data-deeply-with-context

import React from 'react';
import { Link } from'react-router-dom';
import useGetImages from '../hooks/useGetImages';
import '../styles/CardsList.scss';

const CardsList = ( {category}) => {
  const images = useGetImages();
  // Filter images based on category
  const filteredImages = images.filter(image => image.category === category);
  
  return (
    <div className="designs-cards-cointainer">
      <div className="designs-flex-container">
        {filteredImages && filteredImages.length > 0 ? (
          filteredImages.map(image => (
            <div className="design-card" key={image.name}>
              <h5 className="card-title"> {image.name}</h5>

                <Link to={`/letters/${image.slug}`} className="design-card-image" >
                  <img src={image.path} alt="image" />
                </Link>
            
            </div>
  
          ))
        ) : (
          <p>No images found.</p>
        )}
      </div>
    </div>
  );
};

export default CardsList;




//import React from 'react';
//import useGetImages from '../hooks/useGetImages';
//import '../styles/CardsList.scss';

//const CardsList = () => {
//  const images = useGetImages();
  
//  return (
//    <div className="designs-cards-cointainer">
//      <div className="designs-flex-container">
//        {images && images.length > 0 ? (
//          images.map(image => {
//            if (image.category === 'letters') {
//              return (
//                <div className="design-card" key={image.name}>
//                  <h5 className="card-title"> {image.name}</h5>
//                  <div className="design-card-image" >
//                    <img src={image.path} alt="image" />
//                  </div>
//                </div>
//              );
//            } else {
//              return (
//                <div className="design-card" key={image.name}>
//                  <h5 className="card-title"> {image.name}</h5>
//                  <div className="design-card-image" >
//                    <img src={image.path} alt="image" />
//                  </div>
//                </div>
//              );
//            }
//          })
//        ) : (
//          <div className="design-card" key={image.name}>
//            <h5 className="card-title"> {image.name}</h5>
//            <div className="design-card-image" >
//              <img src={image.path} alt="image" />
//              </div>
//            </div>
//          </div>
//        )}
//      </div>
//    </div>
//  );
//};
//
//export default CardsList;
