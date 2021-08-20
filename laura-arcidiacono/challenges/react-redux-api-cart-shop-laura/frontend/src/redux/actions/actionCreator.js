/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import actionTypes from './actionTypes';

export function loadProducts() {
  return async (dispatch) => {
    const { data } = await axios.get('http://localhost:5000/api/products');

    dispatch({
      type: actionTypes.LOAD_PRODUCTS,
      data
    });
  };
}

export function addToCart(product, amount = 1) {
  return {
    type: actionTypes.ADD_TO_CART,
    product: {
      name: product.name,
      author: product.author,
      price: product.price,
      product: product._id,
      amount
    }
  };
}

export function payProducts(cart) {
  return async (dispatch) => {
    try {
      const { data: products } = await axios.post(process.env.REACT_APP_CART_ENDPOINT, cart);
      dispatch({
        type: actionTypes.PAY_PRODUCTS,
        products
      });
    } catch (error) {
      dispatch({
        type: actionTypes.PRODUCT_API_ERROR,
        products: [],
        error: error.message
      });
    }
  };
}
