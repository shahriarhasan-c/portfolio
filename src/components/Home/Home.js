import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="floating-element"></div>
      <div className="floating-element"></div>
      <div className="floating-element"></div>
      
      <div className="home-content">
        <h1>Welcome to My Portfolio</h1>
        <p>I'm a passionate developer creating amazing digital experiences.</p>
        
        <div className="home-cta">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-outline">Get In Touch</a>
        </div>
        
        <div className="home-intro">
          <h2>About Me</h2>
          <p>I'm a full-stack developer with a passion for creating beautiful, functional, and user-friendly applications. With expertise in modern web technologies, I bring ideas to life through clean code and thoughtful design.</p>
        </div>
      </div>
    </section>
  );
};

export default Home;