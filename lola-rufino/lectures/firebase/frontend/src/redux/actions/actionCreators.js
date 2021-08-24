import firebase from 'firebase';
import actionTypes from './actionTypes';

export function login() {
  return async (dispatch) => {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

    const data = await firebase.auth().signInWithPopup(provider);
    dispatch({
      type: actionTypes.LOGIN,
      user: data?.additionalUserInfo?.profile
    });
  };
}

export function logout() {
  return async (dispatch) => {
    await firebase.auth().signOut();
    dispatch({
      type: actionTypes.LOGOUT
    });
  };
}
