import actionTypes from './actionTypes';

export function login() {
  return {
    type: actionTypes.LOGIN
  };
}

export function logout() {
  return {
    type: actionTypes.LOGOUT
  };
}
