import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import CartPage from "../../pages/CartPage";

const ProtectedRoute = () => {
  const { user } = useSelector((state) => state.auth);

  return user ? <CartPage /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
