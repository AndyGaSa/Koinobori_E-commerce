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
          <li>
            {user?.name}
          </li>
          <li>
            Friends:
            {user?.friends}
            <button type="button">+</button>
            <button type="button">-</button>
          </li>
          <li>
            Adversaries:
            {user?.adversaries}
            <button type="button">+</button>
            <button type="button">-</button>
          </li>
        </ul>
      ))}
    </main>
  );
}
