import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadPerson, setUser } from '../../redux/actions/actionCreator';

import '../../styles/Header.scss';

export default function Header() {
  const persons = useSelector((store) => store.persons);
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(async () => {
    await dispatch(loadPerson());
    // eslint-disable-next-line no-console
    console.log('******* PERSONS ******');
    console.log(persons);
    console.log('******* PERSONS[2] ******');
    console.log(persons[2]);
    console.log('******* mathRand ******');
    console.log(Math.floor(Math.random() * persons.length));
    dispatch(setUser(persons[Math.floor(Math.random() * persons.length)]));
    console.log('******* USER ******');
    console.log(user);
  }, []);

  return (
    <header className="header">
      <h1 className="header__title">social-network</h1>
      <div className="header__user-info">
        <img className="user-info__pic" src="#" alt="user logo" />
        <span className="user-info__name" />
      </div>
    </header>
  );
}
