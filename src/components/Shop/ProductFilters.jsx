import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/productActions";

const ProductFilters = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  // Get unique categories
  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    // In a real app, you would filter products here or dispatch an action
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    // In a real app, you would sort products here
  };

  return (
    <div className="bg-amber-50 p-4 rounded-lg shadow-md mb-6">
      <h3 className="text-lg font-semibold mb-4 text-amber-800">Filters</h3>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Category
        </label>
        <select
          value={category}
          onChange={handleCategoryChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Sort By
        </label>
        <select
          value={sortBy}
          onChange={handleSortChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
        >
          <option value="default">Default</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="name">Alphabetical</option>
          <option value="rating">Rating</option>
        </select>
      </div>
    </div>
  );
};

export default ProductFilters;
