import React from "react";
import "../styles/Skills.css";
import reactLogo from "../assets/skills/react.svg";
import arduinoLogo from "../assets/skills/arduino.svg";
import cppLogo from "../assets/skills/cpp.svg";
import javascriptLogo from "../assets/skills/javascript.svg";
import pythonLogo from "../assets/skills/python.svg";
import htmlLogo from "../assets/skills/html.svg";
import cssLogo from "../assets/skills/css.svg";
import javaLogo from "../assets/skills/java.svg";

function Skills() {
  const skills = [
    {
      name: "C++",
      logo: cppLogo,
      proficiency: 70,
    },
    {
      name: "JavaScript",
      logo: javascriptLogo,
      proficiency: 65,
    },
    {
      name: "ReactJS",
      logo: reactLogo,
      proficiency: 70,
    },
    {
      name: "HTML",
      logo: htmlLogo,
      proficiency: 75,
    },
    {
      name: "CSS",
      logo: cssLogo,
      proficiency: 80,
    },
    {
      name: "Arduino",
      logo: arduinoLogo,
      proficiency: 70,
    },
    {
      name: "Python",
      logo: pythonLogo,
      proficiency: 60,
    },
    {
      name: "Java",
      logo: javaLogo,
      proficiency: 50,
    },
  ];

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
              <div className="skill-bar-container">
                <div
                  className="skill-bar"
                  style={{ width: `${skill.proficiency}%` }}
                >
                  <span className="skill-percentage">{skill.proficiency}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
