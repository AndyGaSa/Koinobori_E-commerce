import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { logUser } from '../../redux/actions/user.creator';

import './login.scss';

function Login() {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState('');

  function login(newUsername) {
    if (newUsername.trim()) {
      dispatch(logUser(newUsername.trim()));
    }
  }

  return (
    <>
      <h2 className="not-logged__title">Welcome!</h2>
      <form className="not-logged__form">
        <input type="text" placeholder="Username" value={userName} onChange={({ target: { value } }) => setUserName(value)} />
        <button type="button" onClick={() => login(userName)}>Login</button>
      </form>
    </>
  );
}

export default Login;
