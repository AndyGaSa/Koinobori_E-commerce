import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadUser } from '../redux/actions/actionCreator';
import './Header.scss';

export default function Header() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  useEffect(() => {
    dispatch(loadUser());
  }, []);
  return (
    <header>
      <nav>
        <button type="button">Friends</button>
        <h1>FAKEBOOK</h1>
        <button type="button">Profile</button>
      </nav>
      <img className="Header__user-image" src={user?.picture} alt="lola" border="0" />
    </header>
  );
}
