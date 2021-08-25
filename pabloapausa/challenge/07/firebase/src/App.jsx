import React, { useEffect } from 'react';
import firebase from 'firebase';
import { useDispatch } from 'react-redux';
import Header from './components/header/Header';
import { check } from './redux/actions/actionCreator';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(check(user));
      }
    });
  }, []);

  return (
    <Header />
  );
}
