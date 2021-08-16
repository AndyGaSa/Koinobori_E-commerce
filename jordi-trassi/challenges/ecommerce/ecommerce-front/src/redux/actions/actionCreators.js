/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import actionTypes from './actionTypes';

export function loadProducts() {
  return async (dispatch) => {
    const { data } = await axios.get('/api/products');

    dispatch({
      type: actionTypes.LOAD_PRODUCTS,
      data,
    });
  };
}

export function buyProducts(cartData) {
  return async (dispatch) => {
    const { data } = await axios.post('/api/cart', cartData);
    dispatch({
      type: actionTypes.BUY_PRODUCTS,
      data,
    });
  };
}

export function addToCart(product, amount = 1) {
  return {
    type: actionTypes.ADD_TO_CART,
    product: {
      amount,
      product: product._id,
      name: product.name,
      price: product.price,
    },
  };
}
