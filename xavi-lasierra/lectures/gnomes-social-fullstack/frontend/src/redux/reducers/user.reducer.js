/* eslint-disable no-underscore-dangle */
import actionTypes from '../actions/user.actions';

function userReducer(user = {}, action) {
  let newUser = user;
  switch (action.type) {
    case actionTypes.LOAD_USER:
    case actionTypes.UPDATE_USER:
      newUser = action.data;
      break;
    default:
      break;
  }

  return newUser;
}

export default userReducer;
