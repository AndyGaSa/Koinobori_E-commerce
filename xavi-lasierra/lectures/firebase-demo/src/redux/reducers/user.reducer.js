import userActions from '../actions/user.actions';

import initialState from '../../constants/userInitialState';

export default function userReducer(user = initialState, action) {
  let newUser = user;

  switch (action.type) {
    case userActions.LOGIN_USER:
      newUser = { ...newUser, isAuthenticated: true };
      break;
    case userActions.LOGOUT_USER:
      newUser = { ...newUser, isAuthenticated: false };
      break;
    default:
      break;
  }
  return newUser;
}
