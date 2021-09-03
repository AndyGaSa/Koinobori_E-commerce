import actionType from '../actions/actionType';

export default function productListreducer(productList = [], action) {
  let newProductList = productList;

  switch (action.type) {
    case actionType.LOAD_PRODUCTS_DDBB:
      newProductList = action.data;
      break;
    default:
      break;
  }

  return newProductList;
}
