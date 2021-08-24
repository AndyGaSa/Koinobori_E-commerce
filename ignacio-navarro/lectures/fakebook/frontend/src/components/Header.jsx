import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import { loadUser } from '../redux/actions/actionCreator';

import './Header.scss';

export default function Header() {
  const { logout } = useAuth0();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  useEffect(() => {
    dispatch(loadUser());
  }, []);
  return (
    <header>
      <nav>
        <Link to="/people">People</Link>
        <h1>FAKEBOOK</h1>
        <Link to="/home">Profile</Link>
        <button type="button" onClick={() => logout({ returnTo: window.location.origin })}>Logout</button>
      </nav>
      <img className="Header__user-image" src={user?.picture} alt="lola" border="0" />
    </header>
  );
}
