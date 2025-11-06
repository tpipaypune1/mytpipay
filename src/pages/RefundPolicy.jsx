import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RefundPolicy = () => {
  return (
    <div>
      <Header />

      <div className="container py-5" style={{ paddingTop: '100px' }}>
        <h2 className="mb-4 fw-bold">💸 Refund Policy</h2>

        <p className="mb-4">
          At TpiPay, we strive to provide the best possible service to our customers. If you're not entirely satisfied with your 
          purchase or subscription, we’re here to help with a clear and fair refund process.
        </p>

        <h3 className="mt-5 mb-3 fw-semibold">✅ 1. Eligibility for Refunds</h3>
        <p><strong>Timeframe:</strong> Refund requests must be submitted within 7 days of the original transaction date.</p>
        <p><strong>Service Usage:</strong> The service should not have been fully utilized or consumed.</p>
        <p><strong>Validity:</strong> The reason for refund must fall under our approved refund conditions, such as technical failure or billing error.</p>

        <h3 className="mt-5 mb-3 fw-semibold">🚫 2. Non-Refundable Items</h3>
        <p><strong>Custom Services:</strong> Software that has been customized and delivered based on user requirements is non-refundable.</p>
        <p><strong>One-Time Fees:</strong> Charges collected for one-time services or consultation are not eligible for refunds.</p>
        <p><strong>Activated Services:</strong> Any service that has been activated, consumed, or accessed will not qualify for a refund.</p>

        <h3 className="mt-5 mb-3 fw-semibold">🔁 3. Refund Process</h3>
        <p>
          To initiate a refund, please contact our support team via email at <strong>support@tpipay.ai</strong>. 
          Include your transaction ID, date of purchase, and a brief explanation of the issue. 
          Once reviewed and approved, refunds will be processed within 7 to 10 business days and returned to the original payment method.
        </p>

        <h3 className="mt-5 mb-3 fw-semibold">💳 4. Payment Gateway Charges</h3>
        <p>
          Please note that any charges levied by the payment gateway (processing fees, transaction charges, etc.) 
          are non-refundable and will be deducted from the total refund amount.
        </p>

        <h3 className="mt-5 mb-3 fw-semibold">📌 5. Changes to This Policy</h3>
        <p>
          TpiPay reserves the right to revise this refund policy at any time. Any changes made will be updated on this page. 
          We recommend reviewing the policy periodically for any modifications.
        </p>

        <p className="mt-4 fw-bold"> Last updated: July 2025</p>
      </div>

      <Footer />
    </div>
  );
};

export default RefundPolicy;
