import React, { useState } from 'react';
import resumeData from '../../data/resumeData';
import './InteractiveResume.css';

const InteractiveResume = () => {
  const [expandedExperience, setExpandedExperience] = useState(new Set());
  const [expandedEducation, setExpandedEducation] = useState(new Set());
  const [activeTab, setActiveTab] = useState('experience');
  const [skillFilter, setSkillFilter] = useState('all');

  const toggleExperience = (id) => {
    const newExpanded = new Set(expandedExperience);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedExperience(newExpanded);
  };

  const toggleEducation = (id) => {
    const newExpanded = new Set(expandedEducation);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedEducation(newExpanded);
  };

  const getFilteredSkills = () => {
    if (skillFilter === 'all') {
      return resumeData.skills.technical;
    }
    return resumeData.skills.technical.filter(skill =>
      skill.category.toLowerCase() === skillFilter.toLowerCase()
    );
  };

  const skillCategories = [...new Set(resumeData.skills.technical.map(skill => skill.category))];

  return (
    <section className="interactive-resume" id="resume">
      <div className="resume-content">
        <h2>Interactive Resume</h2>
        <p>Explore my professional journey and qualifications:</p>
        
        {/* Tab Navigation */}
        <div className="resume-tabs">
          <button
            className={`tab-button ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            Experience
          </button>
          <button
            className={`tab-button ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            Education
          </button>
          <button
            className={`tab-button ${activeTab === 'skills' ? 'active' : ''}`}
            onClick={() => setActiveTab('skills')}
          >
            Skills
          </button>
          <button
            className={`tab-button ${activeTab === 'certifications' ? 'active' : ''}`}
            onClick={() => setActiveTab('certifications')}
          >
            Certifications
          </button>
        </div>

        {/* Experience Tab */}
        {activeTab === 'experience' && (
          <div className="tab-content">
            <div className="timeline">
              {resumeData.workExperience.map((exp, index) => (
                <div key={exp.id} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div
                      className="timeline-header"
                      onClick={() => toggleExperience(exp.id)}
                    >
                      <h4>{exp.position}</h4>
                      <h5>{exp.company}</h5>
                      <div className="timeline-meta">
                        <span className="duration">{exp.duration}</span>
                        <span className="location">{exp.location}</span>
                        <span className="type">{exp.type}</span>
                      </div>
                      <button className="expand-button">
                        {expandedExperience.has(exp.id) ? '−' : '+'}
                      </button>
                    </div>
                    
                    {expandedExperience.has(exp.id) && (
                      <div className="timeline-details">
                        <p className="description">{exp.description}</p>
                        
                        <div className="achievements">
                          <h6>Key Achievements:</h6>
                          <ul>
                            {exp.achievements.map((achievement, idx) => (
                              <li key={idx}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="technologies">
                          <h6>Technologies Used:</h6>
                          <div className="tech-tags">
                            {exp.technologies.map((tech, idx) => (
                              <span key={idx} className="tech-tag">{tech}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education Tab */}
        {activeTab === 'education' && (
          <div className="tab-content">
            <div className="timeline">
              {resumeData.education.map((edu, index) => (
                <div key={edu.id} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div
                      className="timeline-header"
                      onClick={() => toggleEducation(edu.id)}
                    >
                      <h4>{edu.degree}</h4>
                      <h5>{edu.institution}</h5>
                      <div className="timeline-meta">
                        <span className="duration">{edu.duration}</span>
                        <span className="location">{edu.location}</span>
                        {edu.gpa && <span className="gpa">GPA: {edu.gpa}</span>}
                      </div>
                      <button className="expand-button">
                        {expandedEducation.has(edu.id) ? '−' : '+'}
                      </button>
                    </div>
                    
                    {expandedEducation.has(edu.id) && (
                      <div className="timeline-details">
                        <p className="description">{edu.description}</p>
                        
                        <div className="coursework">
                          <h6>Relevant Coursework:</h6>
                          <div className="course-tags">
                            {edu.coursework.map((course, idx) => (
                              <span key={idx} className="course-tag">{course}</span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="achievements">
                          <h6>Achievements:</h6>
                          <ul>
                            {edu.achievements.map((achievement, idx) => (
                              <li key={idx}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills Tab */}
        {activeTab === 'skills' && (
          <div className="tab-content">
            <div className="skills-section">
              <div className="skill-filters">
                <button
                  className={`filter-button ${skillFilter === 'all' ? 'active' : ''}`}
                  onClick={() => setSkillFilter('all')}
                >
                  All
                </button>
                {skillCategories.map(category => (
                  <button
                    key={category}
                    className={`filter-button ${skillFilter === category ? 'active' : ''}`}
                    onClick={() => setSkillFilter(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              <div className="skills-grid">
                {getFilteredSkills().map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <span className="skill-category">{skill.category}</span>
                  </div>
                ))}
              </div>
              
              <div className="soft-skills">
                <h4>Soft Skills</h4>
                <div className="soft-skills-grid">
                  {resumeData.skills.soft.map((skill, index) => (
                    <span key={index} className="soft-skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Certifications Tab */}
        {activeTab === 'certifications' && (
          <div className="tab-content">
            <div className="certifications-grid">
              {resumeData.certifications.map((cert, index) => (
                <div key={cert.id} className="certification-card">
                  <h4>{cert.name}</h4>
                  <p className="issuer">{cert.issuer}</p>
                  <p className="date">{cert.date}</p>
                  <p className="credential">Credential ID: {cert.credentialId}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default InteractiveResume;