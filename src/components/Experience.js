import React from "react";
import "../styles/Experience.css";

function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Customer Service Representative",
      company: "Teleperformance",
      duration: "Dec 2023 - Jan 2024",
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
