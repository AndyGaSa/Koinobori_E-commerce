import axios from 'axios';
import actionTypes from './actionTypes';

export function loadProducts() {
  return async (dispatch) => {
    const { data } = await axios.get('/api/products');

    dispatch({
      type: actionTypes.LOAD_PRODUCTS,
      data
    });
  };
}

export function addItemToCart(id) {
  const { data } = await axios.post('api/cart', { products.product: id})
}

export function loadCart() {
  return async (dispatch) => {
    const { data } = await axios.get('/api/cart');

    dispatch({
      type: actionTypes.LOAD_CART,
      data
    });
  };
}
