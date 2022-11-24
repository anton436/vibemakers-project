import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS, JSON_API_PRODUCTS } from "../helpers/consts";

export const productContext = createContext();

export const useProducts = () => {
  return useContext(productContext);
};

const INIT_STATE = {
  products: [],
  productsDetails: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_PRODUCT:
      return { ...state, products: action.payload };

    case ACTIONS.GET_PRODUCT_DETALS:
      return { ...state, productsDetails: action.payload };
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
      type: ACTIONS.GET_PRODUCT,
      payload: data,
    });
  }
  async function deleteProduct(id) {
    await axios.delete(`${JSON_API_PRODUCTS}/${id}`);
    getProducts();
  }

  async function getProductDetails(id) {
    const { data } = await axios(`${JSON_API_PRODUCTS}/${id}`);

    dispatch({
      type: ACTIONS.GET_PRODUCT_DETALS,
      payload: data,
    });
  }
  async function saveEditedProduct(newProduct, id) {
    await axios.patch(`${JSON_API_PRODUCTS}/${id}`, newProduct);
    getProducts();
  }
  const values = {
    addProduct,
    deleteProduct,
    products: state.products,
    getProducts,
    getProductDetails,
    productDetails: state.productsDetails,
    saveEditedProduct,
  };
  console.log(values);
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
