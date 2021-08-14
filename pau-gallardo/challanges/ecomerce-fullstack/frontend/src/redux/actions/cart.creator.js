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

export function removeAllProductsFromCart() {
  return (
    {
      type: actionTypes.REMOVE_ALL_FROM_CART,
    }
  );
}

export function updateProductAmount(product, index) {
  return (
    {
      type: actionTypes.UPDATE_PRODUCT_AMOUNT,
      product,
      index,
    }
  );
}
