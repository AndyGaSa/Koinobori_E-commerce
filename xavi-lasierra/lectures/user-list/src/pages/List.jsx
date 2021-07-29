import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import actionTypes from '../redux/actions/action.types';

import './list.css';

function List() {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);
  const [newUsername, setNewUserName] = useState('');

  return (
    <main>
      <form>
        <label htmlFor="newUsername">
          Create a new User
          <input name="newUsername" type="text" placeholder="Write the username" value={newUsername} onChange={(event) => setNewUserName(event.target.value)} />
        </label>
        <button
          type="button"
          onClick={() => dispatch({
            type: actionTypes.CREATE_USER,
            newUsername
          })}
        >
          Create
        </button>
      </form>
      <ul className="users__list">
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/detail/${user.id}`}>
              <span>
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
