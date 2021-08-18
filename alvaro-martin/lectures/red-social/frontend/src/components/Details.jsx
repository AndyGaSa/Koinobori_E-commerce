/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser, submitUser } from '../redux/actions/user.creatos';

export default function Users() {
  const dispatch = useDispatch();
  const [userUpdated, setUserUpdated] = useState();
  const user = useSelector((store) => store.users);
  useEffect(() => {
    dispatch(loadUser());
  }, []);
  function saveInputChanges(event) {
    setUserUpdated({
      ...userUpdated,
      [event.target.name]: event.target.value,
    });
  }
  return (
    <>
      <h2>
        Name:
        {' '}
        {user.name}
      </h2>
      <input type="text" name="name" onChange={saveInputChanges} />
      <hr />
      <h2>
        Age:
        {user.age}
      </h2>
      <input type="text" name="age" onChange={saveInputChanges} />
      <hr />
      <h2>
        EyeColor:
        {' '}
        {user.eyeColor}
      </h2>
      <input type="text" name="eyeColor" onChange={saveInputChanges} />
      <hr />
      <button type="button" onClick={() => dispatch(submitUser(userUpdated, user._id))}>Submit</button>
    </>
  );
}
