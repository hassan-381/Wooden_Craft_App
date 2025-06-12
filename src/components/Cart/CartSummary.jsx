import React from "react";
import { Link } from "react-router-dom";

const CartSummary = ({ cartItems }) => {
  const itemsCount = cartItems.reduce((acc, item) => acc + item.qty, 0);
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );
  const shipping = subtotal > 100 ? 0 : 15;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-amber-50 p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-amber-800 mb-4">
        Order Summary
      </h2>

      <div className="space-y-2 mb-6">
        <div className="flex justify-between">
          <span className="text-gray-600">Items ({itemsCount})</span>
          <span className="font-medium">${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600">Shipping</span>
          <span className="font-medium">
            {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600">Tax (10%)</span>
          <span className="font-medium">${tax.toFixed(2)}</span>
        </div>

        <div className="border-t border-gray-200 pt-2 mt-2">
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <Link
          to="/checkout" // You can create a CheckoutPage later
          className="block w-full text-center bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-md font-medium transition duration-150"
        >
          Proceed to Checkout
        </Link>

        <Link
          to="/shop"
          className="block w-full text-center bg-white hover:bg-gray-100 text-amber-600 border border-amber-600 py-2 px-4 rounded-md font-medium transition duration-150"
        >
          Continue Shopping
        </Link>
      </div>

      {subtotal < 100 && (
        <div className="mt-4 text-sm text-amber-700">
          <p>Spend ${(100 - subtotal).toFixed(2)} more to get free shipping!</p>
        </div>
      )}
    </div>
  );
};

export default CartSummary;
