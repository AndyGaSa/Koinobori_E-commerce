import actionTypes from './actionTypes';

export default function productListCreator(product) {
  return (
    {
      type: actionTypes.CREATE_CART,
      product,
    }
  );
}
