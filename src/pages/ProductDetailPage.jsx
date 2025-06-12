import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";
import Rating from "../components/Common/Rating";
import Loader from "../components/Common/Loader";
import Message from "../components/Common/Message";

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { productDetails, loading, error } = useSelector(
    (state) => state.products
  );
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  const addToCartHandler = () => {
    dispatch(
      addToCart(product.id, 1, product.name, product.image, product.price)
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : productDetails ? (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Product Image */}
            <div className="lg:w-1/2 p-4">
              <img
                src={productDetails.image}
                alt={productDetails.name}
                className="w-full h-auto max-h-96 object-contain rounded-lg"
              />
            </div>

            {/* Product Details */}
            <div className="lg:w-1/2 p-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {productDetails.name}
              </h1>

              <div className="flex items-center mb-4">
                <Rating
                  value={productDetails.rating}
                  text={`${productDetails.numReviews || 0} reviews`}
                />
              </div>

              <div className="mb-6">
                <span className="text-3xl font-bold text-amber-700">
                  ${productDetails.price.toFixed(2)}
                </span>
                {productDetails.originalPrice && (
                  <span className="ml-2 text-lg text-gray-500 line-through">
                    ${productDetails.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>

              <p className="text-gray-700 mb-6">{productDetails.description}</p>

              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Product Details</h2>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Material: {productDetails.material || "Solid Wood"}</li>
                  <li>Dimensions: {productDetails.dimensions || "N/A"}</li>
                  <li>Weight: {productDetails.weight || "N/A"}</li>
                  <li>Category: {productDetails.category || "Wooden Craft"}</li>
                  <li>
                    Status:{" "}
                    {productDetails.countInStock > 0 ? (
                      <span className="text-green-600">In Stock</span>
                    ) : (
                      <span className="text-red-600">Out of Stock</span>
                    )}
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={addToCartHandler}
                  disabled={productDetails.countInStock === 0}
                  className={`px-6 py-3 rounded-md font-medium ${
                    productDetails.countInStock === 0
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-amber-600 hover:bg-amber-700 text-white"
                  }`}
                >
                  {productDetails.countInStock === 0
                    ? "Out of Stock"
                    : "Add to Cart"}
                </button>

                <Link
                  to="/shop"
                  className="px-6 py-3 border border-amber-600 text-amber-600 rounded-md font-medium text-center hover:bg-amber-50 transition"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="p-6 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>

            {productDetails.reviews && productDetails.reviews.length > 0 ? (
              <div className="space-y-6">
                {productDetails.reviews.map((review) => (
                  <div
                    key={review._id}
                    className="border-b border-gray-200 pb-4"
                  >
                    <div className="flex items-center mb-2">
                      <Rating value={review.rating} />
                      <span className="ml-2 font-medium">{review.name}</span>
                      <span className="ml-auto text-gray-500 text-sm">
                        {new Date(review.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No reviews yet.</p>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProductDetailPage;
