import React from 'react';
import { Link } from'react-router-dom';
import '../styles/HomeInfo.scss';
import '../assets/letters.png';

const HomeInfo = () => {
	return (
    <div className="home-content-container">
      <div className="banner">
        <h1 className="banner-title">QQL Atlas</h1>
        <p className="banner-description">
          QQL is a collaborative experiment in generative art by Tyler Hobbs and Dandelion Wist Mané.
        </p>

        <p className="banner-description">
          This gallery is a tribute to these artists and their work, by curating and displaying cool   outputs in different visual categories of the QQL Algorithm.
        </p>
      </div>

      <div className="cards-container">
        <div className="col-lg-4">
          <Link to="/letters">
            <p>Letters</p>
            <img src='src/assets/letters.png' alt="letters"  />
          </Link>
        </div>

        <div className="col-lg-4">
          <Link to="/numbers">
            <p>Numbers</p>
            <img src='src/assets/numbers.png' alt="letters"  />
          </Link>
        </div>

        <div className="col-lg-4">
          <Link to="/objects">
            <p>Objects</p>
            <img src='src/assets/objects.png' alt="letters"  />
          </Link>
        </div>
      </div>
    
      <div className="more-categories">
        <p>More categories soon...</p>
      </div>
    </div>
	);
}

export default HomeInfo;