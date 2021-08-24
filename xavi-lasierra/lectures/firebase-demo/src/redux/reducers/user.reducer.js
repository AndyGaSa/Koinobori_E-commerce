import userActions from '../actions/user.actions';

export default function userReducer(user = false, action) {
  let newUser = user;

  switch (action.type) {
    case userActions.LOGIN_USER:
      newUser = true;
      break;
    case userActions.LOGOUT_USER:
      newUser = false;
      break;
    default:
      break;
  }
  return newUser;
}
