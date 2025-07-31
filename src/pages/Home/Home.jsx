import React from 'react';
import './Home.css';
import bgImage from '../../utils/images/bg1-Picsart-AiImageEnhancer-Picsart-AiImageEnhancer.jpg';

function Home() {
  return (
    <div className="home text-center text-light d-flex align-items-center justify-content-center" 
    style={{  height: '100vh',
      backgroundImage: ` url(${bgImage})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <div>
        <h1 className="display-4 fw-bold">Department of Computer Science & Engineering</h1>
        <p className="lead">Empowering Innovation & Excellence in Technology Education</p>
      </div>
    </div>
  );
}

export default Home;