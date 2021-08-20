import axios from 'axios';
import actionTypes from './actionTypes';

export function loadProducts() {
  return async (dispatch) => {
    const { data } = await axios.get('http://localhost:5000/api/productlist');

    dispatch({
      type: actionTypes.LOAD_PRODUCTLIST,
      data
    });
  };
}

export function buyProducts(cartData) {
  return async (dispatch) => {
    const { data } = await axios.post('/api/cart', cartData);

    dispatch({
      type: actionTypes.BUY_PRODUCTS,
      data
    });
  };
}
