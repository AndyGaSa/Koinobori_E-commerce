import actionTypes from '../actions/actionTypes';

export default function userReducer(user = {}, action) {
  let newUser = user;

  switch (action.type) {
    case actionTypes.LOAD_USER:
      newUser = action.data;
      break;
    case actionTypes.UPDATE_USER:
      newUser = { ...user, ...action.data };
      break;
    default:
      newUser = user;

      break;
  }
  return newUser;
}
