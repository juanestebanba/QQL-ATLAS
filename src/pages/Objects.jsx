import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import CardsList from '../components/CardsList';
import BackButton from '../components/BackButton';
import '../styles/CardsList.scss';
import '../styles/Categories.scss';
import '../styles/Buttons.scss';

const Objects = () => {

	return (
    <div className="objects-main-container">
      <BackButton />
      <h1 className="category-title">Objects</h1>
			<CardsList category="objects" />
      <BackButton />
		</div>
	);
}

export default Objects;