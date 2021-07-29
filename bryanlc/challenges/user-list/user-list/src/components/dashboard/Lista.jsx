/* eslint-disable no-debugger */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import actionTyps from '../../redux/actions/action.typs';

import './Lista.css';

function Lista() {
  const users = useSelector((store) => store.users);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState();

  function create() {
    dispatch({
      type: actionTyps.CREATE_USER,
      user: inputValue

    });

    setInputValue('');
  }

  function deleteUser(user) {
    dispatch({
      type: actionTyps.DELETE_USER,
      data: user
    });
  }

  return (

    <>

      <h1>User List</h1>

      <input
        type="text"
        name="user"
        value={inputValue}
        onChange={((event) => setInputValue(event.target.value))}
      />

      <button type="button" onClick={create}> ADD</button>

      <ul className="list__users">
        {
              users.map((user) => (
                <li key={user.name}>
                  <Link to={`/detail/${user.id}`}>
                    {user?.name}
                  </Link>
                  <button
                    type="button"
                    className="btn__delete"
                    onClick={() => deleteUser(user)}
                  >
                    delete

                  </button>
                </li>
              ))
          }
      </ul>
    </>
  );
}

export default Lista;
