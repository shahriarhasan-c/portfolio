import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["Angular", "React", "Javascript", "Html", "css", "TailwindCss", "typescript"]
    },
    {
      category: "Backend",
      skills: [".Net Core", "Mssql", "MySQL"]
    },
    {
      category: "Tools",
      skills: ["GIT", "github", "AZure Devops"]
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-content">
        <h2>My Skills</h2>
        <p>Technologies and tools I work with:</p>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.category}</h3>
              <div className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;