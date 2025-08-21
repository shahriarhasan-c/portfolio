import React from 'react';
import Navigation from './Navigation/Navigation';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Portfolio</h1>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;