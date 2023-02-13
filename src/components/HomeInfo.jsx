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
          <a href="https://qql.art/" className="external-link" target="_blank">QQL</a> is a collaborative experiment in generative art by Tyler Hobbs and Dandelion Wist.
        </p>

        <br></br>

        <p className="banner-description">
          This gallery is a tribute to their work, curating and showcasing the algorithm’s captivating outputs into different visual categories. Explore the QQL Atlas:
        </p>
      </div>

      <div className="cards-container">
        <div className="col-lg-4">
          <Link to="/letters">
            <p>Letters</p>
            <img src='src/assets/letters/letter_U_optimized.png' alt="Letters"  />
          </Link>
        </div>

        <div className="col-lg-4">
          <Link to="/numbers">
            <p>Numbers</p>
            <img src='src/assets/numbers/number_7_optimized.png' alt="Numbers"  />
          </Link>
        </div>

        <div className="col-lg-4">
          <Link to="/objects">
            <p>Objects</p>
            <img src='src/assets/objects/object_wave_optimized.png' alt="Objects and Landscapes"  />
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