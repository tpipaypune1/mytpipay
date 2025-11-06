
import React, { useEffect, useRef } from 'react';
import './SoftwareProducts.css';

const SoftwareProducts = () => {
  const sectionRef = useRef();

  const products = [
    {
      title: 'Nidhi Software',
      icon: '🏛️',
      description: 'Complete Nidhi company management system with member management and loan processing'
    },
    {
      title: 'Producer Software',
      icon: '🌾',
      description: 'Agricultural producer company management with inventory and supply chain features'
    },
    {
      title: 'Microfinance Software',
      icon: '💼',
      description: 'Comprehensive microfinance management with loan tracking and collections'
    },
    {
      title: 'Recharge Portal',
      icon: '🔌',
      description: 'Multi-operator recharge portal with real-time API integration and reporting'
    },
    {
      title: 'Shopping Portal',
      icon: '🛒',
      description: 'Full-featured e-commerce platform with payment gateway integration'
    },
    {
      title: 'RD/FD Software',
      icon: '💎',
      description: 'Recurring and Fixed Deposit management system with automated calculations'
    },
    {
      title: 'School Management',
      icon: '🎓',
      description: 'Complete school management system with student, staff, and academic management'
    },
    {
      title: 'Real Estate Software',
      icon: '🏠',
      description: 'Property management and real estate CRM with lead tracking and sales pipeline'
    },
    {
      title: 'Credit Cooperative Software',
      icon: '🤝',
      description: 'Credit cooperative society management with member services and loan processing'
    },
    {
      title: 'MLM Software',
      icon: '🔗',
      description: 'Multi-level marketing software with commission tracking and genealogy management'
    },
    {
      title: 'Customised Software Solutions',
      icon: '⚙️',
      description: 'Tailored software solutions designed specifically for your business requirements'
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

    const cards = sectionRef.current.querySelectorAll('.product-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="software-products" className="software-products section-padding" ref={sectionRef}>
      <div className="container">
        <div className="section-header text-center fade-in">
          <h2>Software Products</h2>
          <p>Innovative software solutions tailored for diverse business needs</p>
        </div>
        
        <div className="products-grid grid grid-4">
          {products.map((product, index) => (
            <div key={index} className="product-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="card-front">
                <div className="card-icon">
                  <span>{product.icon}</span>
                </div>
                <h3>{product.title}</h3>
              </div>
              <div className="card-back">
                <div className="card-icon">
                  <span>{product.icon}</span>
                </div>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                {/* <button className="btn btn-primary">Learn More</button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwareProducts;
