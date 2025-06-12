// src/redux/reducers/cartReducer.js
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_UPDATE_ITEM,
  CART_CLEAR_ITEMS,
} from "../constants/cartConstants";

// Safely parse localStorage data
const getInitialCartItems = () => {
  try {
    return JSON.parse(localStorage.getItem("cartItems")) || [];
  } catch (error) {
    console.error("Error parsing cart items:", error);
    return [];
  }
};

const initialState = {
  cartItems: getInitialCartItems(),
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.id === item.id);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.id === existItem.id ? { ...x, qty: x.qty + item.qty } : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.id !== action.payload),
      };

    case CART_UPDATE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: action.payload.qty }
            : item
        ),
      };

    case CART_CLEAR_ITEMS:
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
};

export default cartReducer;
