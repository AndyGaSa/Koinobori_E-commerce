import axios from 'axios';
import actionTypes from './actionTypes';

export default function loadProductList() {
  return async (dispatch) => {
    const { data } = await axios('http://localhost:5000/api/products');

    dispatch({
      type: actionTypes.LOAD_PRODUCT_LIST,
      productList: data,
    });
  };
}
