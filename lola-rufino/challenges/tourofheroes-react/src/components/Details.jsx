/* eslint-disable react/prop-types */
import React from 'react';
import { useParams } from 'react-router-dom';
import './details.css';
import heroes from '../heroes.const';

export default function Details() {
  // const [heroId] = useState(match.params.heroId);
  const { heroId } = useParams();
  return (
    <div>
      <h2>
        {heroes.name}
        {' '}
        name details!
      </h2>
      <span>
        ID:
      </span>
      {heroId}
      <span>Name:</span>
      <input type="text" id="hero__name" />
      <span>Slug: </span>
      <span>PowerStats:</span>
      <span>Appearance:</span>
      <span>Biography:</span>
      <span>Work:</span>
      <span>Connections:</span>
      <span>Image:</span>
      <button type="submit">Go back</button>
      <button type="submit">Save</button>
    </div>
  );
}
