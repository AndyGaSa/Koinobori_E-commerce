import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actionTypes from '../redux/actions/actionTypes';

export default function Header() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((store) => store.authReducer);

  const handleLoginClick = () => dispatch({ type: actionTypes.AUTH_USER });
  const handleLogoutClick = () => dispatch({ type: actionTypes.AUTH_LOGOUT });
  return (
    <>
      {isAuthenticated
        ? <button type="button" onClick={handleLogoutClick}>Logout</button>
        : <button type="button" onClick={handleLoginClick}>LogIn</button> }
    </>
  );
}
