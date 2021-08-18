/* eslint-disable no-underscore-dangle */
import actionTypes from '../actions/user.actions';

function userReducer(user = '', action) {
  let newUser = user;
  if (action.type === actionTypes.LOAD_USER) {
    newUser = action.data._id;
  }
  return newUser;
}

export default userReducer;
