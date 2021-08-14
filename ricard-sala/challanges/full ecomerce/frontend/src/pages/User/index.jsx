import React from 'react';
import { Link } from 'react-router-dom';

export default function User() {
  const Users = [{ user: 'pepe' }];
  return (
    <ul className="user">
      {Users.map((user) => (
        <li>
          <Link
            to={`/cart/${user.id}`}
            key={user.id}
          >
            <span className="user-name" />
            {user.name}
            <button type="button"> logOut</button>
          </Link>
        </li>
      ))}
    </ul>
  );
}
