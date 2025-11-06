
import React from 'react';
import './Footer.css';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo" onClick={scrollToTop}>
              <img src="/lovable-uploads/798e8988-5c97-4bc8-9904-a1d3af4b00d8.png" alt="TpiPay Logo" />
              <span>TpiPay</span>
            </div>
            <p>Empowering businesses with innovative fintech solutions and cutting-edge banking APIs for the digital economy.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="LinkedIn">💼</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="YouTube">📺</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#" onClick={() => scrollToSection('hero')}>Home</a></li>
              <li><a href="#" onClick={() => scrollToSection('about')}>About Us</a></li>
              <li><a href="#" onClick={() => scrollToSection('contact')}>Contact</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>API Services</h4>
            <ul>
              <li><a href="#" onClick={() => scrollToSection('api-services')}>Payment Gateway</a></li>
              <li><a href="#" onClick={() => scrollToSection('api-services')}>UPI Services</a></li>
              <li><a href="#" onClick={() => scrollToSection('api-services')}>Virtual Accounts</a></li>
              <li><a href="#" onClick={() => scrollToSection('api-services')}>AEPS</a></li>
              <li><a href="#" onClick={() => scrollToSection('api-services')}>DMT</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Software Products</h4>
            <ul>
              <li><a href="#" onClick={() => scrollToSection('software-products')}>Nidhi Software</a></li>
              <li><a href="#" onClick={() => scrollToSection('software-products')}>Microfinance</a></li>
              <li><a href="#" onClick={() => scrollToSection('software-products')}>School Management</a></li>
              <li><a href="#" onClick={() => scrollToSection('software-products')}>MLM Software</a></li>
              <li><a href="#" onClick={() => scrollToSection('software-products')}>Custom Solutions</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p>&copy; 2024 TpiPay. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </div>
      
      <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
        ⬆️
      </button>
    </footer>
  );
};

export default Footer;
