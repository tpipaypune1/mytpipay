import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CookiePolicy = () => {
  return (
    <div>
      <Header />

      <div className="container py-5" style={{ paddingTop: '100px' }}>
        <h2 className="mb-4 fw-bold">🍪 Cookie Policy</h2>

        <p className="mb-4">
          This Cookie Policy explains how TpiPay uses cookies and similar technologies when you visit our website. 
          By continuing to browse or use our services, you agree to the use of cookies as described in this policy.
        </p>

        <h3 className="mt-5 mb-3 fw-semibold">📘 1. What Are Cookies?</h3>
        <p>
          Cookies are small text files stored on your device when you visit a website. They help us recognize your browser 
          and remember important information that improves your experience, such as your preferences and login status.
        </p>

        <h3 className="mt-5 mb-3 fw-semibold">🔍 2. How We Use Cookies</h3>
        <p>
          TpiPay uses cookies for the following purposes:
        </p>
        <p><strong>Website Functionality:</strong> To ensure all features and tools work properly across devices.</p>
        <p><strong>Preference Storage:</strong> To remember your settings and streamline repeat visits.</p>
        <p><strong>Usage Insights:</strong> To analyze user behavior and improve performance.</p>
        <p><strong>Advertising Relevance:</strong> To serve tailored content and promotional offers when applicable.</p>

        <h3 className="mt-5 mb-3 fw-semibold">📊 3. Types of Cookies We Use</h3>
        <p><strong>Essential Cookies:</strong> Required for basic functions like page navigation and secure login.</p>
        <p><strong>Performance Cookies:</strong> Collect anonymous data about how visitors use our website.</p>
        <p><strong>Functionality Cookies:</strong> Store user preferences and enhance personalized features.</p>
        <p><strong>Advertising Cookies:</strong> Used by third parties to deliver targeted ads based on browsing history.</p>

        <h3 className="mt-5 mb-3 fw-semibold">⚙️ 4. Managing Cookies</h3>
        <p>
          Most web browsers allow users to control or disable cookies through their settings. 
          You can block or delete cookies at any time, but this may impact your experience with some features of our website.
        </p>

        <h3 className="mt-5 mb-3 fw-semibold">🤝 5. Third-Party Cookies</h3>
        <p>
          We may use third-party tools or services (such as analytics providers or ad networks) that store their own cookies. 
          These cookies are governed by the respective privacy policies of those third parties.
        </p>

        <h3 className="mt-5 mb-3 fw-semibold">🔁 6. Changes to This Policy</h3>
        <p>
          TpiPay may update this Cookie Policy from time to time. Any changes will be published on this page with a revised date, 
          and your continued use of the site constitutes your agreement to those changes.
        </p>

        <p className="mt-4 fw-bold">📅 Last updated: July 2025</p>
      </div>

      <Footer />
    </div>
  );
};

export default CookiePolicy;
