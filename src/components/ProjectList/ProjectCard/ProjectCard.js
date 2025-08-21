import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, imageUrl, technologies, liveUrl, sourceUrl }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        {imageUrl && <img src={imageUrl} alt={title} />}
      </div>
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-technologies">
          {technologies && technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          )}
          {sourceUrl && (
            <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;