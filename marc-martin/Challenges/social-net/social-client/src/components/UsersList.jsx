/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loadUsers from '../redux/actions/actionCreator';

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
            Name:
            {user?.name}
          </li>
          <li>
            Age:
            {user?.age}
          </li>
          <li>
            Friends:
            {user?.friends}
          </li>
          <li>
            Adversaries:
            {user?.sdversaries}
          </li>
        </ul>
      ))}
    </main>
  );
}
