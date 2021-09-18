import firebase from 'firebase';
import actionTypes from './actionTypes';

export function logout() {
  return async (dispatch) => {
    await firebase.auth().signOut();
    dispatch({
      type: actionTypes.AUTH_LOGOUT
    });
  };
}

export function currentUser(user) {
  return ({
    type: actionTypes.AUTH_LOGIN,
    user
  });
}
