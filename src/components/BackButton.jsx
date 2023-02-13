import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Buttons.scss';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <h3 onClick={() => navigate(-1)} className="back-button"> Back </h3>
  );
};

export default BackButton;
