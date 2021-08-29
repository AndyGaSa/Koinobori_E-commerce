import firebase from 'firebase';
import actionTypes from './actionTypes';

export function loginUser() {
  return async (dispatch) => {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    const data = await firebase.auth().signInWithPopup(provider);
    dispatch({
      type: actionTypes.AUTH_USER,
      user: data?.additionalUserInfo?.profile
    });
  };
}

export function logout() {
  return async (dispatch) => {
    await firebase.auth().signOut();
    dispatch({
      type: actionTypes.AUTH_LOGOUT
    });
  };
}
