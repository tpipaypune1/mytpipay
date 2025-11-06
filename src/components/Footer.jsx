
import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';


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
            <p>Empowering businesses with innovative fintech solutions and cutting-edge banking solutions for the digital economy.</p>
            <div className="social-links">
  <a href="https://www.facebook.com/share/16r8NM7bYd" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
    <FaFacebookF />
  </a>
  <a href="https://x.com/Tpi_Pay?t=xGiNgPTy-zmqsDK_-sOObg&s=09" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
    <FaTwitter />
  </a>
  <a href="https://www.linkedin.com/company/tpipay-fintech-private-limited/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
    <FaLinkedinIn />
  </a>
  <a href="https://www.instagram.com/tpipay_?igsh=dm14bTgzd3oyaWts" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
    <FaInstagram />
  </a>
  <a href="https://youtube.com/@tpipaygroupofcompany?si=tB9ZVG79KVhHQrT3" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
    <FaYoutube />
  </a>
</div>

          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/" onClick={() => scrollToSection('hero')}>Home</a></li>
              <li><a href="/#about" onClick={() => scrollToSection('about')}>About Us</a></li>
              <li><a href="/#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
              <li><a href="privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms-and-conditions">Terms of Service</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>API Services</h4>
            <ul>
              <li><a href="/#services" onClick={() => scrollToSection('api-services')}>Payment Gateway</a></li>
              <li><a href="/#services" onClick={() => scrollToSection('api-services')}>UPI Collection Services</a></li>
              <li><a href="/#services" onClick={() => scrollToSection('api-services')}>Virtual Accounts</a></li>
              <li><a href="/#services" onClick={() => scrollToSection('api-services')}>SoundBox Solution</a></li>
              {/* <li><a href="/#services" onClick={() => scrollToSection('api-services')}>Upi</a></li> */}
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Software Products</h4>
            <ul>
              <li><a href="/#software-products" onClick={() => scrollToSection('software-products')}>Nidhi Software</a></li>
              <li><a href="/#software-products" onClick={() => scrollToSection('software-products')}>Microfinance</a></li>
              <li><a href="/#software-products" onClick={() => scrollToSection('software-products')}>School Management</a></li>
              <li><a href="/#software-products" onClick={() => scrollToSection('software-products')}>MLM Software</a></li>
              <li><a href="/#software-products" onClick={() => scrollToSection('software-products')}>Custom Solutions</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p>&copy; 2025 TpiPay. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="/privacy-policy">Privacy</a>
              <a href="/refund-policy">Refund</a>
              <a href="/cancellation-policy">Cancellation Policy</a>
              <a href="/cookie-policy">Cookies</a>
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
