import React from 'react';
import '../styles/Footer.css';
import logoImage from '../assets/try.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={logoImage} alt="Logo" className="logo-img" />
          </div>
          <p>&copy; {new Date().getFullYear()} Sofia Guerra Jiménez. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;