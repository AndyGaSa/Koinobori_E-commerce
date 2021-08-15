/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import actionTypes from './actionTypes';

export function loadProducts() {
  return async (dispatch) => {
    const { data } = await axios.get('/api/beers');

    dispatch({
      type: actionTypes.LOAD_PRODUCTS,
      data,
    });
  };
}
export function loadOneBeer(beerId) {
  return async (dispatch) => {
    const { data } = await axios.get(`/api/beers/${beerId}`);

    dispatch({
      type: actionTypes.LOAD_ONEBEER,
      data,
    });
  };
}

export function loadUser(userId) {
  return async (dispatch) => {
    const { data } = await axios.get(`/api/client/${userId}`);

    dispatch({
      type: actionTypes.LOAD_USER,
      data,
    });
  };
}
export function createCart(userId) {
  return async (dispatch) => {
    const { data } = await axios.post(`/api/cart/new/${userId}`);
    dispatch({
      type: actionTypes.CREATE_CART,
      data,
    });
  };
}
export function updateCart(product, cart) {
  const newCart = cart;
  const thereIsProduct = cart.products.find((current) => current.product === product._id);
  if (thereIsProduct !== undefined) {
    thereIsProduct.amount += 1;
  } else {
    newCart.products.push({ product: product._id, amount: 1 });
  }
  return async (dispatch) => {
    dispatch({
      type: actionTypes.UPDATE_CART,
      data: newCart,
    });
  };
}
