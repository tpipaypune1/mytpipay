
import React, { useEffect, useRef, useState } from 'react';
import './About.css';

const About = () => {
  const sectionRef = useRef();
  const [counters, setCounters] = useState({
    clients: 0,
    transactions: 0,
    products: 0,
    experience: 0
  });

  const targetValues = {
    clients: 100,
    transactions: 10,
    products: 15,
    experience: 5
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounters();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const startCounters = () => {
    Object.keys(targetValues).forEach((key) => {
      let start = 0;
      const end = targetValues[key];
      const increment = end / 50;
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCounters(prev => ({ ...prev, [key]: end }));
          clearInterval(timer);
        } else {
          setCounters(prev => ({ ...prev, [key]: Math.floor(start) }));
        }
      }, 50);
    });
  };

  return (
    <section id="about" className="about section-padding" ref={sectionRef}>
      <div className="container">
        <div className="about-content">
          <div className="about-text fade-in">
            <h2>About TpiPay</h2>
            <p className="lead">
              Leading the revolution in digital banking and fintech solutions, TpiPay is your trusted partner for comprehensive API services and custom software development.
            </p>
            <p>
              With years of experience in the fintech industry, we specialize in providing cutting-edge banking APIs (LAPI services) and developing customized software solutions that empower businesses to thrive in the digital economy.
            </p>
            <p>
              Our mission is to bridge the gap between traditional banking and modern technology, offering secure, scalable, and innovative solutions that meet the evolving needs of financial institutions, businesses, and entrepreneurs.
            </p>
            <div className="about-features">
              <div className="feature">
                <div className="feature-icon">🚀</div>
                <div className="feature-text">
                  <h4>Innovation First</h4>
                  <p>Cutting-edge technology solutions</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">🔒</div>
                <div className="feature-text">
                  <h4>Security Focused</h4>
                  <p>Enterprise-grade security standards</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">⚡</div>
                <div className="feature-text">
                  <h4>Fast Deployment</h4>
                  <p>Quick integration and setup</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-stats scale-in">
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">{counters.clients}+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">{counters.transactions}M+</div>
                <div className="stat-label">Transactions</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">{counters.products}+</div>
                <div className="stat-label">Software Products</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">{counters.experience}+</div>
                <div className="stat-label">Years Experience</div>
              </div>
            </div>
            
            <div className="trust-badges">
              <div className="badge">
                <div className="badge-icon">🏆</div>
                <span>Industry Leader</span>
              </div>
              <div className="badge">
                <div className="badge-icon">✅</div>
                <span>Certified Solutions</span>
              </div>
              <div className="badge">
                <div className="badge-icon">🌟</div>
                <span>5 Star Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
