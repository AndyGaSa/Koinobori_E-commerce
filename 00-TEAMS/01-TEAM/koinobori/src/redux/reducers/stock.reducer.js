import actionTypes from '../actions/action.types';

export default function StockReducer({ type, payload }, stockList = {}) {
  let newStockList = stockList;
  switch (type) {
    case actionTypes.LOAD_STOCK:
      newStockList = { ...newStockList, ...payload };
      break;

    default:
      break;
  }

  return newStockList;
}
