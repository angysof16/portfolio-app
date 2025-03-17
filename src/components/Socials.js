import React from 'react';
import '../styles/Socials.css';

function Socials() {
  return (
    <section id="socials" className="socials-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <h3>LinkedIn</h3>
              <a href="https://www.linkedin.com/in/angysof16/" target="_blank" rel="noopener noreferrer">linkedin.com/in/angysof16</a>
            </div>
            <div className="contact-item">
              <h3>GitHub</h3>
              <a href="https://github.com/angysof16" target="_blank" rel="noopener noreferrer">github.com/angysof16</a>
            </div>
            <div className="contact-item">
              <h3>Instagram</h3>
              <a href="https://instagram.com/angysof16" target="_blank" rel="noopener noreferrer">@angysof16</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Socials;
