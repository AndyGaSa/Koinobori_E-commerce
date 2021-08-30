import firebase from 'firebase';
import actionTypes from './actionTypes';

export function login() {
  return async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

    await firebase.auth().signInWithPopup(provider);
  };
}

export function logout() {
  return async (dispatch) => {
    await firebase.auth().signOut();
    dispatch({
      type: actionTypes.LOGOUT,
    });
  };
}

export function check(user) {
  return {
    type: actionTypes.LOGIN,
    user,
  };
}
