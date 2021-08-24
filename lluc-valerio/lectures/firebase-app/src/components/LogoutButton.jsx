import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { logout } from '../redux/actions/actionCreators';

export default function LogoutButton() {
  const dispatch = useDispatch();
  const { isAuthorized } = useSelector((store) => store.loginStatus);

  function logoutButtonFn() {
    dispatch(logout());
  }

  return (
    <>
      {
      (isAuthorized) && (<button onClick={logoutButtonFn} type="button">Logout</button>)
    }
    </>
  );
}
