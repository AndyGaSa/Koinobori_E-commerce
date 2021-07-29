import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import actionTypes from '../../redux/actions/actionTypes';

export default function ListOfUsers() {
  const users = useSelector((store) => store.users);
  const dispatch = useDispatch();
  return (
    <>
      <h2>Users</h2>
      <input type="text" />
      <button type="button">Add User</button>

      <ul>
        {users.map((user) => (
          <li>
            <Link to={`./Details/${user.id}`}>
              {user.name}
            </Link>
            <button
              type="button"
              onClick={dispatch({
                type: actionTypes.DELETE_USER,
                user
              })}
            >
              x
            </button>
            <button
              type="button"
              onClick={dispatch({
                type: actionTypes.UPDATE_USER,
                user
              })}
            >
              update
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
