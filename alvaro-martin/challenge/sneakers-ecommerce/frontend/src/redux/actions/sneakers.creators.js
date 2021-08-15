import axios from 'axios';
import actionTypes from './sneakers.types';
// import sneakers from '../../sneakers-data/data';

export function loadSneakers() {
  return async (dispatch) => {
    const { data } = await axios.get('/api/sneakers');
    dispatch({
      type: actionTypes.LOAD_SNEAKERS,
      sneakers: data,
    });
  };
}
export function loadCart() {
  return async (dispatch) => {
    const { data } = await axios.get('/api/carts');
    dispatch({
      type: actionTypes.LOAD_CART,
      cart: data,
    });
  };
}
export function createCart() {
  return async (dispatch) => {
    const { data } = await axios.post('/api/carts');
    dispatch({
      type: actionTypes.CREATE_CART,
      cart: data,
    });
  };
}
