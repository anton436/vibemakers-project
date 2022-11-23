import axios from 'axios';
import React, { createContext, useContext, useReducer } from 'react';
import { ACTIONS, JSON_API_PRODUCTS } from '../helpers/consts';

export const productContext = createContext();

export const useProducts = () => {
  return useContext(productContext);
};

const INIT_STATE = {
  products: [],
  productDetails: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return { ...state, products: action.payload };

    case ACTIONS.GET_PRODUCT_DETAILS:
      return { ...state, productDetails: action.payload };

    default:
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function addProduct(newProduct) {
    await axios.post(JSON_API_PRODUCTS, newProduct);
  }

  async function getProducts() {
    const { data } = await axios(JSON_API_PRODUCTS);

    dispatch({
      type: ACTIONS.GET_PRODUCTS,
      payload: data,
    });
  }

  async function getProductDetails(id) {
    const { data } = await axios(`${JSON_API_PRODUCTS}/${id}`);

    dispatch({
      type: ACTIONS.GET_PRODUCT_DETAILS,
      payload: data,
    });
  }

  const values = {
    addProduct,
    products: state.products,
    productDetails: state.productDetails,
    getProducts,
    getProductDetails,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;