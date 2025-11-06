import React, { useEffect, useRef } from 'react';
import './ApiServices.css';
import { FaFingerprint } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const ApiServices = () => {
  const sectionRef = useRef();

  const services = [
    
    
{
  title: 'Sound Box Solution',
  icon: '🔊',
  description: 'Real-time payment alerts with sound box integration for merchants'
},
    {
    title: 'UPI Collection Solution',
    icon: '💸',
    description: 'Seamless UPI payment collection with instant confirmation and secure tracking for merchants'
  },
  {
    title: 'UPI Intent Solution',
    icon: '📥',
    description: 'Enable seamless UPI payments via app intent with faster checkout and direct payment initiation for customers'
  },
  {
    title: 'Static QR Solution',
    icon: '🧾',
    description: 'Accept UPI payments using static QR codes for hassle-free transactions without the need for real-time integration'
  },
  {
    title: 'Dynamic QR Solution',
    icon: '🔁',
    description: 'Generate real-time dynamic QR codes for each transaction ensuring better tracking and payment reconciliation'
  },
  {
    title: 'QR Standee',
    icon: '🪧', // Represents a stand/board
    description: 'Branded QR code standees placed at merchant counters for easy scan and pay experience'
  },
  {
    title: 'POS Machine Solution',
    icon: '🖱️', // Represents a device interface (you can change it to a POS SVG if needed)
    description: 'Card swipe and digital payment-enabled POS machines for secure in-store transactions'
  },
  {
    title: 'Micro ATM Solution',
    icon: '🏧',
    description: 'Empower retailers to offer cash withdrawal and balance inquiry services using secure Micro ATM devices'
  }
,
{
  title: 'UPI Collection Solution',
  icon: '📲',
  description: 'Seamless UPI payment collection with instant confirmation and secure tracking for merchants'
}
,
    {
  title: 'Utility Services',
  icon: '🧾',
  description: 'Bill payments, recharges, and other essential utility services in one platform'
},
{
  title: 'Prepaid Card',
  icon: '💳',
  description: 'Custom-branded prepaid cards for seamless digital transactions and payouts'
},
{
  title: 'Financial & Other Software',
  icon: '💼',
  description: 'All types of financial, banking, and custom software solutions for businesses'
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
          <h2>Banking Services</h2>
          <p>Comprehensive fintech Solutions to power your digital banking solutions</p>
        </div>
         <Link to={`/registerservice`} style={{textDecoration:`none`}}>
        <div className="services-grid grid grid-3">
          {services.map((service, index) => (
            <div key={index} className="service-card" style={{ animationDelay: `${index * 0.1}s` }}>
                              <div className="card-icon">
                 
                    <span style={{ cursor: 'pointer' }}>{service.icon}</span>
                 
                </div>  
              <div className="card-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <div className="card-overlay"></div>
            </div>
             
          ))}
        </div>
       </Link>
      </div>
      
    </section>
  );
};

export default ApiServices;