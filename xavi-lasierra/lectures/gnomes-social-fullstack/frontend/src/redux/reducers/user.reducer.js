import actionTypes from '../actions/user.actions';

function userReducer(user = {}, action) {
  let newUser = user;
  if (action.type === actionTypes.LOAD_USER) {
    newUser = user;
  }
  return newUser;
}

export default userReducer;
