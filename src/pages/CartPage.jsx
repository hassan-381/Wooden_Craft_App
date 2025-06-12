import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/Cart/CartItem";
import CartSummary from "../components/Cart/CartSummary";

const CartPage = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-xl font-medium text-gray-900 mb-4">
            Your cart is empty
          </h2>
          <Link
            to="/shop"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-amber-600 hover:bg-amber-700"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="lg:w-1/3">
            <CartSummary cartItems={cartItems} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
