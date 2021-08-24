import actionTypes from './actionTypes';

export function login() {
  return (dispatch) => {
    dispatch({
      type: actionTypes.LOGIN
    });
  };
}

export function logout() {
  return (dispatch) => {
    dispatch({
      type: actionTypes.LOGOUT
    });
  };
}
