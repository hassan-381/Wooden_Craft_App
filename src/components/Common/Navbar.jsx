import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/actions/authActions";

const Navbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);

  const cartItemsCount = cartItems.reduce((acc, item) => acc + item.qty, 0);

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <nav className="bg-amber-800 text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            Wooden Crafts
          </Link>
          <div className="flex space-x-4">
            <Link to="/" className="hover:text-amber-200 font-bold">
              Home
            </Link>
            <Link to="/shop" className="hover:text-amber-200 font-bold">
              Shop
            </Link>
            <Link
              to="/cart"
              className="hover:text-amber-200 flex items-center font-bold"
            >
              Cart
              {cartItemsCount > 0 && (
                <span className="ml-1 bg-amber-600 text-white text-xs px-2 py-1 rounded-full">
                  {cartItemsCount}
                </span>
              )}
            </Link>
          </div>
          <div className="hidden md:flex justify-between space-x-6">
            {user ? (
              <div className="flex items-center space-x-4">
                <span> {user.name}</span>
                <button
                  onClick={logoutHandler}
                  className="hover:text-amber-200"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link to="/login" className="hover:text-amber-200">
                  Login
                </Link>
                <Link to="/register" className="hover:text-amber-200">
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
