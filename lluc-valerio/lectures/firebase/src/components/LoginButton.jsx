import React from 'react';
import { useDispatch } from 'react-redux';
// import useDispatch, { useSelector } from 'react-redux';

import { login } from '../redux/actions/actionCreators';

// eslint-disable-next-line no-unused-vars
const dispatch = useDispatch();

// const loginState = useSelector((store) => store);

// function loginButton() {
//   dispatch(login());
// }

export default function LoginButton() {
  return (
    <button onChange={() => dispatch(login())} type="button">Login</button>
    // <button onChange={() => { loginButton(); }} type="button">Login</button>
  );
}
