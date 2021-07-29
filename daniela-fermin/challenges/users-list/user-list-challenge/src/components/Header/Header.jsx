import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h1>User List</h1>
      <nav>
        <Link to="ListOfUsers\ListOfUsers">Users</Link>
      </nav>
    </header>
  );
}
