import React from "react";
import "../styles/Experience.css";

function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Teaching Assistant - Networks and Telecommunications",
      company: "Pontificia Universidad Javeriana",
      duration: "2026 - Present",
      description:
        "Delivered academic support to undergraduate students in networking and telecommunications concepts and projects \n Assisted in troubleshooting network configuration and protocol analysis \n Guided students in the use of networking tools and technologies such as routing, switching, and network simulation with tools like GNS3 and Cisco Packet Tracer",
    },
    {
      id: 2,
      role: "Secretary",
      company: "IEEE Robotics and Automation Society Javeriana Student Chapter",
      duration: "2026 - Present",
      description:
        "Managed and organized meetings, official documents, and internal records of the chapter \n Coordinated meetings, followed up on action items, and facilitated communication among board members and general members \n Supported the planning and execution of academic events, workshops, and chapter activities \n Handled formal communications, reports, and documentation for IEEE at institutional levels",
    },
    {
      id: 3,
      role: "Customer Service Representative",
      company: "Teleperformance",
      duration: "Dec 2023 - Feb 2024",
      description:
        "Provided email and phone support for Stripe in English. \n Assisted customers with payment processing inquiries, meeting performance metrics. \nEnsured high customer satisfaction through problem-solving and personalized support. \nTroubleshot technical issues and guided users through resolutions.",
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experiences.map((exp) => (
            <div className="timeline-item" key={exp.id}>
              <div className="timeline-content">
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
                <p className="duration">{exp.duration}</p>
                {exp.description.split("\n").map((line, index) => (
                  <p key={index}>
                    <span className="bullet">•</span> {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
