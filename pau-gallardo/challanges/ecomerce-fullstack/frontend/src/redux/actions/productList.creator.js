import actionTypes from './actionTypes';
import mockedProductList from '../../mocks/productList.mock';

export default function loadProductList() {
  return (
    {
      type: actionTypes.LOAD_PRODUCT_LIST,
      productList: mockedProductList,
    }
  );
}
