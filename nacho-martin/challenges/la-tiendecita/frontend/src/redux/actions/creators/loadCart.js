import axios from 'axios';
import actionTypes from '../types/cart';

export default function loadCart() {
  return async (dispatch) => {
    const { data } = await axios.get('/cart');
    dispatch({
      type: actionTypes.LOAD_CART,
      cart: data
    });
  };
}
