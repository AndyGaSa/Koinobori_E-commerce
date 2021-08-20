import axios from 'axios';
import actionTypes from '../types/products';

export default function loadProducts() {
  return async (dispatch) => {
    const { data } = await axios.get('/products');
    dispatch({
      type: actionTypes.LOAD_PRODUCTS,
      products: data
    });
  };
}
