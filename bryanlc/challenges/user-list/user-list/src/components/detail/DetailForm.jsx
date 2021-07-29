/* eslint-disable react/prop-types */
import React from 'react';

export default function DetailForm({ user }) {
  return (
    <div className="wikipedia">
      <label htmlFor="hero-name">
        <span>Id :</span>
        {' '}
        <span>{user?.id}</span>
      </label>
      <label htmlFor="hero-name">
        <span>name :</span>
        {' '}
        <span>
          {' '}
          {user?.name}
        </span>
      </label>
      <label htmlFor="hero-name">
        User name :
        {' '}
        {user?.username}
      </label>
      <label htmlFor="hero-name">
        Email :
        {' '}
        {user?.email}
      </label>
      <label htmlFor="hero-name">
        Adres :
        {' '}
        {user?.adres}
      </label>
    </div>
  );
}
