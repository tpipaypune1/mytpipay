import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsAndConditions = () => {
  return (
    <div>
      <Header />

      <div className="container py-5" style={{ paddingTop: '100px' }}>
        <h2 className="mb-4 fw-bold">📄 Terms and Conditions</h2>

        <p className="mb-4">
          Welcome to TpiPay. By accessing or using our website and services, you agree to comply with and be bound by the following Terms and Conditions. 
          Please read them carefully as they govern your use of our platform.
        </p>

        <h3 className="mt-5 mb-3 fw-semibold">🌐 1. Use of the Website</h3>
        <p>
          You agree to use the TpiPay website and services only for lawful purposes. You must not engage in any activity that:
        </p>
        <p>
          - Harms or infringes the rights of others<br/>
          - Disrupts the normal flow of website operations<br/>
          - Violates applicable laws or regulations
        </p>

        <h3 className="mt-5 mb-3 fw-semibold">🧠 2. Intellectual Property</h3>
        <p>
          All content, including but not limited to text, images, graphics, logos, software, and layout, is the intellectual property of TpiPay. 
          Unauthorized use, reproduction, or distribution is strictly prohibited and may result in legal action.
        </p>

        <h3 className="mt-5 mb-3 fw-semibold">👤 3. User Accounts</h3>
        <p>
          When you create an account, you are responsible for maintaining the confidentiality of your credentials. 
          You agree to notify us immediately of any unauthorized access or breach. All activities under your account are your responsibility.
        </p>

        <h3 className="mt-5 mb-3 fw-semibold">⚠️ 4. Limitation of Liability</h3>
        <p>
          TpiPay shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from your use of, or inability to use, 
          the website or its services, even if we were advised of the possibility of such damages.
        </p>

        <h3 className="mt-5 mb-3 fw-semibold">🔗 5. Third-Party Links</h3>
        <p>
          Our platform may contain links to external websites that are not operated by TpiPay. We do not control or take responsibility for the 
          content, policies, or practices of any third-party websites.
        </p>

        <h3 className="mt-5 mb-3 fw-semibold">⛔ 6. Termination</h3>
        <p>
          We reserve the right to suspend or terminate your access to the website or services at any time without notice if we determine that your conduct 
          violates these terms or poses a risk to our platform or users.
        </p>

        <h3 className="mt-5 mb-3 fw-semibold">🔁 7. Changes to the Terms</h3>
        <p>
          TpiPay may update these Terms and Conditions from time to time. All changes will be posted on this page. 
          Continued use of our services after any modifications implies your acceptance of the revised terms.
        </p>

        <p className="mt-4 fw-bold"> Last updated: July 2025</p>
      </div>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;
