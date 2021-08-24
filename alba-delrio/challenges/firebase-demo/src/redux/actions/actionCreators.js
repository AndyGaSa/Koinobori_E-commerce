import actionTypes from './actionTypes';

export function loginUser() {
  return {
    type: actionTypes.AUTH_USER
  };
}

export function logout() {
  return {
    type: actionTypes.AUTH_LOGOUT
  };
}
