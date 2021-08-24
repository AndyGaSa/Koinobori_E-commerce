import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { login } from '../redux/actions/actionCreators';

export default function LoginButton() {
  const dispatch = useDispatch();
  const { isAuthorized } = useSelector((store) => store.loginStatus);

  function loginButtonFn() {
    dispatch(login());
  }
  return (
    <>
      {
      (!isAuthorized) && (<button onClick={loginButtonFn} type="button">Login</button>)
    }
    </>
  );
}
