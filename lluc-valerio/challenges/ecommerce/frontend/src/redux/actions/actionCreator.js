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

export function loadCartItems(user) {
  return async (dispatch) => {
    const { data } = await axios.get(`/api/cart/?name=${user}`);
    dispatch({
      type: actionTypes.LOAD_ITEMS,
      data
    });
  };
}

export function addCartItems(cartId, newCartItem) {
  // // eslint-disable-next-line no-debugger
  // debugger;
  return async (dispatch) => {
    const { data } = await axios.put(`/api/cart/${cartId}`, newCartItem);
    dispatch({
      type: actionTypes.ADD_ITEMS,
      data
    });
    // dispatch({
    //   type: actionTypes.LOAD_ITEMS,
    //   data
    // });
  };
}

// export function buyProducts(cartData) {
//   return async (dispatch) => {
//     const { data } = await axios.post('/api/cart', cartData);
//     dispatch({
//       type: actionTypes.BUY_PRODUCTS,
//       data
//     });
//   };
// }
