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
