import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function ListOfUsers() {
  const users = useSelector((store) => store.users);
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
            <button type="button">
              x
            </button>
            <button type="button">
              update
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
