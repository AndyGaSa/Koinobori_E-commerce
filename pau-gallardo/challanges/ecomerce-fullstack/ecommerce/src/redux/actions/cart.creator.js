import actionTypes from './actionTypes';

export function addProductToCart(product) {
  return (
    {
      type: actionTypes.ADD_TO_CART,
      product,
    }
  );
}

export function removeProductFromCart(product) {
  return (
    {
      type: actionTypes.REMOVE_FROM_CART,
      product,
    }
  );
}
