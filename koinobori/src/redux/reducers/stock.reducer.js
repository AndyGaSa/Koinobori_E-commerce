import actionTypes from '../actions/action.types';

export default function StockReducer({ type, payload }, stockList = {}) {
  let newStockList = stockList;

  if (type === actionTypes.LOAD_STOCK) {
    newStockList = { ...newStockList, ...payload };
  }

  return newStockList;
}
