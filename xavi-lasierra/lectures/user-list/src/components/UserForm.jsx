/* eslint-disable react/prop-types */
import React from 'react';

function UserForm({ user, changeUser, changeAddressUser }) {
  return (
    <form>
      <label htmlFor="username">
        Username:
        <input name="username" type="text" value={user?.username} onChange={changeUser} />
      </label>
      <label htmlFor="name">
        Complete name:
        <input name="name" type="text" value={user?.name} onChange={changeUser} />
      </label>
      <label htmlFor="email">
        Email:
        <input name="email" type="email" value={user?.email} onChange={changeUser} />
      </label>
      <div>
        <h3>Address:</h3>
        <label htmlFor="street">
          Street:
          <input name="street" type="text" value={user?.address?.street} onChange={changeAddressUser} />
        </label>
        <label htmlFor="city">
          City:
          <input name="city" type="text" value={user?.address?.city} onChange={changeAddressUser} />
        </label>
      </div>
      <label htmlFor="phone">
        Phone:
        <input name="phone" type="tel" value={user?.phone} onChange={changeUser} />
      </label>
      <label htmlFor="website">
        Website:
        <input name="website" type="url" value={user?.website} onChange={changeUser} />
      </label>
    </form>
  );
}

export default UserForm;
