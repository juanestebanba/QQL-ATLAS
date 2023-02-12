import React from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom'; 
import imagelist from '../images.json';
import '../styles/CardDetail.scss';

const CardDetail = () => {
  const navigate = useNavigate();
  const { slug } = useParams();

  const individualImage = imagelist.find(image => image.slug === slug);

//OJO; PASAR IMAGENES QQL DE PNG A WEBP
	return (
    <div className="individual-card-detail">
      <h3 className="individual-image-title">{individualImage.name}</h3>
      
      <div className="individual-card-flex-container">
      

      <img className="individual-image" src={individualImage.path} alt="image" />
      </div>
    </div>
	);
}

export default CardDetail;