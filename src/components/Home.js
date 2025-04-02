import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="container">
        <h1>
          Hello, I'm <span className="highlight">Sofia Guerra Jiménez</span>
        </h1>
        <h2>Systems Engineering Student</h2>
        <p>
          Welcome to my portfolio! I'm a 19-year-old Systems Engineering student
          passionate about software development, web technologies, and
          problem-solving. I'm currently exploring <b>IoT and Robotics!</b> 🤖
          <br></br>
          <br></br>
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
