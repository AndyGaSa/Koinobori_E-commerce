import actionTypes from '../actions/actionTypes';

export default function usersReducer(user = {}, action) {
  let newUser = user;
  switch (action.type) {
    case actionTypes.LOAD_USER:
      newUser = action.data;
      break;
    default:
      newUser = user;
      break;
  }
  return newUser;
}
