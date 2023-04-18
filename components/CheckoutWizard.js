import React from 'react';

export default function CheckoutWizard({ activeStep = 0 }) {
  return (
    <div className="checkout-steps">
      <div className="mb-5 flex flex-wrap">
        {[
          'User Login',
          'Shipping Address',
          'Payment Method',
          'Place order',
        ].map((steps, index) => (
          <div
            key={steps}
            className={`flex-1 border-b-2 text-center ${
              index <= activeStep
                ? 'border-indigo-500 text-indigo-500'
                : 'border-gray-200 text-gray-200'
            }`}
          >
            {steps}
          </div>
        ))}
      </div>
    </div>
  );
}
