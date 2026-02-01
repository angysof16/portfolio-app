import React, { useState } from "react";
import "../styles/Home.css";
import foto from "../assets/foto.png"

function Home() {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <section id="home" className="home-section">
      {showBanner && (
        <div className="update-banner">
          <div className="banner-content">
            <p>
              <strong>I've updated my portfolio!</strong> Visit my new, improved version of my portfolio. 
              <a href="https://angysof16.github.io/personalwebsite/" className="banner-link" target="_blank" rel="noopener noreferrer">
                View new portfolio →
              </a>
            </p>
            <button onClick={() => setShowBanner(false)} className="close-banner">×</button>
          </div>
        </div>
      )}

      <div className="container centered">
        <div className="pfp">
          <img src={foto} alt="Sofia Guerra Jiménez" />
        </div>
        
        <h1>
          Hello, I'm <span className="highlight">Sofia Guerra Jiménez</span>
        </h1>
        <h2>Systems Engineering Student</h2>
        <p>
          I'm a 20-year-old Systems and Mechatronics Engineering student
          passionate about software development, computer networking, and
          problem-solving. I'm currently exploring <b>IoT and Robotics!</b> 🤖
        </p> <br/>
        <p>
          Here you'll find my projects, experience, and more about me.
        </p>
        
        <div className="cta-buttons">
          <a href="#projects" className="btn primary-btn">
            View My Work
          </a>
          <a href="#socials" className="btn secondary-btn">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;