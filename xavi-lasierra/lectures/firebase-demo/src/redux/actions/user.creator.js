import userActions from './user.actions';

export function loginUser() {
  return {
    type: userActions.LOGIN_USER
  };
}

export function logoutUser() {
  return {
    type: userActions.LOGOUT_USER
  };
}
