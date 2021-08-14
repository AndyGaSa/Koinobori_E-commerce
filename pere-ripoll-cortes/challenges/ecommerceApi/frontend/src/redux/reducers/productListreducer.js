import actionType from '../actions/actionType';

export default function productListreducer(productList = [], action) {
  if (action.type === actionType.LOAD_PRODUCTS_DDBB) {
    return action.data;
  }
  return productList;
}
