import axios from 'axios';

import actionTypes from './cart.actions';

export default function getCart(userId) {
  return async (dispatch) => {
    const { data } = await axios.get(`/api/carts/${userId}`);

    dispatch({
      type: actionTypes.LOAD_CART,
      data
    });
  };
}
