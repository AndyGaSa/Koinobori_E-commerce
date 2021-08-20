/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loadUsers from '../../redux/actions/actionCreators';

export default function Dashboard() {
  const users = useSelector((store) => store.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  return (
    <ul>
      {
            users?.map((user) => (
              <li key={user._id}>
                {users.name}
              </li>
            ))
        }
    </ul>
  );
}
