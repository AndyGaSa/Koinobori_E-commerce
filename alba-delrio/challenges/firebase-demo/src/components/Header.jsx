import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, logout } from '../redux/actions/actionCreators';

export default function Header() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((store) => store.authReducer);

  const handleLoginClick = () => dispatch(loginUser());
  const handleLogoutClick = () => dispatch(logout());
  return (
    <>
      {isAuthenticated
        ? <button type="button" onClick={handleLogoutClick}>LogOut</button>
        : <button type="button" onClick={handleLoginClick}>LogIn</button> }

      <span>
        Welcome!
      </span>

    </>
  );
}
