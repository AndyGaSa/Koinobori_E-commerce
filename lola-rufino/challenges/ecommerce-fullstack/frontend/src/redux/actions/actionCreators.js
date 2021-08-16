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

export async function addItemToCart(productId) {
  const newData = {
    user: '6117c1ba4d74be32e81acbd7',
    products: [
      {
        product: productId,
        amount: 1
      }
    ]
  };
  const res = await axios.post('api/cart', newData);
  console.log(res);
}

export async function deleteItemToCart(cartId) {
  const res = await axios.delete(`api/cart/${cartId}`);
  console.log(res);
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
