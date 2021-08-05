import actionTypes from '../actions/action.types';

export default function StockReducer(stockList = {}, { type, payload }) {
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
