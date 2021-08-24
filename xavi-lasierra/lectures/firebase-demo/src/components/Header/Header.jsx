import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, logoutUser } from '../../redux/actions/user.creator';

export default function Header() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((store) => store.user);

  return (
    <header>
      <h1>To Do List</h1>
      {isAuthenticated
        ? <button type="button" onClick={() => dispatch(logoutUser())}>Logout</button>
        : <button type="button" onClick={() => dispatch(loginUser())}>Login</button>}
    </header>
  );
}
