import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import setUsername from '../../redux/actions/username.creator';

export default function UsernameInput() {
  const dispatch = useDispatch();
  const [user, setUser] = useState();

  function userChange(event) {
    setUser(event.target.value);
  }

  return (
    <>
      <h1>Introduce your Name</h1>
      <input
        type="text"
        name="username"
        placeholder="Introduce your name"
        onChange={userChange}
      />
      <button
        type="button"
        onClick={() => dispatch(setUsername(user))}
      >
        Save
      </button>
    </>
  );
}
