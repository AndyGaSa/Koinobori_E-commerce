import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Usernames() {
  const users = useSelector((store) => store.users);

  return (
    <>
      <h2>Users</h2>

      <ul>
        {users.map((user) => (
          <li>
            <Link to={`/details/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
