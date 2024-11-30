import React from "react";
import './Navbar.css';
import { FaFacebookF, FaTwitter } from 'react-icons/fa'; // Import React Icons
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar" style={{ backgroundColor: '#96705b' }}>
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="logo">
          <img src={logo} alt="Notary Cafe Logo" className="logo-img" />
          <span className="logo-text">NOTARY CAFE</span>
        </div>

        {/* Action Buttons */}
        <div className="actions">
          <a href="#login" className="action-link">Log In</a>
          <a href="#register" className="action-button">Register</a>
          <div className="social-icons">
            {/* Interactive Social Media Icons */}
            <a href="#facebook" className="social-icon" aria-label="Facebook">
              <FaFacebookF size={20} />
            </a>
            <a href="#twitter" className="social-icon twitter" aria-label="Twitter">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Menu Links */}
      <div className="menu-container">
        <ul className="menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#find-notary">Find a Notary</a></li>
          <li><a href="#forums">Forums</a></li>
          <li><a href="#pricing">Plan & Pricing</a></li>
          <li><a href="#support">Support</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
