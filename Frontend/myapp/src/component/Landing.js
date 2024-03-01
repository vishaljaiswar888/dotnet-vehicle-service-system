import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Landing.css';

const Landing = () => {
  return (
    <div>
      <header className="header">
        <h1>Vehicle Service System</h1>
      </header>

      <div className="content">
        <div className="customer-section">
          <Link to="/signup2" className="button">Sign Up</Link>
        </div>

        <div className="admin-section">
          <Link to="/signin2" className="button">Sign In</Link>
        </div>
      </div>
      <img src="https://source.unsplash.com/random/1280x720/?mechanic" alt="Car Service" style={{ width: '100vw', height: '100vh', objectFit: 'cover' }} className="image"/>
    </div>
  );
}

export default Landing;
