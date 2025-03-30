import React from "react";
import "../styles/Projects.css";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Portafolio Personal",
      description:
        "Mi sitio web personal construido con React que muestra mis proyectos, habilidades y experiencia.",
      technologies: ["React", "JavaScript", "CSS"],
      link: "https://angysof16.github.io/portfolio-app/",
      github: "https://github.com/angysof16/portfolio-app",
    },
    {
      id: 2,
      title: "Alcoholímetro IoT",
      description: "Aplicación que implementa un sistema IoT que monitorea los niveles de alcohol en tiempo real utilizando un sensor MQ-3 implementando el protocolo MQTT y envía alertas a través de Telegram cuando se supera un umbral predefinido.",
      technologies: ["C", "Java", "IoT", "MQTT"],
      link: "https://www.youtube.com/watch?v=1chsSwvc5q8",
      github: "https://github.com/angysof16/AlcoholimetroIoT",
    },
    {
      id: 3,
      title: "Aplicación To Do List",
      description:
        "Aplicación para gestionar tareas con funcionalidades de agregar, actualizar y eliminar los ítems.",
      technologies: ["JavaScript", "HTML", "CSS"],
      link: "https://todolist-sofiaguerra.netlify.app/",
      github: "https://github.com/angysof16/M4U3ToDoListSofiaGuerra",
    },
    {
      id: 4,
      title: "Weather App",
      description:
        "Aplicación de clima que utiliza la API de OpenWeatherMap para mostrar condiciones meteorológicas actuales y pronósticos.",
      technologies: ["JavaScript", "HTML", "CSS", "API Integration"],
      link: "https://openweathermap-api-sofiaguerra.netlify.app/",
      github: "https://github.com/angysof16/Openweathermap-API",
    },
    {
      id: 5,
      title: "Ahorcados",
      description: "Aplicación del juego Ahorcados usando Typescript.",
      technologies: ["Typescript", "CSS", "HTML", "JavaScript"],
      link: "https://ahorcados-react-sofiaguerra.netlify.app/",
      github: "https://github.com/angysof16/Ahorcados-React-TS",
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn small-btn"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn small-btn"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
