import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../../redux/actions/actionCreators';

export default function Header() {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((store) => store.auth);

  const handleLoginClick = () => dispatch(login());
  const handleLogoutClick = () => dispatch(logout());

  const loggedInTemplate = (
    <>
      <button
        onClick={handleLogoutClick}
        type="button"
      >
        Logout
      </button>
      <span>
        Welcome
        {' '}
        {user?.given_name}
      </span>
      <img src={user?.picture} alt={user?.name} />
    </>
  );

  return (
    <header>
      { isAuthenticated
        ? loggedInTemplate
        : (
          <button
            onClick={handleLoginClick}
            type="button"
          >
            Login
          </button>
        )}
    </header>
  );
}
