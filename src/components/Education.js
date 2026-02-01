import React from "react";
import "../styles/Education.css";

function Education() {
  const education = [
    {
      id: 1,
      degree: "Mechatronics Engineering",
      institution: "Pontificia Universidad Javeriana",
      duration: "2026 - 2028",
      description: "Bachelor of Mechatronics Engineering",
    },
    {
      id: 2,
      degree: "Systems Engineering",
      institution: "Pontificia Universidad Javeriana",
      duration: "2023 - 2027",
      description: "Bachelor of Systems Engineering",
    },
    {
      id: 3,
      degree: "Inteligencia artificial Nivel Básico",
      institution: "UT Innova Digital",
      duration: "2025",
      description:
        "Completed an Artificial Intelligence Explorer Bootcamp covering foundational AI concepts, basic machine learning techniques, data analysis with Python, and problem-solving using real datasets.",
    },
    {
      id: 4,
      degree: "Diploma in Front-end Development with ReactJS",
      institution: "Campus FIMLM",
      duration: "2022",
      description:
        "Course dedicated to the design, development, and maintenance of the front-end of a website using ReactJS.",
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
