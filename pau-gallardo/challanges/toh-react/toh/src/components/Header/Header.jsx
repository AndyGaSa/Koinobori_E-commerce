/* eslint-disable no-console */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';

export default function Header({ validate }) {
  return (
    <>
      <h1>Tour of Heroes</h1>
      <button type="button" onClick={() => validate('dashboard')}>Dashboard</button>
      <button type="button" onClick={() => validate('heroes')}>Heroes</button>
    </>
  );
}
