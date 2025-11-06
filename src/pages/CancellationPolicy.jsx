import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CancellationPolicy = () => {
  return (
    <div>
      <Header />

      <div className="container py-5" style={{ paddingTop: '100px' }}>
        <h2 className="mb-4 fw-bold">🛑 Cancellation Policy</h2>

        <p className="mb-4">
          At <strong>TpiPay</strong>, we value your trust and strive to offer transparency and flexibility. This cancellation policy outlines when and how services or subscriptions may be cancelled.
        </p>

        <h3 className="mt-5 mb-3 fw-semibold">✅ 1. Service Cancellation Before Activation</h3>
        <p>
          You may request cancellation of a service (e.g., Sound Box Solution, UPI Collection, Static/Dynamic QR, etc.) **before it is activated** or delivered. In such cases:
        </p>
        <ul>
          <li>A cancellation request must be submitted within 48 hours of purchase.</li>
          <li>The service should not have been activated, installed, or consumed.</li>
          <li>Approval is subject to review by our support team.</li>
        </ul>

        <h3 className="mt-5 mb-3 fw-semibold">🚫 2. Cancellation After Activation</h3>
        <p>
          Once a service is activated or setup is initiated (e.g., software delivered, QR issued, device dispatched), it cannot be cancelled.
          Services like:
        </p>
        <ul>
          <li>🔊 Sound Box Solutions</li>
          <li>📥 UPI Intent Integration</li>
          <li>🖱️ POS/Micro ATM deployment</li>
          <li>💼 Custom/Financial/Banking Software</li>
        </ul>
        <p>are considered **consumed once provisioned** and are therefore non-cancellable.</p>

        <h3 className="mt-5 mb-3 fw-semibold">⚙️ 3. Custom Software Projects</h3>
        <p>
          Once development begins on any **customized software solution**, cancellation is not permitted. This includes:
        </p>
        <ul>
          <li>Nidhi Software</li>
          <li>Producer Company Software</li>
          <li>MLM, Credit Cooperative, School ERP, Real Estate CRM</li>
          <li>Any Tailored or Customized Tools</li>
        </ul>

        <h3 className="mt-5 mb-3 fw-semibold">📧 4. How to Request a Cancellation</h3>
        <p>
          To initiate a cancellation request, please email <strong>support@tpipay.ai</strong> with the subject line: 
          <em>“Cancellation Request - [Your Service Name]”</em>. Include:
        </p>
        <ul>
          <li>Transaction ID / Order ID</li>
          <li>Service Name</li>
          <li>Reason for cancellation</li>
        </ul>
        <p>
          Our support team will respond within 3 business days with a decision based on your service status.
        </p>

        <h3 className="mt-5 mb-3 fw-semibold">📌 5. Company Rights</h3>
        <p>
          TpiPay reserves the right to cancel any order or subscription if it is found to violate our usage policy,
          regulatory limitations, or due to technical unfeasibility. In such cases, a suitable resolution will be provided.
        </p>

        <p className="mt-4 fw-bold">Last updated: August 2025</p>
      </div>

      <Footer />
    </div>
  );
};

export default CancellationPolicy;
