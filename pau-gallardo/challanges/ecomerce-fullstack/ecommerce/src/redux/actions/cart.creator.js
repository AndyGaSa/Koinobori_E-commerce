import actionTypes from './actionTypes';

export function addProductToCart(product) {
  return (
    {
      type: actionTypes.ADD_TO_CART,
      product: { ...product, amount: 1 },
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
