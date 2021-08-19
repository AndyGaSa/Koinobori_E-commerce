/* eslint-disable no-underscore-dangle */
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

export function buyProducts(cartData) {
  return async (dispatch) => {
    const { data } = await axios.post('/api/cart', cartData);
    dispatch({
      type: actionTypes.BUY_PRODUCTS,
      data,
    });
  };
}

export function addToCart(product, amount = 1) {
  return {
    type: actionTypes.ADD_TO_CART,
    product: {
      amount,
      product: product._id,
      name: product.name,
      price: product.price,
    },
  };
}

export function deleteToCart(product) {
  // eslint-disable-next-line no-debugger
  return {
    type: actionTypes.DELETE_TO_CART,
    product: {
      ...product,
      amount: product.amount - 1,
      stock: product.stock + 1,
    },
  };
}

export function payProducts(cart) {
  return async (dispatch) => {
    try {
      const { data: products } = await axios.post(process.env.REACT_APP_CART_ENDPOINT, cart);
      dispatch({
        type: actionTypes.PAY_PRODUCTS,
        products,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.PRODUCT_API_ERROR,
        products: [],
        error: error.message,
      });
    }
  };
}
