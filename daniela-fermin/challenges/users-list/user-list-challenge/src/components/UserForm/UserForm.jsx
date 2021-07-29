/* eslint-disable react/prop-types */
import React from 'react';

export default function UserForm({ user, userChange }) {
  return (
    <div>

      <span>
        Id:
      </span>
      {user.id}
      <label htmlFor="user-name">
        Name:
        <input
          type="text"
          name="name"
          placeholder="User Name"
          value={user?.name}
          onChange={userChange}
        />
      </label>
      <label htmlFor="user-username">
        Username:
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={user?.username}
          onChange={userChange}
        />
      </label>
      <label htmlFor="user-email">
        Email:
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={user?.email}
          onChange={userChange}
        />
      </label>
      <div>
        <span>Address:</span>
        <label htmlFor="user-street">
          Street:
          <input
            type="text"
            name="address.street"
            placeholder="Street"
            value={user?.address.street}
            onChange={userChange}
          />
        </label>
        <label htmlFor="user-suite">
          Suite:
          <input
            type="text"
            name="address.suite"
            placeholder="Suite"
            value={user?.address.suite}
            onChange={userChange}
          />
        </label>
        <label htmlFor="user-city">
          City:
          <input
            type="text"
            name="address.city"
            placeholder="City"
            value={user?.address.city}
            onChange={userChange}
          />
        </label>
        <label htmlFor="user-zipcode">
          Zipcode:
          <input
            type="text"
            name="address.zipcode"
            placeholder="Zipcode"
            value={user?.address.zipcode}
            onChange={userChange}
          />
        </label>
      </div>
      <label htmlFor="user-phone">
        Phone:
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={user?.phone}
          onChange={userChange}
        />
      </label>
      <label htmlFor="user-website">
        Website:
        <input
          type="text"
          name="website"
          placeholder="Website"
          value={user?.website}
          onChange={userChange}
        />
      </label>
      <div>
        <span>Company:</span>
        <label htmlFor="user-company">
          Name:
          <input
            type="text"
            name="company.name"
            placeholder="Company name"
            value={user?.company.name}
            onChange={userChange}
          />
        </label>
        <label htmlFor="user-catchphrase">
          Catchphrase:
          <input
            type="text"
            name="company.catchPhrase"
            placeholder="Company name"
            value={user?.company.catchPhrase}
            onChange={userChange}
          />
        </label>
        <label htmlFor="user-bs">
          bs:
          <input
            type="text"
            name="company.bs"
            placeholder="Company bs"
            value={user?.companybs.catchPhrase}
            onChange={userChange}
          />
        </label>
      </div>
    </div>

  );
}
