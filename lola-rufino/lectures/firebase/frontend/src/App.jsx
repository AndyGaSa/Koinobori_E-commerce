import React from 'react';
import { useDispatch } from 'react-redux';
import actionTypes from './redux/actions/actionTypes';

function App() {
  const dispatch = useDispatch();

  function handleLogin() {
    dispatch({
      type: actionTypes.AUTHENTICATION_LOGIN,
      data: true
    });
  }

  function handleLogout() {
    dispatch({
      type: actionTypes.AUTHENTICATION_LOGOUT,
      data: false
    });
  }

  return (
    <>
      {isLogged
        ? <button type="button" onClick={handleLogin}>Login</button>
        : <button type="button" onClick={handleLogout}>Logout</button>}
    </>
  );
}

export default App;
