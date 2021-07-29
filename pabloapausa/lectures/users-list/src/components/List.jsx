/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import action from '../redux/actions/action.types';

function Details({ match }) {
  const users = useSelector((store) => store.users);
  const [userId] = useState(match.params.userId);
  const [user, setUser] = useState(users.find(({ id }) => id === +userId));
  return (
    <>
      <h2>
        {user?.name}
        {' '}
        details!
      </h2>
      <span className="user-id">
        id:
        {user?.id}
      </span>
      <div>
        <label>
          name:
          <input
            type="text"
            placeholder="name"
            value={user?.name}
            onChange={(event) => setUser({
              ...user,
              name: event.target.value,
            })}
            className="user-name"
          />
        </label>
      </div>
      <Link to="/Lista" className="goback">go back</Link>
      <button type="button" className="save">save</button>
    </>
  );
}

export default Details;

/*

function App() {
  const users = useSelector((store) => store.users);
  const dispatch = useDispatch();
  const [input, setInput] = useState();
  const [index, setIndex] = useState();

  function create() {
    if (!input.trim()) return;
    dispatch({
      type: action.CREATE_USER,
      user: input,
    });

    setInput('');
  }

  function update() {
    if (!input.trim()) return;
    dispatch({
      type: action.UPDATE_USER,
      user: input,
      index,
    });

    setInput('');
  }

  return (
    <>

    </>
  );
}

*/
