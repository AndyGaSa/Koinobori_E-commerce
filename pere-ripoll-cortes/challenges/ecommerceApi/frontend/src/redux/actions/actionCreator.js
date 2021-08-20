import axios from 'axios';
import actionType from './actionType';

// eslint-disable-next-line import/prefer-default-export
export function loadProducts() {
  return async (dispatch) => {
    const { data } = await axios.get('/api/products');
    dispatch({
      type: actionType.LOAD_PRODUCTS_DDBB,
      data,
    });
  };
}
