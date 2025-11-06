
import React, { useEffect, useRef } from 'react';
import './ApiServices.css';

const ApiServices = () => {
  const sectionRef = useRef();

  const services = [
    {
      title: 'Payin / Payout',
      icon: '💰',
      description: 'Seamless money collection and disbursement solutions with real-time processing'
    },
    {
      title: 'Payment Gateway',
      icon: '🏦',
      description: 'Secure payment processing with multiple payment methods and instant settlements'
    },
    {
      title: 'Virtual Accounts',
      icon: '🏧',
      description: 'Dynamic virtual account creation for automated payment reconciliation'
    },
    {
      title: 'UPI Collections',
      icon: '📱',
      description: 'Unified Payment Interface integration for instant digital payments'
    },
    {
      title: 'UPI Payout',
      icon: '💸',
      description: 'Instant money transfer through UPI with advanced security features'
    },
    {
      title: 'AEPS',
      icon: '🏧',
      description: 'Aadhaar Enabled Payment System for biometric-based transactions'
    },
    {
      title: 'Recharge',
      icon: '📶',
      description: 'Mobile, DTH, and utility recharge services with instant processing'
    },
    {
      title: 'Bill Payment',
      icon: '🧾',
      description: 'Comprehensive bill payment solutions for utilities and services'
    },
    {
      title: 'DMT (Money Transfer)',
      icon: '🔄',
      description: 'Domestic Money Transfer services with competitive rates and fast processing'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current.querySelectorAll('.service-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="api-services" className="api-services section-padding" ref={sectionRef}>
      <div className="container">
        <div className="section-header text-center fade-in">
          <h2>Banking API (LAPI) Services</h2>
          <p>Comprehensive fintech APIs to power your digital banking solutions</p>
        </div>
        
        <div className="services-grid grid grid-3">
          {services.map((service, index) => (
            <div key={index} className="service-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="card-icon">
                <span>{service.icon}</span>
              </div>
              <div className="card-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <div className="card-overlay"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApiServices;
