import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, logoutUser } from '../../redux/actions/user.creator';

import './header.scss';

export default function Header() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((store) => store.user);

  function handleLoginClick() {
    dispatch(loginUser());
  }
  function handleLogoutClick() {
    dispatch(logoutUser());
  }

  return (
    <header className="header">
      <h1 className="header__title">To Do List</h1>
      <div className="header__button-container">
        {isAuthenticated
          ? <button className="header__logout" type="button" onClick={handleLogoutClick}>Logout</button>
          : <button className="header__login" type="button" onClick={handleLoginClick}>Login</button>}
      </div>
    </header>
  );
}
