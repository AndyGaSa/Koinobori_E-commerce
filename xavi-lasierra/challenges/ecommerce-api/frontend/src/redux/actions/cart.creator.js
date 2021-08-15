import axios from 'axios';

import actionTypes from './cart.actions';

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
