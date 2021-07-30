/* eslint-disable no-console */
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Form from './Form';

export default function Details() {
  const { id } = useParams();
  const users = useSelector((store) => store.users);
  const user = users[id - 1];

  function change(event) {
    user[event.target.name] = event.target.value;
    console.log(user);
  }

  return (
    <div className="details">
      <h2>
        Details:
        {' '}
        {user.name}
        .
      </h2>
      <Form user={user} change={change} />
      <button type="button">Update</button>
    </div>
  );
}
