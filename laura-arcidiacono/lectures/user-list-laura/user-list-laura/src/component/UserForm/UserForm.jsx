/* eslint-disable react/prop-types */
import React from 'react';

export default function UserForm({ user, userChange }) {
  return (
    <div>
      <label htmlFor="user-name">
        User Name:
        <input
          name="name"
          placeholder="User Name"
          value={user?.name}
          onChange={userChange}
        />
      </label>

      <label htmlFor="user-username">
        Username:
        <input
          name="username"
          placeholder="Username"
          value={user?.username}
          onChange={userChange}
        />
      </label>

      <label htmlFor="email">
        Email:
        <input
          name="email"
          placeholder="email"
          value={user?.email}
          onChange={userChange}
        />
      </label>

    </div>
  );
}
