<<<<<<< .merge_file_0QAQ57
import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS, JSON_API_PRODUCTS } from "../helpers/consts";
=======
import axios from 'axios';
import React, { createContext, useContext, useReducer } from 'react';
import { ACTIONS, JSON_API_PRODUCTS } from '../helpers/consts';
>>>>>>> .merge_file_mCquc5

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
<<<<<<< .merge_file_0QAQ57
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
=======
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    async function addProduct(newProduct) {
        await axios.post(JSON_API_PRODUCTS, newProduct);
        getProducts();
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

    async function saveEditedProduct(newProduct, id) {
        await axios.patch(`${JSON_API_PRODUCTS}/${id}`, newProduct);
        getProducts();
    }

    async function deleteProduct(id) {
        await axios.delete(`${JSON_API_PRODUCTS}/${id}`);
        getProducts();
    }

    const values = {
        addProduct,
        products: state.products,
        getProducts,
        getProductDetails,
        productDetails: state.productDetails,
        saveEditedProduct,
        deleteProduct,
    };
    return (
        <productContext.Provider value={values}>
            {children}
        </productContext.Provider>
    );
>>>>>>> .merge_file_mCquc5
};

export default ProductContextProvider;
