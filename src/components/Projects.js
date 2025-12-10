import React from "react";
import "../styles/Projects.css";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Personal 90s/00s Style Website Portfolio",
      description:
        "My personal 90s/00s inspired website built with HTML/CSS that showcases a creative design.",
      technologies: ["React", "JavaScript", "CSS"],
      link: "https://angysof16.github.io/personalwebsite/",
      github: "https://github.com/angysof16/personalwebsite",
    },
    {
      id: 2,
      title: "RB-Y1 Robot Implementation",
      description:
        "ROS 2 Jazzy implementation of the Rainbow Robotics RB-Y1 humanoid robot with Gazebo simulation and control capabilities.",
      technologies: ["ROS2", "Gazebo", "ROS2 Controllers"],
      github: "https://github.com/angysof16/rby1_robot_implementation",
    },
    {
      id: 3,
      title: "IoT Breathalyzer",
      description: "Application that implements an IoT system to monitor alcohol levels in real time using an MQ-3 sensor. It uses the MQTT protocol and sends alerts via Telegram when a predefined threshold is exceeded.",
      technologies: ["C", "Java", "IoT", "MQTT"],
      link: "https://www.youtube.com/watch?v=1chsSwvc5q8",
      github: "https://github.com/angysof16/AlcoholimetroIoT",
    },
    {
      id: 4,
      title: "To Do List Application",
      description:
        "Task management application with functionalities to add, update, and delete items.",
      technologies: ["JavaScript", "HTML", "CSS"],
      link: "https://todolist-sofiaguerra.netlify.app/",
      github: "https://github.com/angysof16/M4U3ToDoListSofiaGuerra",
    },
    {
      id: 5,
      title: "Weather App",
      description:
        "Weather application that uses the OpenWeatherMap API to display current weather conditions and forecasts.",
      technologies: ["JavaScript", "HTML", "CSS", "API Integration"],
      link: "https://openweathermap-api-sofiaguerra.netlify.app/",
      github: "https://github.com/angysof16/Openweathermap-API",
    },
    {
      id: 6,
      title: "Hangman",
      description: "Hangman game application using TypeScript.",
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
