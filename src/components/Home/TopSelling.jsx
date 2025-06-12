import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/actions/cartActions";

const TopSelling = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  // Get top selling products (first 4 highest rated)
  const topSellingProducts = [...products]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 8);

  // Product Card Component
  const ProductCard = ({ product }) => {
    const addToCartHandler = () => {
      dispatch(
        addToCart(product.id, 1, product.name, product.image, product.price)
      );
    };

    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
        <Link to={`/product/${product.id}`} className="block flex-grow">
          <div className="relative pb-2/3 h-48">
            <img
              className="absolute h-full w-full object-cover"
              src={product.image}
              alt={product.name}
            />
          </div>

          <div className="p-4 flex-grow">
            <h3 className="text-lg font-semibold text-gray-900 mb-1 hover:text-amber-600">
              {product.name}
            </h3>

            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating)
                      ? "text-amber-400"
                      : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-gray-600 text-sm ml-1">
                ({product.rating.toFixed(1)})
              </span>
            </div>
          </div>
        </Link>

        <div className="p-4 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-amber-700">
              ${product.price.toFixed(2)}
            </span>
            <button
              onClick={addToCartHandler}
              className="px-3 py-1 bg-amber-600 text-white text-sm rounded hover:bg-amber-700 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {topSellingProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

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

export default TopSelling;
