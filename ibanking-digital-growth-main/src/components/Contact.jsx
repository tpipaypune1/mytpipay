
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="contact section-padding">
      <div className="container">
        <div className="section-header text-center fade-in">
          <h2>Get In Touch</h2>
          <p>Ready to transform your business with our fintech solutions?</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info slide-up">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <div className="info-text">
                <h4>Office Address</h4>
                <p>123 Fintech Hub, Business District<br />Mumbai, Maharashtra 400001</p>
              </div>
            </div>
            
            <div className="info-card">
              <div className="info-icon">📞</div>
              <div className="info-text">
                <h4>Phone Number</h4>
                <p>+91 98765 43210<br />+91 87654 32109</p>
              </div>
            </div>
            
            <div className="info-card">
              <div className="info-icon">✉️</div>
              <div className="info-text">
                <h4>Email Address</h4>
                <p>info@TpiPay.com<br />support@tpipay.ai</p>
              </div>
            </div>
            
            <div className="info-card">
              <div className="info-icon">🕒</div>
              <div className="info-text">
                <h4>Working Hours</h4>
                <p>Mon - Fri: 9:00 AM - 6:00 PM<br />Sat: 9:00 AM - 1:00 PM</p>
              </div>
            </div>
            
            <div className="office-image">
              <div className="image-placeholder">
                <div className="placeholder-icon">🏢</div>
                <p>Our Modern Office</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container scale-in">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="api-services">Banking API Services</option>
                    <option value="software-products">Software Products</option>
                    <option value="custom-development">Custom Development</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements..."
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className={`btn btn-primary submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitStatus && (
                <div className={`submit-status ${submitStatus}`}>
                  {submitStatus === 'success' ? 
                    '✅ Message sent successfully! We\'ll get back to you soon.' :
                    '❌ Something went wrong. Please try again.'
                  }
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
