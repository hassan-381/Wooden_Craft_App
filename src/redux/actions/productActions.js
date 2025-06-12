import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCT_DETAILS_REQUEST,
  GET_PRODUCT_DETAILS_SUCCESS,
  GET_PRODUCT_DETAILS_FAIL,
} from "../constants/productConstants";

// Sample product data - you'll replace this with your own products
const sampleProducts = [
  {
    id: "1",
    name: "Wooden Coffee Table",
    category: "Furniture",
    price: 149.99,
    rating: 4.5,
    image: "/public/images.jpeg",
    description:
      "Beautiful handcrafted wooden coffee table made from reclaimed oak.",
  },
  {
    id: "2",
    name: "Hand-carved Bowl",
    category: "Furniture",
    price: 34.99,
    rating: 4.2,
    image: "/public/lg_1cCKMhC8jqsmHS3j8ppM1dZLk6xTXcOSIY8Njyn2.jpg",
    description: "Artisanal wooden bowl perfect for fruits or display.",
  },
  {
    id: "3",
    name: "Hand-carved Bowl",
    category: "Furniture",
    price: 34.99,
    rating: 4.2,
    image:
      "/public/tags-ruler-scissor-sticks-lace-ribbon-empty-jar-heart-shape-wooden-backdrop.jpg",
    description: "Artisanal wooden bowl perfect for fruits or display.",
  },
  {
    id: "4",
    name: "Hand-carved Bowl",
    category: "Furniture",
    price: 34.99,
    rating: 4.2,
    image: "/public/top-view-carpenter-set-tools.jpg",
    description: "Artisanal wooden bowl perfect for fruits or display.",
  },
  {
    id: "5",
    name: "Hand-carved Bowl",
    category: "Furniture",
    price: 34.99,
    rating: 4.2,
    image: "/public/images (4).jpeg",
    description: "Artisanal wooden bowl perfect for fruits or display.",
  },
  {
    id: "6",
    name: "Hand-carved Bowl",
    category: "Decor",
    price: 34.99,
    rating: 4.2,
    image: "/public/images (4).jpeg",
    description: "Artisanal wooden bowl perfect for fruits or display.",
  },
  {
    id: "7",
    name: "Hand-carved Bowl",
    category: "Decor",
    price: 34.99,
    rating: 4.2,
    image: "/public/images (1).jpeg",
    description: "Artisanal wooden bowl perfect for fruits or display.",
  },
  {
    id: "8",
    name: "Hand-carved Bowl",
    category: "Decor",
    price: 34.99,
    rating: 4.2,
    image: "/public/images (3).jpeg",
    description: "Artisanal wooden bowl perfect for fruits or display.",
  },
  {
    id: "9",
    name: "Hand-carved Bowl",
    category: "Decor",
    price: 34.99,
    featured: true,
    rating: 4.2,
    image: "/public/images (5).jpeg",
    description: "Artisanal wooden bowl perfect for fruits or display.",
  },
  {
    id: "10",
    name: "Hand-carved Bowl",
    category: "Decor",
    price: 34.99,
    featured: true,
    rating: 4.2,
    image: "/public/images (1).jpeg",
    description: "Artisanal wooden bowl perfect for fruits or display.",
  },
  {
    id: "11",
    name: "Hand-carved Bowl",
    category: "Decor",
    price: 34.99,
    featured: true,
    rating: 4.2,
    image: "/public/handicraft-wood-925 (1).jpg",
    description: "Artisanal wooden bowl perfect for fruits or display.",
  },
  {
    id: "12",
    name: "Hand-carved Bowl",
    category: "Decor",
    price: 34.99,
    featured: true,
    rating: 4.2,
    image: "/public/handicraft-wood-925 (1).jpg",
    description: "Artisanal wooden bowl perfect for fruits or display.",
  },
  {
    id: "13",
    name: "Hand-carved Bowl",
    category: "Decor",
    price: 34.99,
    featured: true,
    rating: 4.2,
    image: "/public/handicraft-wood-925 (1).jpg",
    description: "Artisanal wooden bowl perfect for fruits or display.",
  },
  {
    id: "14",
    name: "Wooden Mallet",
    category: "Tools",
    price: 24.99,
    rating: 4.3,
    image: "/public/images (6).jpeg",
    description:
      "Durable handcrafted wooden mallet for woodworking and carving.",
  },
  {
    id: "15",
    name: "Carving Chisel Set",
    category: "Tools",
    price: 59.99,
    rating: 4.7,
    image: "/public/tools.jpeg",
    description:
      "Premium quality wooden-handled carving tools for precision work.",
  },
  {
    id: "16",
    name: "Wooden Ruler",
    category: "Tools",
    price: 9.99,
    rating: 4.1,
    image: "/public/tools.jpeg",
    description:
      "Classic engraved wooden ruler, perfect for measuring and crafts.",
  },
];

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCTS_REQUEST });

    // Simulate API call
    setTimeout(() => {
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: sampleProducts });
    }, 500);
  } catch (error) {
    dispatch({
      type: GET_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCT_DETAILS_REQUEST });

    // Simulate API call
    setTimeout(() => {
      const product = sampleProducts.find((p) => p.id === id);
      dispatch({ type: GET_PRODUCT_DETAILS_SUCCESS, payload: product });
    }, 500);
  } catch (error) {
    dispatch({
      type: GET_PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
