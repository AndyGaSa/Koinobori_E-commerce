import actionTypes from '../actions/action.types';

export default function StockReducer(stockList = [], action) {
  const newstockList = stockList;
  switch (action.type) {
    case actionTypes.LOAD_STOCK:

      break;
    case actionTypes.CREATE_STOCK:

      break;

    case actionTypes.UPDATE_STOCK:

      break;

    case actionTypes.DELETE_STOCK:

      break;

    default:
      break;
  }

  return newstockList;
}
