import React from 'react';
import ProjectCard from './ProjectCard/ProjectCard';
import './ProjectList.css';

const ProjectList = () => {
  // Sample project data - this would typically come from props or state
  const projects = [
    {
      title: "Sample Project 1",
      description: "Description of the first project will go here.",
      imageUrl: "",
      technologies: ["React", "CSS", "JavaScript"],
      liveUrl: "",
      sourceUrl: ""
    },
    {
      title: "Sample Project 2",
      description: "Description of the second project will go here.",
      imageUrl: "",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "",
      sourceUrl: ""
    }
  ];

  return (
    <section className="project-list" id="projects">
      <div className="project-list-content">
        <h2>My Projects</h2>
        <p>Here are some of the projects I've worked on:</p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              technologies={project.technologies}
              liveUrl={project.liveUrl}
              sourceUrl={project.sourceUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectList;