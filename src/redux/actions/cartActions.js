// src/redux/actions/cartActions.js
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_UPDATE_ITEM,
  CART_CLEAR_ITEMS,
} from "../constants/cartConstants";

export const addToCart =
  (id, qty = 1, name, image, price) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: CART_ADD_ITEM,
        payload: {
          id,
          name,
          image,
          price: Number(price),
          qty: Number(qty),
        },
      });

      localStorage.setItem(
        "cartItems",
        JSON.stringify(getState().cart.cartItems)
      );
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

export const removeFromCart = (id) => async (dispatch, getState) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: id });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const updateCartItem = (id, qty) => async (dispatch, getState) => {
  if (qty > 0) {
    dispatch({ type: CART_UPDATE_ITEM, payload: { id, qty: Number(qty) } });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  }
};

export const clearCart = () => async (dispatch) => {
  dispatch({ type: CART_CLEAR_ITEMS });
  localStorage.removeItem("cartItems");
};
