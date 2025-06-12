import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCT_DETAILS_REQUEST,
  GET_PRODUCT_DETAILS_SUCCESS,
  GET_PRODUCT_DETAILS_FAIL,
} from "../constants/productConstants";

const initialState = {
  products: [],
  productDetails: null,
  loading: false,
  error: null,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
    case GET_PRODUCT_DETAILS_REQUEST:
      return { ...state, loading: true, error: null };
    case GET_PRODUCTS_SUCCESS:
      return { ...state, loading: false, products: action.payload };
    case GET_PRODUCT_DETAILS_SUCCESS:
      return { ...state, loading: false, productDetails: action.payload };
    case GET_PRODUCTS_FAIL:
    case GET_PRODUCT_DETAILS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default productReducer;
