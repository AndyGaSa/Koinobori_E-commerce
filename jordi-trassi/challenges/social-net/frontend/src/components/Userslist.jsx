/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loadUsers from '../redux/actions/actionCreators';

import './Userslist.css';

export default function Userslist() {
  const allUsers = useSelector(({ users }) => users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  return (
    <section className="users-list">
      <h2>Lista de usuarios:</h2>
      {allUsers?.map((user) => (
        <div className="user-container" key={user.name}>
          <div className="user-container__image">
            <img
              src={user.picture}
              alt="UserPhoto"
              className="user-container__figure--image"
            />
          </div>

          <div className="user-container__information">
            <h2 className="user-name">
              {user.name}
              {/* {user.about} */}
            </h2>
          </div>
        </div>
      ))}
    </section>
  );
}
