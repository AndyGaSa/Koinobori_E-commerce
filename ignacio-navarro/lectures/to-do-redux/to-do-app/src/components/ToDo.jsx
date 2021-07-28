import React from 'react';
import './ToDo.css';

export default function ToDo() {
  return (
    <div className="ToDo__input-container">
      <h2>ToDo list</h2>
      <input type="text" name="addTask" placeholder="Add Task" />
      <input type="text" name="addDescription" placeholder="Add Description" />
      <button className="ToDo__button" type="button">Add</button>
    </div>
  );
}
