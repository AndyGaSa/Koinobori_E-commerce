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

export function loadCarts() {
  return async (dispatch) => {
    const { cartInfo } = await axios.get('/api/carts');
    if (cartInfo) {
      dispatch({
        type: actionTypes.LOAD_CARTS,
        cartInfo,
      });
    }
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
