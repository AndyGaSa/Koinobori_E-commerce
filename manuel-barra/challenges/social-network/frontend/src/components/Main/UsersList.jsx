/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loadUsers from '../../redux/actions/actionCreators';

export default function Userslist() {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  return (
    <ul>
      {
      users?.map((user) => (
        <li key={user._id}>
          {user.name}
        </li>
      ))
}
    </ul>
  );
}
