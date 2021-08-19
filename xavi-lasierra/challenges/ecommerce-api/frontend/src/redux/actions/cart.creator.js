import axios from 'axios';

import actionTypes from './cart.actions';
import getProducts from './products.creator';

export function getCart(userId) {
  return async (dispatch) => {
    const { data } = await axios.get(`/api/carts/${userId}`);

    dispatch({
      type: actionTypes.LOAD_CART,
      data
    });
  };
}

export function addProductToCart(data) {
  return ({
    type: actionTypes.ADD_TO_CART,
    data
  });
}

export function substractProductFromCart(data) {
  return ({
    type: actionTypes.SUBSTRACT_FROM_CART,
    data
  });
}

export function saveCart({ user, products }) {
  return async (dispatch) => {
    const { data } = await axios.put(`/api/carts/${user}`, products);
    dispatch({
      type: actionTypes.SAVE_CART,
      data
    });
  };
}

export function clearCart() {
  return ({
    type: actionTypes.CLEAR_CART
  });
}

export function submitCart({ user, products }) {
  return async (dispatch) => {
    const { data } = await axios.put(`/api/carts/pay/${user}`, products);
    dispatch({
      type: actionTypes.SAVE_CART,
      data
    });

    getProducts()(dispatch);
  };
}
