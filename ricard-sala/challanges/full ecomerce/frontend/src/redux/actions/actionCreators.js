/* eslint-disable import/prefer-default-export */
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

const setUserToStore = (data) => ({
  type: actionTypes.LOAD_PRODUCTS,
  data,
});

const postUserToApi = ({ name }) => (dispatch) => {
  axios.post('/api/users', { name })
    .then((response) => {
      dispatch(setUserToStore(response));
    });
};

export {
  postUserToApi,
};
