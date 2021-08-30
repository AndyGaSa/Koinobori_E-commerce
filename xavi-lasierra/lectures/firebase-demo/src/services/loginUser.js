import firebase from 'firebase';

export default async function loginUser() {
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

  await firebase.auth().signInWithPopup(provider);
}
