import React from "react";
import "../styles/Education.css";

function Education() {
  const education = [
    {
      id: 1,
      degree: "Ingeniería de Sistemas",
      institution: "Pontificia Universidad Javeriana",
      duration: "2023 - 2027",
      description: "Bachelor of Systems Engineering",
    },
    {
      id: 2,
      degree: "Diplomado en Desarrollo Front-end con ReactJS",
      institution: "Campus FIMLM",
      duration: "2022",
      description:
        "Curso dedicado al diseño, desarrollo, y mantenimiento del Front-end de una página Web empleando ReactJS",
    },
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-list">
          {education.map((edu) => (
            <div className="education-item" key={edu.id}>
              <h3>{edu.degree}</h3>
              <h4>{edu.institution}</h4>
              <p className="duration">{edu.duration}</p>
              <p>{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
