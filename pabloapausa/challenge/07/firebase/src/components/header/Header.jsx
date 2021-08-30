import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../../redux/actions/actionCreator';

export default function Header() {
  const dispatch = useDispatch();

  const { isAuthenthicated, user } = useSelector((store) => store.authReducer);
  const handleLoginClick = () => dispatch(login());
  const handleLogoutClick = () => dispatch(logout());

  const loggedIn = (
    <>
      <button onClick={handleLogoutClick} type="button">Logout</button>
      <span>
        Welcome
        {' '}
        {user?.given_name}
      </span>
      <img src={user?.picture} alt={user?.name} />
    </>
  );
  const loggedOut = (
    <button onClick={handleLoginClick} type="button">Login</button>
  );

  return (
    <header>{ isAuthenthicated ? loggedIn : loggedOut }</header>
  );
}
