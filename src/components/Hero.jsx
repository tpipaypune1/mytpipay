import React, { useEffect, useState } from 'react';
import './Hero.css';

const slides = [
  {
    imageDesktop: '/images/ban4.jpeg',
    imageMobile: '/images/ban6.jpeg',
    heading: 'Digital Banking',
    subheading: 'Modern banking solutions for the digital age',
  },
  {
    imageDesktop: '/images/ban5.jpeg',
    imageMobile: '/images/mob1.jpeg',
    heading: 'Secure Transactions',
    subheading: 'Bank‑grade security for all payments',
  },
  {
    imageDesktop: '/images/ban7.jpeg',
    imageMobile: '/images/ban6.jpeg',
    heading: 'Fast Integration',
    subheading: 'Quick setup for seamless growth',
  },
  {
    imageDesktop: '/images/ban8.jpeg',
    imageMobile: '/images/mob1.jpeg',
    heading: 'Fast Integration',
    subheading: 'Quick setup for seamless growth',
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(intervalId);
  }, []);

  const { heading, subheading, imageMobile, imageDesktop } = slides[current];

  return (
    <section id="hero" className="hero">
      {/* Desktop background carousel */}
      {!isMobile && (
        <div className="hero-background">
          {slides.map((s, idx) => (
            <div
              key={idx}
              className={`hero-slide ${idx === current ? 'active' : ''}`}
              style={{ backgroundImage: `url(${s.imageDesktop})` }}
            />
          ))}
          <div className="hero-shapes">
            <div className="shape shape-1" />
            <div className="shape shape-2" />
            <div className="shape shape-3" />
          </div>
        </div>
      )}

      <div className="container">
        {/* Desktop content */}
        {!isMobile && (
          <div className="hero-content">
            <div className="hero-text fade-in visible">
              <h1>{heading}</h1>
              <p>{subheading}</p>
              <div className="hero-buttons">
                <button
                  className="btn btn-light-bg"
                  onClick={() => (window.location.href = 'https://banking.mytpipay.com/login')}
                >
                  Partner Login
                </button>
                <button
                  className="btn btn-light-bg"
                  onClick={() => (window.location.href = 'https://banking.mytpipay.com/sign-up')}
                >
                  Become Partner
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Mobile-only image + buttons */}
        {isMobile && (
          <div className="mobile-layout">
            <div className="mobile_image">
              <img src={imageMobile} alt="Hero" className="mobile-hero-img1" />
              <div className="slide_button">
              <button
                className="btn btn-light-bg"
                onClick={() => (window.location.href = 'https://banking.mytpipay.com/login')}
              >
                Partner Login
              </button>
              <button
                className="btn btn-light-bg"
                onClick={() => (window.location.href = 'https://banking.mytpipay.com/sign-up')}
              >
                Become Partner
              </button>
            </div>
            </div>
            
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;