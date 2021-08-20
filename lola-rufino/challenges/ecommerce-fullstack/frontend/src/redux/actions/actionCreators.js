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

export function loadCart() {
  return async (dispatch) => {
    const { data } = await axios.get('/api/cart');

    dispatch({
      type: actionTypes.LOAD_CART,
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
  await axios.post('api/cart', newData);
}

/* export async function addItemToCart(product) {
  return {
    type: actionTypes.ADD_TO_CART,
    product: {
      product: product._id,
      name: product.name,
      price: product.price,
      amount,
    },
  };
} */

export async function deleteItemFromCart(productId) {
  console.log(productId);
  // delete item
}

export async function deleteCart(cartId) {
  console.log('console de cartId', cartId);
  await axios.delete(`api/cart/${cartId}`);
}
