import React from "react";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  updateCartItem,
} from "../../redux/actions/cartActions";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  if (!item) return null;

  const { id = "", name = "No Name", image = "", price = 0, qty = 1 } = item;

  const removeFromCartHandler = () => {
    dispatch(removeFromCart(id));
  };

  const updateQuantity = (newQty) => {
    const qtyNumber = Number(newQty);
    if (qtyNumber > 0) {
      dispatch(updateCartItem(id, qtyNumber));
    }
  };

  return (
    <div className="flex flex-col md:flex-row border-b border-gray-200 py-4">
      <div className="flex-shrink-0">
        <img
          src={image}
          alt={name}
          className="w-24 h-24 object-cover rounded-md"
        />
      </div>

      <div className="mt-4 md:mt-0 md:ml-6 flex-grow">
        <div className="flex justify-between">
          <h3 className="text-lg font-medium text-gray-900">{name}</h3>
          <p className="text-lg font-medium text-gray-900">
            ${Number(price).toFixed(2)}
          </p>
        </div>

        <div className="mt-2 flex items-center">
          <label
            htmlFor={`quantity-${id}`}
            className="mr-2 text-sm text-gray-600"
          >
            Quantity:
          </label>
          <select
            id={`quantity-${id}`}
            value={qty}
            onChange={(e) => updateQuantity(e.target.value)}
            className="border border-gray-300 rounded-md p-1 text-sm"
          >
            {[...Array(10).keys()].map((x) => (
              <option key={x + 1} value={x + 1}>
                {x + 1}
              </option>
            ))}
          </select>

          <button
            onClick={removeFromCartHandler}
            className="ml-4 text-sm text-red-600 hover:text-red-800"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
