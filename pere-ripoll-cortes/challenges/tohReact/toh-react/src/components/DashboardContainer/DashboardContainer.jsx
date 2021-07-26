/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from 'react';

export default function DashboardContainer({ heroes }) {
  return (
    <>
      <h2>Top Heroes</h2>
      {heroes.map((hero) => (<a href="#">{hero}</a>))}
    </>
  );
}
