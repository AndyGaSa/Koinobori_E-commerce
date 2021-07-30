/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import actionTypes from '../redux/actions/action.types';

export default function UserForm() {
  const users = useSelector((store) => store.users);
  const dispatch = useDispatch();

  const { userId } = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    if (userId) {
      const foundUser = users.find((currentUser) => currentUser.id === +userId);
      setUser(foundUser);
    }
  }, [userId]);

  function userChange(event) {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    });
  }

  return (
    <div className="users__details">
      <label htmlFor="user-id">
        Id:
        <input
          name="id"
          placeholder="Id"
          value={user?.id}
        />
      </label>

      <label htmlFor="user-name">
        Name:
        <input
          name="name"
          placeholder="Name"
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

      <label htmlFor="user-email">
        Email:
        <input
          name="email"
          placeholder="Email"
          value={user?.email}
          onChange={userChange}
        />
      </label>

      <label htmlFor="user-address">
        Address:
        <span className="user-address_attribut">Street:</span>
        <input
          name="street"
          placeholder="Street"
          value={user?.address.street}
          onChange={userChange}
        />
        <span className="user-address_attribut">Suite:</span>
        <input
          name="suite"
          placeholder="Suite"
          value={user?.address.suite}
          onChange={userChange}
        />
        <span className="user-address_attribut">city:</span>
        <input
          name="city"
          placeholder="City"
          value={user?.address.city}
          onChange={userChange}
        />
        <span className="user-address_attribut">zipcode:</span>
        <input
          name="zipcode"
          placeholder="Zip Code"
          value={user?.address.zipcode}
          onChange={userChange}
        />
        <span className="user-address_attribut">geo</span>
        <div className="user-address_attribut-geo-div">
          <span className="user-address_attribut-geo">Lattitude:</span>
          <input
            name="lat"
            placeholder="Lattitude"
            value={user?.address.geo.lat}
            onChange={userChange}
          />
          <span className="user-address_attribut-geo">Longitud:</span>
          <input
            name="lng"
            placeholder="Longitud"
            value={user?.address.geo.lng}
            onChange={userChange}
          />
        </div>
        Phone:
        <input
          name="phone"
          placeholder="phone"
          value={user?.phone}
          onChange={userChange}
        />
        WebSite:
        <input
          name="website"
          placeholder="WebSite"
          value={user?.website}
          onChange={userChange}
        />
        Company:
        <span className="user-address_attribut">name:</span>
        <input
          name="name"
          placeholder="Company Name"
          value={user?.company.name}
          onChange={userChange}
        />
        <span className="user-address_attribut">catchPhrase:</span>
        <input
          name="catchPhrase"
          placeholder="Catchphrase"
          value={user?.company.catchPhrase}
          onChange={userChange}
        />
        <span className="user-address_attribut">bs:</span>
        <input
          name="bs"
          placeholder="bs"
          value={user?.company.bs}
          onChange={userChange}
        />
      </label>
      <Link to="/">go back</Link>
      <button
        type="button"
        onClick={() => dispatch({
          type: actionTypes.UPDATE_USER,
          user
        })}
      >
        save

      </button>
    </div>
  );
}
