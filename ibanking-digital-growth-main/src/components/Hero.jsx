
import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className={`hero-text ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
            <h1>Empowering TpiPay for the Digital Economy</h1>
            <p>Seamless APIs and Custom Software for Your Fintech Growth</p>
            
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
                Get Started
              </button>
              <button className="btn btn-secondary" onClick={() => scrollToSection('api-services')}>
                View Services
              </button>
            </div>
          </div>

          <div className={`hero-features ${isVisible ? 'scale-in visible' : 'scale-in'}`}>
            <div className="feature-card">
              <div className="card-icon">💳</div>
              <div className="card-content">
                <h3>Digital Banking</h3>
                <p>Modern banking solutions for the digital age</p>
              </div>
            </div>
            <div className="feature-card">
              <div className="card-icon">🔐</div>
              <div className="card-content">
                <h3>Secure APIs</h3>
                <p>Bank-grade security for all transactions</p>
              </div>
            </div>
            <div className="feature-card">
              <div className="card-icon">⚡</div>
              <div className="card-content">
                <h3>Fast Integration</h3>
                <p>Quick setup and seamless integration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
