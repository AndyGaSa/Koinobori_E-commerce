import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from './redux/actions/actionCreators';

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((store) => store.authentication);

  const handleLogin = () => dispatch(logout());
  const handleLogout = () => dispatch(login());

  return (
    <>
      {isAuthenticated
        ? (<button type="button" onClick={handleLogin}>Login</button>)
        : (<button type="button" onClick={handleLogout}>Logout</button>)}
    </>
  );
}

export default App;
