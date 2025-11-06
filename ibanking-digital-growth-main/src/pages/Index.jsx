
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ApiServices from '../components/ApiServices';
import SoftwareProducts from '../components/SoftwareProducts';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Initialize scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all elements with animation classes
    const animateElements = document.querySelectorAll('.fade-in, .slide-up, .scale-in');
    animateElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <ApiServices />
        <SoftwareProducts />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
