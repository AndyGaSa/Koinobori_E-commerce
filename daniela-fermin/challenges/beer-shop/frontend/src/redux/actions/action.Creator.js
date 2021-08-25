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

export function payCart(cartData) {
  return axios.post('/api/cart', cartData);
}
