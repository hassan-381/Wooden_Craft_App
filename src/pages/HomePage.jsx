import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/actions/productActions";
import HeroSection from "../components/Home/HeroSection";
import TopSelling from "../components/Home/TopSelling";
import FeaturedProducts from "../components/Home/FeaturedProducts";
import Loader from "../components/Common/Loader"; // Import loader

const HomePage = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="overflow-hidden">
      <HeroSection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
          Top Selling Products
        </h2>
        <TopSelling products={products} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
          Featured Products
        </h2>
        <FeaturedProducts products={products} />
      </div>
    </div>
  );
};

export default HomePage;
