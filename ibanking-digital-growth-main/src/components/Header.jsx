
import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo" onClick={() => scrollToSection('hero')}>
            <img src="/lovable-uploads/798e8988-5c97-4bc8-9904-a1d3af4b00d8.png" alt="TpiPay Logo" />
            <span>TpiPay</span>
          </div>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li><a href="#" onClick={() => scrollToSection('hero')}>Home</a></li>
              
              <li className="dropdown">
                <a href="#" onClick={() => toggleDropdown('services')}>
                  Services <span className="dropdown-arrow">▼</span>
                </a>
                {activeDropdown === 'services' && (
                  <ul className="dropdown-menu">
                    <li><a href="#" onClick={() => scrollToSection('api-services')}>Banking APIs</a></li>
                    <li><a href="#" onClick={() => scrollToSection('api-services')}>Payment Gateway</a></li>
                    <li><a href="#" onClick={() => scrollToSection('api-services')}>UPI Services</a></li>
                    <li><a href="#" onClick={() => scrollToSection('api-services')}>AEPS</a></li>
                  </ul>
                )}
              </li>

              <li className="dropdown">
                <a href="#" onClick={() => toggleDropdown('products')}>
                  Software Products <span className="dropdown-arrow">▼</span>
                </a>
                {activeDropdown === 'products' && (
                  <ul className="dropdown-menu">
                    <li><a href="#" onClick={() => scrollToSection('software-products')}>Nidhi Software</a></li>
                    <li><a href="#" onClick={() => scrollToSection('software-products')}>Microfinance</a></li>
                    <li><a href="#" onClick={() => scrollToSection('software-products')}>School Management</a></li>
                    <li><a href="#" onClick={() => scrollToSection('software-products')}>MLM Software</a></li>
                  </ul>
                )}
              </li>

              <li><a href="#" onClick={() => scrollToSection('about')}>About Us</a></li>
              <li><a href="#" onClick={() => scrollToSection('contact')}>Contact</a></li>
            </ul>
          </nav>

          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
