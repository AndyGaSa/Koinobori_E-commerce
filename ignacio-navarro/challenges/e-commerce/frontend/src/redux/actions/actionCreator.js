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

export function addProducts(beerId) {
  return async (dispatch) => {
    const { data } = await axios.post('/api/cart', beerId);
    dispatch({
      type: actionTypes.ADD_PRODUCTS,
      data,
    });
  };
}
