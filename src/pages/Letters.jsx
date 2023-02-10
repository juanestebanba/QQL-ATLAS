import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import CardsList from '../components/CardsList';
import '../styles/CardsList.scss';
import '../styles/Categories.scss';
import '../styles/Buttons.scss';

const Letters = () => {

  const navigate = useNavigate();

  const returnToHome = () => {
    navigate('/');
  };

	return (
    <div className="letters-main-container">
      <h3 onClick={returnToHome} className="home-back-button"> Back </h3>
      <h1 className="category-title">Letters</h1>
			<CardsList category="letters" />
		</div>
	);
}

export default Letters;