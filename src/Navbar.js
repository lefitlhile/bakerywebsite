// src/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../src/logo.jpg';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo"><img src={logo} alt="Bakery Logo" className="logo-image" />Khumza's Bakery</Link>
        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <div className="navbar-item"><Link to="/" className="navbar-link">Home</Link></div>
          <div className="navbar-item"><Link to="/about" className="navbar-link">About Us</Link></div>
          <div className="navbar-item"><Link to="/menu" className="navbar-link">Menu</Link></div>
        </div>
        <div className="navbar-toggle" onClick={handleToggleClick}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
