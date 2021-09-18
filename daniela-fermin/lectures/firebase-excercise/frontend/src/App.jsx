import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import firebase from 'firebase';
import { currentUser } from './redux/actions/action.creator';
import Login from './components/Login/Login';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(currentUser(user));
      }
    });
  }, []);

  return (

    <Login />

  );
}

export default App;
