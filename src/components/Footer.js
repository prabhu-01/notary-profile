import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import './Footer.css';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <div className='logoline'>
                        <img src={logo} alt="Notary Cafe Logo" className="logo-img-foot" />
                        <span className='FooterLogotext'>NOTARY CAFE</span>
                    </div>
                    <p>Connecting you with professional notaries in the Bay Area.</p>
                </div>
                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-social">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                        <a href="#" aria-label="Twitter"><FaTwitter /></a>
                        <a href="#" aria-label="Instagram"><FaInstagram /></a>
                        <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Notary Cafe. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
