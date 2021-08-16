import React from 'react';

export default function Search() {
  return (
    <>
      <input type="text" />
      <label htmlFor="by_name">
        by name
        <input type="radio" id="by_name" />
      </label>
      <label htmlFor="by_description">
        by description
        <input type="radio" id="by_description" />
      </label>
      <button
        type="button"
      >
        Search
      </button>
    </>
  );
}
