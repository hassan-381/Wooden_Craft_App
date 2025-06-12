import React from "react";

const CheckoutPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Checkout</h1>

      {/* Placeholder for shipping, payment, order summary etc. */}
      <div className="bg-white shadow rounded-lg p-6 space-y-4">
        <div className="text-gray-700">
          <p>This is a placeholder for your checkout form and order summary.</p>
          <p>
            You can add shipping info, payment method, and final order review
            here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
