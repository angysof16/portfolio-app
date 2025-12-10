import React from "react";
import "../styles/Skills.css";
import reactLogo from "../assets/skills/react.svg";
import arduinoLogo from "../assets/skills/arduino.svg";
import cppLogo from "../assets/skills/cpp.svg";
import javascriptLogo from "../assets/skills/javascript.svg";
import pythonLogo from "../assets/skills/python.svg";
import htmlLogo from "../assets/skills/html.svg";
import cssLogo from "../assets/skills/css.svg";
import ROSLogo from "../assets/skills/ros.svg";

function Skills() {
  const skills = [
    {
      name: "C++",
      logo: cppLogo,
      level: "Advanced",
      stars: 4,
    },
    {
      name: "Python",
      logo: pythonLogo,
      level: "Intermediate",
      stars: 3,
    },
    {
      name: "ROS2",
      logo: ROSLogo ,
      level: "Intermediate",
      stars: 3,
    },
    {
      name: "ReactJS",
      logo: reactLogo,
      level: "Intermediate",
      stars: 3,
    },
    {
      name: "JavaScript",
      logo: javascriptLogo,
      level: "Intermediate",
      stars: 3,
    },
    {
      name: "HTML",
      logo: htmlLogo,
      level: "Advanced",
      stars: 4,
    },
    {
      name: "CSS",
      logo: cssLogo,
      level: "Intermediate",
      stars: 3,
    },
    {
      name: "Arduino",
      logo: arduinoLogo,
      level: "Advanced",
      stars: 4,
    },
  ];

  const renderStars = (count) => {
    return (
      <div className="stars-container">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`star ${star <= count ? "filled" : ""}`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">
                <img src={skill.logo} alt={`${skill.name} logo`} />
              </div>
              <h3>{skill.name}</h3>
              <span className={`skill-level ${skill.level.toLowerCase()}`}>
                {skill.level}
              </span>
              {renderStars(skill.stars)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;