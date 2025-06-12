import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../Common/ProductCard";

const FeaturedProducts = ({ products }) => {
  const featuredProducts = products
    .filter((product) => product.featured)
    .slice(0, 4);

  return (
    <div>
      {featuredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">
          No featured products available
        </p>
      )}

      <div className="mt-8 text-center">
        <Link
          to="/shop"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-amber-600 hover:bg-amber-700"
        >
          View All Products
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProducts;
