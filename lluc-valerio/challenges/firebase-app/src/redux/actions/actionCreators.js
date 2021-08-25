import firebase from 'firebase/app';

import actionTypes from './actionTypes';

export function login() {
  return async (dispatch) => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

      // const data = firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
      //   .then(() => firebase.auth().signInWithPopup(provider));

      // const data = await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      //   .then(() => firebase.auth().signInWithPopup(provider));

      const data = await firebase.auth().signInWithPopup(provider);

      dispatch({
        type: actionTypes.LOGIN,
        user: data?.additionalUserInfo?.profile
      });
    } catch (error) {
      dispatch({
        type: actionTypes.ERROR
      });
    }
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
