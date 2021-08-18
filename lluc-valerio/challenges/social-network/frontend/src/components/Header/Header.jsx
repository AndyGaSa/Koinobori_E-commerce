import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadPerson, setUser } from '../../redux/actions/actionCreator';

import '../../styles/Header.scss';

export default function Header() {
  const persons = useSelector((store) => store.persons);
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPerson());
  }, []);

  useEffect(() => {
    dispatch(setUser(persons[Math.floor(Math.random() * persons.length)]));
  }, [persons]);

  return (
    <header className="header">
      <div className="header__title">
        <h1>social-network</h1>
      </div>
      <div className="header__user-info">
        <img className="user-info__pic" src={user.picture} alt="user logo" />
        <span className="user-info__name">{user.name}</span>
      </div>
    </header>
  );
}
