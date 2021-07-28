/* eslint-disable react/prop-types */
import React from 'react';
import './ToDoCard.css';

export default function ToDoCard({ title, description }) {
  return (
    <div className="ToDoClass__container">
      <h3>
        {title}
      </h3>
      <p>{description}</p>
      <button className="ToDoCard__button" type="button">delete</button>
      <button className="ToDoCard__button" type="button">edit</button>
    </div>
  );
}
