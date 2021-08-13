import actionTypes from './actionTypes';

export default function addProductToCart(product) {
  return (
    {
      type: actionTypes.CREATE_CART,
      product,
    }
  );
}
