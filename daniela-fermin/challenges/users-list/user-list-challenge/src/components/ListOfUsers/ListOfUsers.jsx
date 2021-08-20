/* eslint-disable no-debugger */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import actionTypes from '../../redux/actions/actionTypes';

import './ListOfUsers.css';

export default function ListOfUsers() {
  const users = useSelector((store) => store.users);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState();
  let lastId;
  function getLastId() {
    debugger;
    const ids = users.map(({ id }) => id);
    ids.sort((a, b) => a - b);
    lastId = ids[ids.length - 1];
    return lastId;
  }

  function create() {
    if (!inputValue.trim()) return;

    dispatch({
      type: actionTypes.ADD_USER,
      user: {
        name: inputValue,
        id: getLastId() + 1
      }

    });

    setInputValue('');
  }

  return (
    <>
      <h2>Users</h2>
      <input
        type="text"
        name="todo"
        value={inputValue}
        onChange={((event) => setInputValue(event.target.value))}
      />
      <button
        type="button"
        onClick={create}
      >
        Add User

      </button>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link className="user__links" to={`/details/${user.id}`}>
              <span>{user.id}</span>
              {' '}
              {user.name}
            </Link>
            <button
              type="button"
              onClick={() => dispatch({
                type: actionTypes.DELETE_USER,
                user
              })}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
