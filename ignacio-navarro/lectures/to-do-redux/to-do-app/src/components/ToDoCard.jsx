/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './ToDoCard.css';
import { useDispatch } from 'react-redux';
import actionTypes from '../redux/actions/action.types';

export default function ToDoCard({ title, description }) {
  const [newTitle, setNewTitle] = useState();
  const [newDescription, setNewDescription] = useState();
  const [isInput, setInput] = useState(false);
  const dispatch = useDispatch();
  function deleteTask() {
    dispatch({
      type: actionTypes.DELETE_TODO,
      toDo: description,
    });
  }
  function editTask() {
    // eslint-disable-next-line no-unused-expressions
    (isInput) ? setInput(false) : setInput(true);
  }
  function setEditTask() {
    // eslint-disable-next-line no-unused-expressions
    (isInput) ? setInput(false) : setInput(true);
    if (!title.trim()) return;

    dispatch({
      type: actionTypes.UPDATE_TODO,
      toDo: ([newTitle, newDescription]),
    });
  }
  return (
    <div className="ToDoClass__container">
      {!isInput
        ? (
          <>
            <h3 id="task-title">
              {title}
            </h3>
            <p id="task-description">{description}</p>
            <button className="ToDoCard__button" onClick={deleteTask} type="button">delete</button>
            <button className="ToDoCard__button" onClick={editTask} type="button">edit</button>
          </>
        )
        : (
          <>
            <input type="text" name="addTask" value={newTitle} onChange={((event) => setNewTitle(event.target.value))} />
            <input type="text" name="addTask" value={newDescription} onChange={((event) => setNewDescription(event.target.value))} />
            <button className="ToDoCard__button" onClick={deleteTask} type="button">delete</button>
            <button className="ToDoCard__button" onClick={setEditTask} type="button">edit</button>
          </>
        )}

    </div>
  );
}
