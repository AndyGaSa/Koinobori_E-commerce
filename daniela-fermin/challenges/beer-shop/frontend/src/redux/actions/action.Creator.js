import axios from 'axios';
import actionTypes from './actionTypes';

export function loadBeers() {
  return async (dispatch) => {
    const { data } = await axios.get('/api/beers');

    dispatch({
      type: actionTypes.LOAD_BEERS,
      data
    });
  };
}

export function putInCart(cartData) {
  return async (dispatch) => {
    const { data } = await axios.post('/api/cart', cartData);
    dispatch({
      type: actionTypes.PUT_IN_CART,
      data
    });
  };
}
