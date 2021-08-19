/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadProfiles, loadPerson, submitFriend, submitAdversarie,
} from '../redux/actions/user.creatos';

import './style.css';

export default function Profiles() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.users);
  const profiles = useSelector((store) => store.profiles);
  useEffect(() => {
    dispatch(loadProfiles());
  }, []);
  return (
    <>
      {profiles.map(({
        age, eyeColor, name, _id,
      }) => (
        <section className="container">
          <h3>{name}</h3>
          <p>{age}</p>
          <p>{eyeColor}</p>
          <button type="button" className="container__visit" onClick={() => dispatch(submitFriend(user._id, _id))}>AMIGO</button>
          <button type="button" className="container__visit" onClick={() => dispatch(loadPerson(_id))}>VISIT</button>
          <button type="button" className="container__visit" onClick={() => dispatch(submitAdversarie(user._id, _id))}>ADVERSORIO</button>

        </section>
      ))}
    </>
  );
}
