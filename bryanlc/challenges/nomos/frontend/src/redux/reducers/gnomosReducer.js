import actionTypes from '../accions/actionTypes';

export default function gnomosReducer(gnomos = [], action) {
  let newUsers = gnomos;
  switch (action.type) {
    case actionTypes.LOAD_GNOMOS:
      newUsers = action.data;
      break;
    default:
      break;
  }

  return newUsers;
}
