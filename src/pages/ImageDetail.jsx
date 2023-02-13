import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import CardsList from '../components/CardsList';
import CardDetail from '../components/CardDetail';
import BackButton from '../components/BackButton';
import '../styles/CardsList.scss';
import '../styles/Categories.scss';
import '../styles/Buttons.scss';

const ImageDetail = () => {

	return (
    <div className="individual-image-main-container">
      <BackButton />
			<CardDetail />
		</div>
	);
}

export default ImageDetail;