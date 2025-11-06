import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <div>
      <Header />

      <div className="container py-5" style={{ paddingTop: '100px' }}>
        <h2 className="mb-4 fw-bold">🔐 Privacy Policy</h2>
        <p className="mb-4">
          At TpiPay, we are committed to protecting your privacy. This Privacy Policy outlines the types
          of personal information we collect, how we use it, and the steps we take to ensure your data is safe.
          By using our services, you agree to the terms outlined in this policy.
        </p>

        <h3 className="mt-5 mb-3 fw-semibold">📋 1. Information We Collect</h3>
        <p><strong>Personal Information:</strong> Your name, contact details, address, government-issued ID (e.g., Aadhaar), and banking information provided during account setup or service usage.</p>
        <p><strong>Technical Information:</strong> Device details, IP address, browser type, and operating system collected when you access our services.</p>
        <p><strong>Usage Data:</strong> Information about how you interact with our platform including login time, feature usage, and transaction history.</p>

        <h3 className="mt-5 mb-3 fw-semibold">⚙️ 2. How We Use Your Information</h3>
        <p><strong>Account Management:</strong> To register users, process transactions, and provide account access.</p>
        <p><strong>Personalization:</strong> To enhance the user experience by customizing content and services.</p>
        <p><strong>Communication:</strong> To send important updates, promotional offers, and support responses.</p>
        <p><strong>Legal Compliance:</strong> To meet regulatory requirements and protect against fraud or unauthorized use.</p>

        <h3 className="mt-5 mb-3 fw-semibold">🍪 3. Cookies</h3>
        <p><strong>Cookies and Tracking:</strong> We use cookies to improve performance, remember your preferences, and track usage analytics.</p>
        <p><strong>Managing Cookies:</strong> You can manage or disable cookies via your browser settings. However, this may impact certain features of our site.</p>

        <h3 className="mt-5 mb-3 fw-semibold">🛡️ 4. Data Security</h3>
        <p><strong>Security Measures:</strong> We use SSL encryption, secure server infrastructure, and access controls to protect your data.</p>
        <p><strong>Confidentiality:</strong> Employees and contractors handling data are bound by strict confidentiality agreements.</p>
        <p><strong>Limitations:</strong> While we take necessary precautions, no system is entirely immune to security breaches. Users are advised to maintain strong passwords and security practices.</p>

        <h3 className="mt-5 mb-3 fw-semibold">🤝 5. Third-Party Services</h3>
        <p><strong>Service Providers:</strong> We may share limited data with payment gateways, cloud services, and analytic providers for platform functionality.</p>
        <p><strong>Independent Policies:</strong> These providers have their own privacy policies. We encourage reviewing their terms before interacting with them through our services.</p>

        <h3 className="mt-5 mb-3 fw-semibold">🧾 6. Your Rights</h3>
        <p><strong>Access:</strong> You can request a copy of the personal data we hold about you.</p>
        <p><strong>Correction:</strong> You have the right to update or correct inaccurate data.</p>
        <p><strong>Deletion:</strong> You may request deletion of your data, subject to regulatory or legal constraints.</p>
        <p><strong>Consent Withdrawal:</strong> You may revoke your consent for processing your data at any time.</p>

        <h3 className="mt-5 mb-3 fw-semibold">🔁 7. Changes to This Policy</h3>
        <p><strong>Updates:</strong> We may revise this policy from time to time. All updates will be posted on this page with a revised date.</p>
        <p><strong>Notification:</strong> Significant changes will be communicated via email or on-platform notices where applicable.</p>

        <p className="mt-4 fw-bold"> Last updated: July 2025</p>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
