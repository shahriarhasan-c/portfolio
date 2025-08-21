import React, { useState } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileOpen(false);
  };

  return (
    <nav className={`navigation ${isMobileOpen ? 'mobile-open' : ''}`}>
      <button
        className={`mobile-menu-toggle ${isMobileOpen ? 'active' : ''}`}
        onClick={toggleMobileMenu}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul>
        <li><a href="#home" onClick={closeMobileMenu}>Home</a></li>
        <li><a href="#projects" onClick={closeMobileMenu}>Projects</a></li>
        <li><a href="#skills" onClick={closeMobileMenu}>Skills</a></li>
        <li><a href="#contact" onClick={closeMobileMenu}>Contact</a></li>
        <li><a href="#blog" onClick={closeMobileMenu}>Blog</a></li>
        <li><a href="#resume" onClick={closeMobileMenu}>Resume</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;