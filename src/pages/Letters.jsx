import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import CardsList from '../components/CardsList';
import BackButton from '../components/BackButton';
import '../styles/CardsList.scss';
import '../styles/Categories.scss';
import '../styles/Buttons.scss';

const Letters = () => {

	return (
    <div className="letters-main-container">
      <BackButton />
      <h1 className="category-title">Letters</h1>
			<CardsList category="letters" />
      <BackButton />
		</div>
	);
}

export default Letters;