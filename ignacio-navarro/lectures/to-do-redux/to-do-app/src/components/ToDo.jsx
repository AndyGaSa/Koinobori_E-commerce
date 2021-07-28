import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actionTypes from '../redux/actions/action.types';
import './ToDo.css';

export default function ToDo() {
  // eslint-disable-next-line no-unused-vars
  const ToDos = useSelector((store) => store.ToDos);
  const dispatch = useDispatch();
  const [titleValue, setTitleValue] = useState();
  const [descriptionValue, setDescriptionValue] = useState();
  function create() {
    // eslint-disable-next-line no-undef
    if (!titleValue.trim()) return;

    dispatch({
      type: actionTypes.CREATE_TODO,
      toDo: ([titleValue, descriptionValue]),
    });

    setTitleValue('');
    setDescriptionValue('');
  }

  return (
    <div className="ToDo__input-container">
      <h2>ToDo list</h2>
      <input type="text" name="addTask" value={titleValue} onChange={((event) => setTitleValue(event.target.value))} placeholder="Add Task" />
      <input type="text" name="addTask" value={descriptionValue} onChange={((event) => setDescriptionValue(event.target.value))} placeholder="Add Description" />
      <button
        className="ToDo__button"
        type="button"
        onClick={create}
      >
        Add

      </button>
    </div>
  );
}
