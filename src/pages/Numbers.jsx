import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import CardsList from '../components/CardsList';
import BackButton from '../components/BackButton';
import '../styles/CardsList.scss';
import '../styles/Categories.scss';
import '../styles/Buttons.scss';

const Numbers = () => {

	return (
    <div className="numbers-main-container">
      <BackButton />
      <h1 className="category-title">Numbers</h1>
			<CardsList category="numbers" />
      <BackButton />
		</div>
	);
}

export default Numbers;