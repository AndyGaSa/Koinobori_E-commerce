import axios from 'axios';
import actionTypes from '../types/cart';

export function addToCart(product) {
  return async (dispatch) => {
    await axios.post('/products', product);
    const { data } = await axios.put('/cart');
    dispatch({
      type: actionTypes.ADD_PRODUCT,
      products: data
    });
  };
}

export function loadCart() {
  return async (dispatch) => {
    const { data } = await axios.get('/cart');
    dispatch({
      type: actionTypes.LOAD_CART,
      products: data
    });
  };
}
