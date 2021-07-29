import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import actionTypes from '../redux/actions/action.types';

import './list.css';

function List() {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);
  const [newUsername, setNewUsername] = useState('');

  function createUser() {
    if (newUsername.trim() === '') return;
    dispatch({
      type: actionTypes.CREATE_USER,
      newUsername
    });
    setNewUsername('');
  }

  return (
    <main>
      <form className="users__create">
        <label htmlFor="newUsername">
          Create a new User
          <br />
          <input name="newUsername" type="text" placeholder="Username" value={newUsername} onChange={(event) => setNewUsername(event.target.value)} />
        </label>
        <button
          type="button"
          onClick={createUser}
        >
          Create
        </button>
      </form>
      <ul className="users__list">
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/detail/${user.id}`}>
              <span className="users__id">
                #
                {user.id}
              </span>
              <span>{user.username}</span>
            </Link>
            <button
              type="button"
              onClick={() => dispatch({
                type: actionTypes.DELETE_USER,
                userId: user.id
              })}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default List;
