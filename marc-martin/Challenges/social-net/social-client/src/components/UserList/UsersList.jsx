/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loadUsers from '../../redux/actions/actionCreator';

import './UsersList.scss';

export default function UsersList() {
  const users = useSelector((store) => store.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  return (
    <main className="users">
      {users?.map((user) => (
        <ul key={user._id} className="users__list">
          <img
            src="https://definicion.de/wp-content/uploads/2019/06/perfildeusuario.jpg"
            alt="profile pic"
            className="users__list__profile-picture"
          />
          <li>
            {user?.name}
          </li>
          <li>
            {user?.age}
          </li>
          <li>
            {user?.eyeColor}
          </li>
        </ul>
      ))}
    </main>
  );
}
