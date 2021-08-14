import actionTypes from './actionTypes';

export default function addProductToCart(product) {
  return (
    {
      type: actionTypes.ADD_TO_CART,
      product,
    }
  );
}
