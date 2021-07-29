import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Lista() {
  const users = useSelector((store) => store.users);
  return (
    <>
      <h1>User List</h1>
      <ul>
        {
              users.map((user) => (
                <li key={user.name}>
                  <Link to={`/detail/${user.id}`}>
                    <span>{user?.name}</span>
                  </Link>
                </li>
              ))
          }
      </ul>
    </>
  );
}

export default Lista;
