import React from 'react';

function Details() {
  return (
    <>
      <h2>Magenta details!</h2>
      <span className="hero-id">id:</span>
      <span>
        name:
        <input type="text" className="hero-name" />
      </span>
      <button type="button">Back</button>
    </>
  );
}

export default Details;
